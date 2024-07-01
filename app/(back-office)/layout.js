import HomeNavbar from "@/components/HomeNavbar";
import Header from "@/components/dashboards/Header";
import Sidebar from "@/components/dashboards/Sidebar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-60 w-full bg-slate-100 min-h-screen">
        <Header />
        <HomeNavbar />
        {children}
      </main>
    </div>
  );
}
