import React from "react";

const AirdropLanding = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center px-6 py-10">
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">
          🚀 Earn Free Crypto with Grass & Nodepay Airdrops! 🚀
        </h1>
        <p className="text-lg text-gray-300">
          Don't miss this opportunity to claim **free crypto** by participating
          in these **limited-time airdrops**. Follow the steps below and start
          earning today!
        </p>
      </div>

      {/* Grass Airdrop Section */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-semibold text-green-400 mb-3">
          🌱 Grass Airdrop
        </h2>
        <p className="text-gray-300 mb-4">
          Grass rewards users for sharing their **unused internet bandwidth**.
          You earn **passive income** in crypto just by installing their app and
          keeping it running in the background.
        </p>
        <h3 className="text-lg font-semibold text-gray-100 mb-2">
          How to Participate:
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            1️⃣ <strong>Sign up</strong> on Grass using the referral link below.
          </li>
          <li>
            2️⃣ <strong>Download & install</strong> the Grass app on your device.
          </li>
          <li>
            3️⃣ <strong>Run the app</strong> in the background to start earning.
          </li>
          <li>
            4️⃣ Withdraw your earnings **once you reach the minimum payout**.
          </li>
        </ul>
        <a
          href="YOUR_GRASS_REFERRAL_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-500 hover:bg-green-600 text-white text-center py-3 px-4 rounded-lg mt-5 font-semibold transition"
        >
          🚀 Join Grass Airdrop Now
        </a>
      </div>

      {/* Nodepay Airdrop Section */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-semibold text-blue-400 mb-3">
          🟢 Nodepay Airdrop
        </h2>
        <p className="text-gray-300 mb-4">
          Nodepay is a decentralized **payment system** that rewards users for
          simply signing up and participating in their network.
        </p>
        <h3 className="text-lg font-semibold text-gray-100 mb-2">
          How to Participate:
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            1️⃣ <strong>Register</strong> an account on Nodepay using the referral
            link below.
          </li>
          <li>
            2️⃣ <strong>Complete a simple KYC verification</strong> (takes 2-5
            minutes).
          </li>
          <li>
            3️⃣ Receive your **free airdrop instantly** once verified.
          </li>
          <li>
            4️⃣ Earn extra rewards by holding & using Nodepay tokens.
          </li>
        </ul>
        <a
          href="YOUR_NODEPAY_REFERRAL_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-4 rounded-lg mt-5 font-semibold transition"
        >
          🚀 Claim Nodepay Airdrop Now
        </a>
      </div>

      {/* Final Call to Action */}
      <div className="text-center max-w-3xl">
        <h2 className="text-2xl font-bold mb-2">🔥 Act Fast – Limited-Time Airdrops! 🔥</h2>
        <p className="text-gray-300 mb-4">
          These airdrops won't last forever! Sign up now and start earning
          **free crypto today**!
        </p>
      </div>
    </div>
  );
};

export default AirdropLanding;
