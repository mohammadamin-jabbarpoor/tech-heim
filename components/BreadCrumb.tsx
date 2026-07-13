import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav>
      <ol className="flex items-center flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center">
              {isLast ? (
                <Link
                  href={item.href!}
                  className="font-light text-lg text-primary underline underline-offset-8"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  href={item.href!}
                  className="font-light text-lg text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}

              {!isLast && (
                <ArrowRight2
                  className="mt-0.5"
                  variant="Outline"
                  size={24}
                  color="#717171"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
