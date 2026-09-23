"use client";

import { useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

function getPaginationPages(currentPage: number, totalPages: number) {
  if (totalPages <= 5) {
    return [1, 2, 3, 4, 5].slice(0, totalPages);
  }
  if (currentPage <= 3) {
    return [1, 2, 3, 4, "...", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [
      1,
      "...",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}

function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pages = getPaginationPages(currentPage, totalPages);

  const createPageUrl = (page: string | number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }

    return `?${params.toString()}`;
  };

  return (
    <nav className="mt-8 flex items-center justify-center gap-2">
      {pages.map((page, index) => {
        if (page === "...") {
          return <span key={`ellipsis-${index}`}>...</span>;
        }
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            type="button"
            onClick={() => router.push(createPageUrl(page))}
            className={`flex w-10 h-10 lg:w-11 lg:h-11 items-center justify-center cursor-pointer ${isActive ? "text-primary border-b border-b-primary" : ""}`}
          >
            {page}
          </button>
        );
      })}
    </nav>
  );
}

export default Pagination;
