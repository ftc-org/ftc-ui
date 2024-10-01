"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#f6f6f6]">
      <div className="max-w-screen-xl mx-auto px-3 py-5 flex justify-between items-center">
        <Image
          className="object-cover rounded w-8"
          src={"/images/ftc-logo.jpg"}
          alt={"free the citizens"}
          placeholder="blur"
          blurDataURL={"/images/default.jpg"}
          quality={75}
          width={50}
          height={50}
        />
        <div className="space-x-5">
          <Link
            href={`/`}
            className={
              pathName === "/" ? "text-aljazeera-red" : "hover:underline"
            }
          >
            Home
          </Link>
          <Link
            href={`/about`}
            className={
              pathName.startsWith("/about")
                ? "text-aljazeera-red"
                : "hover:underline"
            }
          >
            About
          </Link>
          <Link
            href={`/posts`}
            className={
              pathName.startsWith("/posts")
                ? "text-aljazeera-red"
                : "hover:underline"
            }
          >
            Posts
          </Link>
          <Link
            href={`/events`}
            className={
              pathName.startsWith("/events")
                ? "text-aljazeera-red"
                : "hover:underline"
            }
          >
            Events
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
