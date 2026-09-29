"use client";

import { sidebarItems } from "@/src/lib/constants/sidebarItems";
import MobileProfile from "./MobileProfile";
import MobileAccountItem from "./MobileAccountItem";

function MobileAccount() {
  return (
    <div>
      <MobileProfile />
      <div>
        {sidebarItems.map((item) => (
          <MobileAccountItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MobileAccount;
