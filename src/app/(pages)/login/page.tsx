"use client";

import React from "react";

const Login: React.FC = () => {
  return (
    <div className="max-w-md mx-auto w-[600px] h-auto bg-white rounded-xl shadow-md p-10">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Login to your account
      </h2>

      <div className="flex justify-between gap-4 mb-6">
        <button className="w-full border border-gray-300 py-2 rounded-md flex justify-center items-center gap-2">
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          Google
        </button>
        <button className="w-full border border-gray-300 py-2 rounded-md flex justify-center items-center gap-2">
          <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-5 h-5" />
          LinkedIn
        </button>
      </div>

      <div className="text-center text-sm text-gray-500 mb-4">or</div>

      <div className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div className="flex justify-end mt-2 text-sm">
        <a href="#" className="text-blue-500">
          Forgot password?
        </a>
      </div>

      <button className="w-full bg-black text-white py-3 mt-6 rounded-md font-semibold">
        LOGIN
      </button>

      <div className="text-center text-sm mt-6">
        Don’t have an account?{" "}
        <a href="#" className="font-semibold text-purple-600">
          Register now
        </a>
      </div>
    </div>
  );
};

export default Login;
