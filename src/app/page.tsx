"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col m-2 gap-2">
      <h1 className="text-2xl">HomePage</h1>
      <span>yeah, nothing for now :P</span>
      <h2 className="text-xl">Pages</h2>
      <ul className="list-inside list-disc">
        <li className="text-light-blue-11 hover:text-light-blue-12">
          <Link href="/theme-switcher">theme switcher</Link>
        </li>
      </ul>
    </div>
  );
}
