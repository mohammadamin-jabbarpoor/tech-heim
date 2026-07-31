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
import { authClient } from "@/lib/auth/auth-client";
import { toast } from "sonner";

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

type UserMenuProps = {
  session: typeof authClient.$Infer.Session | null;
  onLoginClick: () => void;
};

function UserMenu({ session, onLoginClick }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      const { error } = await authClient.signOut();
      if (error) {
        toast.error(error.message || "Failed to log out");
        return;
      }
      setIsOpen(false);

      toast.success("You have been logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (!session?.user) {
    return (
      <button
        type="button"
        onClick={onLoginClick}
        className="hidden md:block cursor-pointer rounded-lg bg-primary px-2.5 py-2 lg:px-4 lg:py-3.5 text-white text-sm lg:text-base transition-all duration-300 hover:bg-primary-600"
      >
        Login / Sign Up
      </button>
    );
  }

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

                    <p className="font-light text-primary">
                      {session.user.name}
                    </p>
                  </div>

                  <p className="ml-10 font-light text-xs">
                    {session.user.email}
                  </p>
                </Link>
              </li>

              {userItems.map((item) => {
                const Icon = item.icon;
                const isLogout = item.id === "logout";

                return (
                  <li
                    key={item.id}
                    onClick={isLogout ? handleLogout : undefined}
                    className={`cursor-pointer hover:text-primary ${
                      isLogout && isLoggingOut
                        ? "pointer-events-none opacity-50"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Icon variant="Outline" size={24} color="currentColor" />

                      <span className="font-light">
                        {isLogout && isLoggingOut
                          ? "Logging out..."
                          : item.title}
                      </span>
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
