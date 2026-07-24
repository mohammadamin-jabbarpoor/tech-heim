"use client";

import {
  Bag,
  DollarCircle,
  Gift,
  Heart,
  LogoutCurve,
  Message,
  Notification,
  SecuritySafe,
  UserEdit,
} from "iconsax-react";
import AccountSidebarItem from "./AccountSidebarItem";
import AccountProfile from "./AccountProfile";

export const sidebarItems = [
  {
    id: "personal",
    title: "Personal Data",
    href: "/account",
    icon: UserEdit,
  },
  {
    id: "payment",
    title: "Payment",
    href: "/account/payment",
    icon: DollarCircle,
  },
  {
    id: "orders",
    title: "Orders",
    href: "/account/orders",
    icon: Bag,
  },
  {
    id: "wishlist",
    title: "Wish List",
    href: "/account/wishlist",
    icon: Heart,
  },
  {
    id: "discounts",
    title: "Discounts",
    href: "/account/discounts",
    icon: Gift,
  },
  {
    id: "security",
    title: "Security & access",
    href: "/account/security",
    icon: SecuritySafe,
  },
  {
    id: "notification",
    title: "Notification",
    href: "/account/notifications",
    icon: Notification,
  },
  {
    id: "contact",
    title: "Contact us",
    href: "/contact-us",
    icon: Message,
  },
  {
    id: "logout",
    title: "Log out",
    icon: LogoutCurve,
  },
];

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
