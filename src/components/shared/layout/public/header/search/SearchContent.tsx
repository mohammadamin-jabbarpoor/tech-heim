import { CloseCircle } from "iconsax-react";

const mostSearchItems = [
  "MacBook Pro",
  "JBL speaker",
  "AirPods Pro",
  "Canon",
  "Samsung S9",
  "AirPods Max",
  "Tablet",
  "Asus",
  "Xiaomi",
  "MagSafe",
];

const mostKeywordsItems = [
  "Tablets",
  "Laptops",
  "Headphones",
  "USB Drive",
  "Smartphones",
  "Phone Cases",
  "Smartwatch",
];

function SearchContent({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-8 md:mt-9 lg:mt-12">
      <div className="w-full md:w-auto">
        <div className="flex md:hidden items-center justify-between">
          <h3 className="text-xs md:text-base lg:text-xl font-medium">
            The Most Searched Items
          </h3>
          <CloseCircle size={16} color="#444444" onClick={onClose} />
        </div>

        <h3 className="hidden md:block text-xs md:text-base lg:text-xl font-medium">
          The Most Searched Items
        </h3>

        <div className="mt-4 md:mt-7 lg:mt-10 grid grid-cols-2 gap-3 md:gap-6 lg:gap-8 p-3 md:p-0">
          {mostSearchItems.map((item) => (
            <p
              key={item}
              className="font-light text-xs md:text-base lg:text-lg"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="w-full md:w-auto">
        <h3 className="text-xs md:text-base lg:text-xl font-medium">
          Most used keywords
        </h3>

        <div className="mt-4 md:mt-7 lg:mt-10 grid grid-cols-2 gap-3 md:gap-6 lg:gap-8 p-3 md:p-0">
          {mostKeywordsItems.map((item) => (
            <p
              key={item}
              className="font-light text-xs md:text-base lg:text-lg"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchContent;
