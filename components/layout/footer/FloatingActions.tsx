import { ArrowUp2, MessageQuestion } from "iconsax-react";

function FloatingActions() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="w-10 h-10 flex items-center justify-center bg-primary-50 rounded-full">
        <MessageQuestion variant="Outline" size={24} color="#2d2d2d" />
      </div>
      <div
        onClick={scrollToTop}
        className="w-10 h-10 flex items-center justify-center bg-primary-50 rounded-full"
      >
        <ArrowUp2 variant="Linear" size={16} color="#2d2d2d" />
      </div>
    </>
  );
}

export default FloatingActions;
