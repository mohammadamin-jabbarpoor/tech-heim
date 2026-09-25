"use client";

import { useEffect, useState } from "react";
import SearchContent from "./SearchContent";
import SearchHeader from "./SearchHeader";
import SearchResult from "./SearchResult";

export type SearchResultProp = {
  id: string;
  slug: string;
  title: string;
  category: {
    slug: string;
  };
  images: {
    path: string;
    alt: string | null;
  }[];
};

function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResultProp[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          `/api/products/search?q=${encodeURIComponent(query)}`,
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Failed to search products");
        }

        const data: SearchResultProp[] = await response.json();

        setResults(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        console.error("Search error:", error);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  useEffect(() => {
    const scrollY = window.scrollY;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";

      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <div className="fixed left-0 right-0 top-29 bottom-0 z-50 md:inset-0 md:bg-black/50">
      <div
        className="
          absolute
          bg-white
          px-6
          w-full h-full

          md:top-1/2
          md:left-1/2
          md:right-auto
          md:bottom-auto
          md:-translate-x-1/2
          md:-translate-y-1/2
          md:w-254
          md:max-h-161
          md:rounded-lg
          md:px-12 md:py-8
        "
      >
        <SearchHeader onClose={onClose} query={query} setQuery={setQuery} />
        {results.length > 0 ? (
          <SearchResult onClose={onClose} query={query} results={results} />
        ) : (
          <SearchContent onClose={onClose} />
        )}
      </div>
    </div>
  );
}

export default SearchModal;
