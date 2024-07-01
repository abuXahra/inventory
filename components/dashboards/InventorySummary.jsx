import React from "react";

export default function InventorySummary({ item }) {
  return (
    <div
      className="cursor-pointer flex rounded-lg
 bg-white border border-slate-200 hover:border-blue-500 py-2 px-4
 items-center space-x-2 justify-between  transition-all duration-300 shadow"
    >
      <h2 className="text-slate-500 text-xs uppercase">{item.title}</h2>
      <h4 className="font-semibold text-2xl ">{item.number}</h4>
    </div>
  );
}
