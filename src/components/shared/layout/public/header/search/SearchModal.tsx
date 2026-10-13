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

type SearchResultsState = {
  query: string;
  items: SearchResultProp[];
};

function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [searchState, setSearchState] = useState<SearchResultsState | null>(
    null,
  );

  const normalizedQuery = query.trim();

  const results =
    searchState?.query === normalizedQuery ? searchState.items : [];

  useEffect(() => {
    const searchQuery = query.trim();

    if (!searchQuery) {
      return;
    }

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          `/api/products/search?q=${encodeURIComponent(searchQuery)}`,
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Failed to search products");
        }

        const data: SearchResultProp[] = await response.json();

        setSearchState({
          query: searchQuery,
          items: data,
        });
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
    <div className="fixed bottom-0 left-0 right-0 top-29 z-50 md:inset-0 md:bg-black/50">
      <div
        className="
          absolute
          h-full
          w-full
          bg-white
          px-6
          
          md:left-1/2
          md:right-auto
          md:top-1/2
          md:bottom-auto
          md:max-h-161
          md:w-254
          md:-translate-x-1/2
          md:-translate-y-1/2
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
