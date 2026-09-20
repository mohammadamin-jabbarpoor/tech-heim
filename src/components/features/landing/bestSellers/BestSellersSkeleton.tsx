function BestSellersSkeleton() {
  return (
    <div className="flex gap-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="w-37 h-46.5 xs:w-44 xs:h-54.5 sm:w-51 sm:h-62.5 md:w-58 md:h-70.5 lg:w-65 lg:h-78.5 xl:w-72 xl:h-86.75 bg-white/20 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
}

export default BestSellersSkeleton;
