"use client";

import AccountSidebarItem from "./AccountSidebarItem";
import AccountProfile from "./AccountProfile";
import { sidebarItems } from "@/src/lib/constants/sidebarItems";

function AccountSidebar() {
  return (
    <div className="bg-gray-50">
      <AccountProfile />
      {sidebarItems.map((item) => (
        <AccountSidebarItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default AccountSidebar;
