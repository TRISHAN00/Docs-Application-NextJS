"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

export default function Header({docs}) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed inset-y-0 left-0 z-40 hidden w-72 overflow-y-auto border-r border-zinc-900/10 bg-white px-6 pb-8 pt-4 dark:border-white/10 dark:bg-[#17181C] lg:block xl:w-80">
      {/* Logo */}
      <Logo />

      {/* Top Navbar */}
      <div className="fixed inset-x-0 top-0 z-50 bg-white/70 px-4 backdrop-blur-md transition dark:bg-[#17181C]/70 sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80">
        <div className="flex h-14 items-center justify-between">
          {/* Search bar */}
          <div className="relative hidden lg:block lg:max-w-md lg:flex-auto">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              type="button"
              className="flex h-9 w-full items-center gap-2 rounded-full bg-white pl-3 pr-4 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20"
            >
              <Image
                src="/icons/search.svg"
                width={18}
                height={18}
                alt="Search"
              />
              <input
                type="text"
                placeholder="Search documentation..."
                className="flex-1 bg-transparent focus:outline-none text-zinc-700 dark:text-zinc-300"
              />
              <span className="ml-auto text-2xs text-zinc-400 dark:text-zinc-500">
                <kbd className="font-sans">Ctrl</kbd> + <kbd>K</kbd>
              </span>
            </button>

            {/* Search dropdown */}
            {searchOpen && (
              <div className="absolute left-0 top-12 z-50 w-full rounded-xl bg-white p-4 shadow-lg ring-1 ring-zinc-900/10 dark:bg-[#1E1F24] dark:ring-white/10">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                  Showing results for{" "}
                  <span className="font-semibold">"keyword"</span>
                </p>
                <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {[
                    "How to create a new component in Vue.js",
                    "How to create a new component in React.js",
                    "Next.js Routing",
                    "SSR - What is it?",
                  ].map((item, i) => (
                    <li key={i} className="py-2">
                      <a
                        href="#"
                        className="block text-sm text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400 transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <Sidebar docs={docs} />
    </header>
  );
}
