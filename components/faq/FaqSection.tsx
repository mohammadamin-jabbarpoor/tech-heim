import FAQ from "./FAQ";
import TableContents from "./TableContents";

function FaqSection() {
  return (
    <div className="w-254 flex justify-between gap-6 mx-auto">
      <TableContents />
      <FAQ />
    </div>
  );
}

export default FaqSection;
