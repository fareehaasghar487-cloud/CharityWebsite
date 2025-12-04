//gkci dvtt bygw jsah

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fareehaasghar487@gmail.com",
    pass: "gkci dvtt bygw jsah",
  },
  secure: false,
  timeout: 10000,
  tls: {
    rejectUnauthorized: false,
  },
});

const SendMail = async (email, subject, text) => {
  try {
    const mailOptions = {
      from: "fareehaasghar64@gmail.com",
      to: email,
      subject: subject,
      html: text,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    throw new Error("Failed to send mail");
  }
};

export default SendMail;

