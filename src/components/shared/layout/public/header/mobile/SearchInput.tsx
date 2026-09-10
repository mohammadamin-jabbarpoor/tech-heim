import { SearchNormal1 } from "iconsax-react";

function SearchInput() {
  return (
    <div className="relative w-full h-10 bg-gray-200 rounded">
      <input
        type="text"
        className="w-full h-full py-2 px-4 font-light text-xs"
        placeholder="What can we help you to find?"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <SearchNormal1 variant="Outline" size={24} color="#717171" />
      </div>
    </div>
  );
}

export default SearchInput;
