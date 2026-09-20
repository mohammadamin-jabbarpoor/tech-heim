"use client";

import {
  ProfileCircle,
  User,
  Bag2,
  DollarCircle,
  Heart,
  LogoutCurve,
} from "iconsax-react";
import Link from "next/link";
import { useState } from "react";

const userItems = [
  {
    id: "orders",
    icon: Bag2,
    title: "Orders",
  },
  {
    id: "wishlist",
    icon: Heart,
    title: "Wish List",
  },
  {
    id: "payments",
    icon: DollarCircle,
    title: "Payments",
  },
  {
    id: "logout",
    icon: LogoutCurve,
    title: "Log out",
  },
];

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer p-2"
      >
        <User variant="Linear" size={24} color="black" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 top-full z-50 mt-7.5 w-72 rounded-lg bg-white shadow-lg">
            <ul className="flex flex-col gap-6 p-4">
              <li>
                <Link
                  href="/account"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  <div className="flex items-center gap-4">
                    <ProfileCircle variant="Outline" size={24} color="black" />

                    <p className="font-light text-primary">mohammad</p>
                  </div>

                  <p className="ml-10 font-light text-xs">ddd</p>
                </Link>
              </li>

              {userItems.map((item) => {
                const Icon = item.icon;
                const isLogout = item.id === "logout";

                return (
                  <li
                    key={item.id}
                    className="cursor-pointer hover:text-primary"
                  >
                    <div className="flex items-center gap-4">
                      <Icon variant="Outline" size={24} color="currentColor" />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default UserMenu;
