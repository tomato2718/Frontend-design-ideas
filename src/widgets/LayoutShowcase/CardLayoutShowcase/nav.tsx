import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHouse,
  FaGear,
  FaRegUser,
  FaStar,
  FaBasketShopping,
  FaArrowsLeftRight,
} from "react-icons/fa6";
import clsx from "clsx";

import { ShrinkableNav, ShrinkableItem } from "@/shared/ShrinkableSideNav";
import { EclipseToggle } from "@/shared/EclipseSwitcher";

type ThemeState = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

export function SideNav({ themeState }: { themeState: ThemeState }) {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <ShrinkableNav isExpanded={isExpanded}>
      {/* <ShrinkableItem 
        icon={<Image src="/tomato.svg" alt="logo" width={30} height={30} priority />}
        text="Card Layout"
      /> */}
      <Link className="w-full" href="/">
        <ShrinkableItem
          icon={<FaHouse className="text-2xl" />}
          text="Home Page"
        />
      </Link>
      <ShrinkableItem
        icon={<FaStar className="text-2xl" />}
        text="Some cool thing"
      />
      <ShrinkableItem
        icon={<FaBasketShopping className="text-2xl" />}
        text="More cool thing"
      />
      <div className="grow" />
      <button type="button" onClick={() => setIsExpanded(!isExpanded)}>
        <ShrinkableItem
          icon={<FaArrowsLeftRight className="text-2xl" />}
          text="Expand or Hide Nav"
        />
      </button>
      <SettingButton themeState={themeState} />
      <ShrinkableItem
        icon={<FaRegUser className="text-2xl" />}
        text="Example User"
      />
    </ShrinkableNav>
  );
}

function SettingButton({ themeState }: { themeState: ThemeState }) {
  const [isActivate, setIsActivate] = useState(false);
  const ref = useRef<HTMLDivElement>({} as any);
  useEffect(() => {
    const callback = (event: MouseEvent) => {
      if (!ref.current.contains(event.target as Node)) {
        setIsActivate(false);
      }
    };
    document.addEventListener("mousedown", callback);
    return () => document.removeEventListener("mousedown", callback);
  }, [ref]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="w-full"
        onClick={() => setIsActivate(!isActivate)}
      >
        <ShrinkableItem
          icon={<FaGear className="text-2xl" />}
          text="Setting"
          onSelected={isActivate}
        />
      </button>
      {isActivate && (
        <div className="absolute ms-2 bottom-0 left-full z-10">
          <div className="p-1 rounded-lg border bg-grayscale-3 border-grayscale-6">
            <div className="flex items-center gap-4 p-1">
              <span className="cursor-default text-nowrap">Dark mode</span>
              <EclipseToggle
                size={12}
                themeState={{
                  isDarkMode: themeState.isDarkMode,
                  switchTheme: () =>
                    themeState.setIsDarkMode(!themeState.isDarkMode),
                }}
              />
            </div>
            <hr className="border-grayscale-6 my-2" />
            <div className="rounded p-1 cursor-pointer hover:bg-accent-4">
              some choice
            </div>
            <div className="rounded p-1 cursor-pointer hover:bg-accent-4">
              another choice
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
