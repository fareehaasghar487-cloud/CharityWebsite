import React, { useState } from "react";

export default function DonorSettings() {
  const [profile, setProfile] = useState({
    name: "Mohammed Abdullah",
    email: "mohammed@gmail.com",
    phone: "+974 5555 1234",
  });

  const [password, setPassword] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    campaign: true,
  });

  return (
    <div className="w-full min-h-screen bg-[#F2EDE9] p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Donor Settings</h2>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8 max-w-3xl">
        <h3 className="text-lg font-semibold mb-4">Profile Information</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="border p-3 rounded-md w-full"
            placeholder="Full Name"
          />

          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="border p-3 rounded-md w-full"
            placeholder="Email Address"
          />

          <input
            type="text"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="border p-3 rounded-md w-full"
            placeholder="Phone Number"
          />
        </div>

        <button className="mt-4 px-6 py-2 bg-[#8A1538] text-white rounded-md">
          Update Profile
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8 max-w-3xl">
        <h3 className="text-lg font-semibold mb-4">Change Password</h3>

        <div className="grid gap-4">
          <input
            type="password"
            placeholder="Current Password"
            value={password.current}
            onChange={(e) =>
              setPassword({ ...password, current: e.target.value })
            }
            className="border p-3 rounded-md w-full"
          />

          <input
            type="password"
            placeholder="New Password"
            value={password.newPass}
            onChange={(e) =>
              setPassword({ ...password, newPass: e.target.value })
            }
            className="border p-3 rounded-md w-full"
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            value={password.confirm}
            onChange={(e) =>
              setPassword({ ...password, confirm: e.target.value })
            }
            className="border p-3 rounded-md w-full"
          />
        </div>

        <button className="mt-4 px-6 py-2 bg-[#8A1538] text-white rounded-md">
          Update Password
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl">
        <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>

        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  email: !notifications.email,
                })
              }
            />
            Email Notifications
          </label>

          <label className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={notifications.sms}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  sms: !notifications.sms,
                })
              }
            />
            SMS Alerts
          </label>

          <label className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={notifications.campaign}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  campaign: !notifications.campaign,
                })
              }
            />
            Campaign Updates
          </label>
        </div>

        <button className="mt-5 px-6 py-2 bg-[#8A1538] text-white rounded-md">
          Save Preferences
        </button>
      </div>
    </div>
  );
}
