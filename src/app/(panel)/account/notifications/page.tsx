"use client";

import LayoutHeader from "@/src/components/features/account/LayoutHeader";
import { Direct, Sms, Story, Truck } from "iconsax-react";
import { useState } from "react";

const notifications = [
  {
    id: "email",
    title: "Emails",
    description:
      "We write emails to let you know what's important, like: new order, confirmations ",
    icon: Direct,
  },
  {
    id: "order",
    title: "Order Delivered",
    description: "You will be noticed once the order is delivered",
    icon: Truck,
  },
  {
    id: "push",
    title: "Push to your Device",
    description:
      "Receive notifications about your order status, promotions and other updates",
    icon: Sms,
  },
  {
    id: "product",
    title: "Product's availibilty",
    description: "You will be noticed when product gets available",
    icon: Story,
  },
] as const;

type NotificationId = (typeof notifications)[number]["id"];

function Notifications() {
  const [enabled, setEnabled] = useState<Record<NotificationId, boolean>>({
    email: true,
    order: true,
    push: true,
    product: false,
  });
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {notifications.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.id} className="w-full px-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-2">
                <div className="w-5 h-5 md:w6 md:h-6">
                  <Icon variant="Outline" color="#444" />
                </div>

                <p className="font-medium">{item.title}</p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setEnabled((prev) => ({
                    ...prev,
                    [item.id]: !prev[item.id],
                  }))
                }
                className={`relative h-8 w-14 shrink-0 rounded-full transition-colors duration-300 cursor-pointer ${
                  enabled[item.id] ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-pressed={enabled[item.id]}
              >
                <span
                  className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-md transition-all duration-300 ${
                    enabled[item.id] ? "left-7" : "left-1"
                  }`}
                />
              </button>
            </div>

            <div className="mt-2 w-full font-light text-gray-600 text-xs md:text-base">
              {item.description}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Notifications;
