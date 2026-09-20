function SaleSliderSkeleton() {
  return (
    <div className="flex gap-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="w-25.5 sm:w-31 md:w-36 lg:w-41 xl:w-46 h-ful bg-white/20 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
}

export default SaleSliderSkeleton;
