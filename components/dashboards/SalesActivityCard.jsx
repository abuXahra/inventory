import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SalesActivityCard({ item }) {
  return (
    <Link
      href={item.href}
      className="cursor-pointer flex flex-col rounded-lg
           bg-white border border-slate-200 hover:border-blue-500 px-2 py-4 
           items-center justify-center transition-all duration-300 shadow"
    >
      <h4 className={`"font-semibold text-3xl ${item.color}`}>{item.number}</h4>
      <small className="text-slate-500">{item.unit}</small>
      <div className="flex justify-center items-center gap-1  text-slate-500">
        <CheckCircle2 className="w-3 h-3 mt-4" />
        <span className="mt-4 text-xs uppercase">{item.title}</span>
      </div>
    </Link>
  );
}
