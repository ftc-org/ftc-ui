import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full h-full">
      <div className="flex max-w-screen-xl mx-auto px-3 flex-col items-center justify-between gap-5 border-t pt-8 sm:flex-row border-neutral-500">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()}{" "}
          <Link
            href="https://github.com/ftc-org"
            className=" text-aljazeera-red underline hover:text-aljazeera-red"
            target="_blank"
          >
            #FreeTheCitizens
          </Link>{" "}
        </p>
        <div className="flex gap-4">
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
