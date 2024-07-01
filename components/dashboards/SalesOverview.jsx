import { BookCheck, Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import SalesActivityCard from "./SalesActivityCard";
import InventorySummary from "./InventorySummary";

export default function SalesOverview() {
  const salesActivity = [
    {
      title: "To be Packed",
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-blue-600",
    },
    {
      title: "To be Shipped",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-red-600",
    },
    {
      title: "To be Delivered",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-green-600",
    },
    {
      title: "To be Invoiced",
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-orange-600",
    },
  ];

  const invtorySummary = [
    {
      title: "Quantity in Hand",
      number: "10",
    },
    {
      title: "Quantity to be recieved",
      number: "10",
    },
  ];

  return (
    <div className="bg-blue-50 border-b border-slate-300 grid grid-cols-12 gap-4">
      {/* SALES ACTIVITY */}
      <div className="col-span-8 p-8 border-r border-slate-300 ">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <div className="grid grid-cols-4 gap-4 pr-4">
          {/* card */}

          {salesActivity.map((item, i) => (
            <SalesActivityCard item={item} key={i} />
          ))}
        </div>
      </div>

      {/* INVENTORY SUMMARY */}
      <div className="col-span-4 p-8">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
        <div className="flex flex-col gap-4">
          {invtorySummary.map((item, i) => (
            <InventorySummary item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
