import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="py-8">
      <Navbar />
      <main className="py-8">{children}</main>
      <Footer />
    </div>
  );
}
