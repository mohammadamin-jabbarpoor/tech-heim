"use client";

import { useState } from "react";

function Tabs() {
  const [selectedTab, setSelectedTab] = useState("Technical Detail");

  const tabsName = ["Technical Detail", "Similar Products", "Comments"];

  return (
    <div className="w-full border-b border-b-gray-300">
      <div className="flex gap-6">
        {tabsName.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`font-light text-lg p-2 cursor-pointer ${selectedTab === tab ? "border-b border-b-primary text-primary" : "border-b-transparent"}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
