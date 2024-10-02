"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/posts", label: "Posts" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
];

function Navbar() {
  const pathName = usePathname();

  const getLinkClass = (href: string) =>
    pathName === href ? "text-aljazeera-red" : "hover:underline";

  return (
    <nav className='sticky top-0 w-full z-50 bg-[#f6f6f6]'>
      <div className='max-w-screen-xl mx-auto px-3 py-5 flex justify-between items-center'>
        <Image
          className='object-cover rounded w-8'
          src='/images/ftc-logo.jpg'
          alt='free the citizens'
          placeholder='blur'
          blurDataURL='/images/default.jpg'
          quality={75}
          width={50}
          height={50}
        />
        <div className='space-x-5'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={getLinkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
