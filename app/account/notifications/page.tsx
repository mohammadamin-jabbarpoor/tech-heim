"use client";

import LayoutHeader from "@/components/account/LayoutHeader";
import { Direct, Sms, Story, Truck } from "iconsax-react";
import { useState } from "react";
import { type Icon } from "iconsax-react";

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
    <div className="space-y-6">
      <LayoutHeader
        title="Notification"
        description="Manage your notification settings"
      />
      <div className="w-full grid grid-cols-2 gap-6">
        {notifications.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="px-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Icon variant="Outline" size={24} color="#444" />
                  <p className="font-medium">{item.title}</p>
                </div>
                <button
                  onClick={() =>
                    setEnabled((prev) => ({
                      ...prev,
                      [item.id]: !prev[item.id],
                    }))
                  }
                  className={`relative h-10 w-20 rounded-full transition-colors duration-300 ${
                    enabled[item.id] ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-8 w-8 rounded-full bg-white shadow-md transition-transform duration-300 ${
                      enabled[item.id] ? "translate-x-1" : "-translate-x-9"
                    }`}
                  />
                </button>
              </div>
              <div className="w-72 font-light text-gray-600">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notifications;
