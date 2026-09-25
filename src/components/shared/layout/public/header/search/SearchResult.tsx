import Link from "next/link";
import { SearchResultProp } from "./SearchModal";
import SearchResultItem from "./SearchResultItem";

type SearchResultProps = {
  onClose: () => void;
  query: string;
  results: SearchResultProp[];
};

function SearchResult({ query, results, onClose }: SearchResultProps) {
  return (
    <section className="mt-4">
      <div className="w-full h-full flex items-start justify-between gap-7">
        <div className="space-y-12">
          <p className="font-light text-gray-700">
            Found results for "{query}"
          </p>

          <div className="space-y-6">
            {results.slice(0, 7).map((product) => (
              <p key={product.id} className="font-light">
                {product.title}
              </p>
            ))}
          </div>

          <Link
            href={`/products?search=${encodeURIComponent(query)}`}
            className="px-2 py-3.5 text-primary cursor-pointer"
            onClick={onClose}
          >
            Tap for more
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {results.slice(0, 6).map((product) => (
            <SearchResultItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchResult;
