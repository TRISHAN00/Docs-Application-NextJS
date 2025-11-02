"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="hidden lg:flex items-center justify-center p-2 rounded-2xl  bg-amber-50 ">
      <Link href="/" aria-label="Home" className="flex items-center justify-center gap-2">
        <Image
          src="/icons/logo.svg"
          alt="Protocol"
          width={200}
          height={100}
          className="rounded-md"
        />
 
      </Link>
    </div>
  );
}
