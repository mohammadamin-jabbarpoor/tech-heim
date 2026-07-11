function TimerBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="w-5.5 h-6 xs:w-7.5 xs:h-8 sm:w-10 sm:h-10 md:w-9 md:h-9 lg:w-11.5 lg:h-12.25 flex flex-col items-center justify-center px-2 py-1 rounded lg:rounded-lg border lg:border-2">
      <span className="font-medium text-[7px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base">{String(value).padStart(2, "0")}</span>

      <span className="text-[7px] xs:text-[10px] md:text-xs lg:text-sm font-medium md:font-light">{label}</span>
    </div>
  );
}

export default TimerBox;
