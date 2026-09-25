import { CloseCircle, SearchNormal1 } from "iconsax-react";

type SearchHeaderProps = {
  onClose: () => void;
  query: string;
  setQuery: (value: string) => void;
};

function SearchHeader({ onClose, query, setQuery }: SearchHeaderProps) {
  return (
    <div className="hidden lg:flex w-full h-12 items-center justify-between">
      <div className="relative w-129">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-129 h-12 px-4 py-3 border rounded-lg"
          placeholder="What can we help you to find ?"
        />
        <SearchNormal1
          size={24}
          color="#444444"
          className="absolute top-1/2 -translate-y-1/2 right-4"
        />
      </div>
      <CloseCircle
        size={24}
        color="#444444"
        onClick={onClose}
        className="cursor-pointer"
      />
    </div>
  );
}

export default SearchHeader;
