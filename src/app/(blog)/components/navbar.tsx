import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="sticky w-full">
      <div className="max-w-screen-xl mx-auto px-3 py-5">
        <h1 className="text-lg font-bold tracking-tight lg:text-xl text-aljazeera-red">
          #FreeTheCitizens
        </h1>
        <div className="space-x-5 pt-2">
          <Link href={`/`}>Home</Link>
          <Link href={`/about`}>About</Link>
          <Link href={`/events`}>Events</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
