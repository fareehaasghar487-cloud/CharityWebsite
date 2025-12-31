import Donation from "../models/Donations.js";
import { asyncHandler } from "../MiddleWare/utils.js";
import Stripe from "stripe";

let _stripeClient = null;
function getStripe() {
	if (_stripeClient) return _stripeClient;
	const key = process.env.STRIPE_SECRET_KEY || "";
	if (!key) console.warn("STRIPE_SECRET_KEY is not set when initializing Stripe client");
	_stripeClient = new Stripe(key);
	return _stripeClient;
}

// Create donation
export const createDonation = asyncHandler(async (req, res) => {
	if (!req.user) return res.status(401).json({ message: "Unauthorized" });

	let imageUrl = null;
	if (req.file?.path) imageUrl = req.file.path;

	const donation = new Donation({
		...req.body,
		user: req.user.id,
		documentImg: imageUrl,
		confirmation: "Pending",
	});

	await donation.save();
	res.status(201).json({ message: "Donation submitted successfully!", donation });
});

// Get all donations
export const getAllDonations = asyncHandler(async (req, res) => {
	const { confirmation } = req.query;
	let filter = {};
	if (confirmation && confirmation !== "All") filter.confirmation = confirmation;
	const donations = await Donation.find(filter).populate("user", "name email phone");
	res.status(200).json(donations);
});

// Delete a donation
export const deleteDonation = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const donation = await Donation.findById(id);
	if (!donation) return res.status(404).json({ message: "Donation not found" });
	await donation.deleteOne();
	res.status(200).json({ message: "Donation deleted successfully" });
});

// Update/Edit a donation
export const updateDonation = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const donation = await Donation.findById(id);
	if (!donation) return res.status(404).json({ message: "Donation not found" });
	Object.keys(req.body).forEach((key) => (donation[key] = req.body[key]));
	if (req.file && req.file.path) donation.documentImg = req.file.path;
	await donation.save();
	res.status(200).json({ message: "Donation updated successfully", donation });
});

// Get donations for authenticated user
export const getUserDonations = asyncHandler(async (req, res) => {
	if (!req.user) return res.status(401).json({ message: "Unauthorized" });
	const donations = await Donation.find({ user: req.user.id });
	res.status(200).json(donations);
});

// Create PaymentIntent
export const createPaymentIntent = asyncHandler(async (req, res) => {
	const { amount, currency = "inr", metadata = {} } = req.body;
	console.log("createPaymentIntent called with:", { amount, currency, metadata });
	if (!amount) return res.status(400).json({ message: "Amount is required" });
	const intAmount = Number(amount);
	if (!Number.isFinite(intAmount) || intAmount <= 0) return res.status(400).json({ message: "Invalid amount" });

	try {
		const stripe = getStripe();
		const paymentIntent = await stripe.paymentIntents.create({
			amount: intAmount,
			currency,
			metadata,
			automatic_payment_methods: { enabled: true },
		});
		return res.status(200).json({ clientSecret: paymentIntent.client_secret });
	} catch (err) {
		console.error("Stripe createPaymentIntent error:", err);
		return res.status(500).json({ message: "Failed to create payment intent", error: err.message || err.toString() });
	}
});

// Confirm payment and optionally record donation
export const confirmPayment = asyncHandler(async (req, res) => {
	const { paymentIntentId } = req.body;
	if (!paymentIntentId) return res.status(400).json({ message: "paymentIntentId is required" });
	const stripe = getStripe();
	const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
	if (!paymentIntent) return res.status(404).json({ message: "PaymentIntent not found" });

	if (paymentIntent.status === "succeeded") {
		try {
			if (req.user) {
				const donation = new Donation({
					fullName: paymentIntent.metadata.fullName || req.user.name || "",
					email: paymentIntent.metadata.email || req.user.email || "",
					subject: paymentIntent.metadata.subject || "Donation",
					message: paymentIntent.metadata.message || "",
					price: Math.round(paymentIntent.amount || 0),
					user: req.user.id,
					confirmation: "Confirmed",
				});
				await donation.save();
			}
		} catch (err) {
			console.error("Failed to record donation:", err);
		}
	}

	res.status(200).json({ status: paymentIntent.status });
});

// Stripe webhook handler
export const stripeWebhook = asyncHandler(async (req, res) => {
	const sig = req.headers["stripe-signature"];
	const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
	let event;
	try {
		const stripe = getStripe();
		if (webhookSecret) {
			// req.body will be raw buffer when route registered with express.raw
			event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
		} else {
			event = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
		}
	} catch (err) {
		console.error("Webhook signature verification failed.", err.message);
		return res.status(400).send(`Webhook Error: ${err.message}`);
	}

	if (event && event.type === "payment_intent.succeeded") {
		const paymentIntent = event.data ? event.data.object : event;
		try {
			const metadata = paymentIntent.metadata || {};
			const donation = new Donation({
				fullName: metadata.fullName || "",
				email: metadata.email || "",
				subject: metadata.subject || "Donation",
				message: metadata.message || "",
				price: Math.round(paymentIntent.amount || 0),
				confirmation: "Confirmed",
			});
			await donation.save();
		} catch (err) {
			console.error("Failed to create donation from webhook:", err);
		}
	}

	res.json({ received: true });
});

