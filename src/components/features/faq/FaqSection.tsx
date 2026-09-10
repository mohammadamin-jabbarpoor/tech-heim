import FAQ from "./FAQ";
import TableContents from "./TableContents";

function FaqSection() {
  return (
    <div className="w-full max-w-254 flex flex-col lg:flex-row justify-between gap-6 mx-auto">
      <TableContents />
      <FAQ />
    </div>
  );
}

export default FaqSection;
