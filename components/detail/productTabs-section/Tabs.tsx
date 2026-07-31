"use client";

import { useState } from "react";

function Tabs() {
  const [selectedTab, setSelectedTab] = useState("Technical Detail");

  const tabsName = ["Technical Detail", "Similar Products", "Comments"];

  return (
    <div className="w-full border-b border-b-gray-300">
      <div className="flex justify-between xs:justify-start gap-4 md:gap-6">
        {tabsName.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`font-light text-xs md:text-sm lg:text-lg md:p-2 cursor-pointer ${selectedTab === tab ? "border-b border-b-primary text-primary" : "border-b-transparent"}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
