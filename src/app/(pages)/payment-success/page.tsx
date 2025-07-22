import Image from "next/image";
import React from "react";

const PaymentSuccess: React.FC = () => {
  return (
    <div className="bg-[#100a1f] min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full text-center p-6">
        {/* Green Circle with Checkmark */}
        <div className="mx-auto size-16 border border-[#00FF5D] rounded-full mb-6 flex items-center justify-center relative">
          <Image
            src="/images/payment/green_check.svg"
            alt="checkmark"
            width={32}
            height={32}
            className="z-10"
          />
        </div>

        {/* Main Text */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Payment Successful
        </h1>

        {/* Sub Text */}
        <p className="text-gray-400 text-lg mb-10">
          Your payment has been successfully processed.
        </p>

        {/* Button */}
        <button className="bg-white text-gray-900 font-bold py-4 px-10 w-4/5 mx-auto rounded-xl shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 ease-in-out">
          Open Dashboard
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
