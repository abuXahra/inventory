"use client";
import { LucideHandCoins, LucideTimer, X } from "lucide-react";
import React, { useState } from "react";

export default function DashboardBanner() {
  const [hidden, setHidden] = useState(false);

  return (
    <div
      className={`${
        hidden
          ? "hidden"
          : "flex py-6 gap-4 px-8 justify-start bg-white items-center relative"
      }`}
    >
      {/* Icon */}
      <LucideHandCoins className="w-16 h-16 mr-10 text-slate-900" />
      {/* Text */}
      <div className="mr-6 w-1/2">
        <h3 className="font-bold text-w2">Start Accept Online Payment</h3>
        <p>
          Business are moving towards online payments as they are easy secure
          and fast. Try them for your Businesss today.
        </p>
      </div>

      {/* button */}
      <button className="py-2.5 px-4 uppercase bg-blue-500 rounded-lg text-white">
        Enable
      </button>

      {/* close button */}

      <button
        onClick={() => setHidden(true)}
        className="absolute top-4 right-16"
      >
        <X className="text-slate-600" />
      </button>
    </div>
  );
}
