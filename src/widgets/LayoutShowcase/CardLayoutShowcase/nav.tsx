import { useState } from "react";
import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

import { ShrinkableNav, ShrinkableItem } from "@/shared/ShrinkableSideNav";

export function SideNav() {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <ShrinkableNav isExpanded={isExpanded}>
      <SwitchButton switchState={() => setIsExpanded(!isExpanded)} />
      <Link className="w-full" href="/">
        <ShrinkableItem
          icon={<FaHouse className="text-xl" />}
          text="Home Page"
        />
      </Link>
    </ShrinkableNav>
  );
}

function SwitchButton({ switchState }: { switchState: () => void }) {
  return (
    <button className="hover:text-grayscale-12" onClick={switchState}>
      <GiHamburgerMenu className="text-xl" />
    </button>
  );
}
