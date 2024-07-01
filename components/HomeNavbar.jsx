"use client";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HomeNavbar() {
  // making a route active
  const pathname = usePathname();

  console.log(pathname);

  const navLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/home/overview",
    },
    {
      title: "Getting Started",
      href: "/dashboard/home/getting-started",
    },
    {
      title: "Recent Updates",
      href: "/dashboard/home/updates",
    },
    {
      title: "Announcements",
      href: "/dashboard/home/announcement",
    },
  ];

  return (
    <div className="h-32 p-5 header-bg border-b-2 border-slate-200">
      <div className="flex space-x-3">
        <div className="flex w-12 h-12 bg-white rounded-lg items-center justify-center">
          <Building2 />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-slate-700">Hello, JB WEBDEVELOPER</p>
          <span className="text-sm">Garat</span>
        </div>
      </div>
      <nav className="sticky flex space-x-4 mt-6 border-b">
        {navLinks.map((navItem, index) => (
          <Link
            key={index}
            href={navItem.href}
            className={
              pathname === navItem.href
                ? " py-1 border-b-2 border-blue-600"
                : "py-1"
            }
          >
            {navItem.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default HomeNavbar;

// 1:27:00
