"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col m-2 gap-2">
      <h1 className="text-2xl">HomePage</h1>
      <span>yeah, haven&#39;t create hompage yet :P</span>
      <h2 className="text-xl">Pages</h2>
      <ul className="list-inside list-disc">
        <li className="text-accent-11 hover:text-accent-12">
          <Link href="/theme-switcher">theme switcher</Link>
        </li>
        <li>
          <span>layout</span>
          <ul className="list-inside list-disc ps-4">
            <li className="text-accent-11 hover:text-accent-12">
              <Link href="/layout/card-layout">card layout</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
