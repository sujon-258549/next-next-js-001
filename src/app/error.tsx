"use client";
import { FC } from "react";

interface ErrorProps {
  error?: { message?: string }; // Error object with optional message
  reset?: () => void; // Function to reset the error
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="relative">
        <div className="relative w-32 h-32">
          <div
            className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#0ff] border-b-[#0ff] animate-spin"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin"
            style={{
              animationDuration: "2s",
              animationDirection: "reverse",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm" />
      </div>

      {/* Error Message */}
      {error?.message && (
        <p className="mt-4 text-lg text-red-500">{error.message}</p>
      )}

      {/* Reset Button */}
      {reset && (
        <button
          onClick={reset}
          className="mt-4 px-4 py-2 bg-[#0ff] text-black font-semibold rounded-lg shadow-md hover:bg-[#0cc] transition"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;
