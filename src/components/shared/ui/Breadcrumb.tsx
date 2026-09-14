import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

type BreadcrumbItem = {
  label: string | undefined;
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
                  className="font-light text-sx md:text-sm lg:text-base xl:text-lg text-primary underline underline-offset-8"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  href={item.href!}
                  className="font-light text-sx md:text-sm lg:text-lg text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}

              {!isLast && (
                <div className="w-4 h-4 lg:w-6 lg:h-6 mb-1">
                  <ArrowRight2
                    className="mt-0.5"
                    variant="Outline"
                    color="#717171"
                  />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
