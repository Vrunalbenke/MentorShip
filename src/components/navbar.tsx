"use client";
import Link from "next/link";
import Image from "next/image";
import YMPMatch2 from "../../assets/Group 4title.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const isActive = (path: string) => activePath === path;
  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2  px-4 py-3 border bg-zinc-900 border-neutral-500 rounded-2xl z-[30]">
      <div className="flex flex-row justify-center align-center space-x-6">
        <div className="ms-2">
          <Link href="/">
            <Image
              src={YMPMatch2}
              alt="YMPMatch"
              width={120}
              height={90}
              className="cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex flex-row justify-center items-center space-x-6 ">
          <Link
            href="/about"
            className={`text-white hover:text-gray-300 text-[12px] font-semibold ${
              isActive("/about") ? "bg-[#3A3A3A] px-2 py-1 rounded" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/pricing"
            className={`text-white hover:text-gray-300 text-[12px] font-semibold ${
              isActive("/pricing") ? "bg-[#3A3A3A] px-2 py-1 rounded" : ""
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className={`text-white hover:text-gray-300 text-[12px] font-semibold ${
              isActive("/blog") ? "bg-[#3A3A3A] px-2 py-1 rounded" : ""
            }`}
          >
            Blog
          </Link>
        </div>
        <div className="space-x-4">
          <Link
            href="/waitlist"
            className="bg-white text-black text-[12px] px-4 py-2 rounded-md hover:bg-gray-200  font-semibold"
          >
            Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
