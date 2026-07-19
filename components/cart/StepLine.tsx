type StepLineStatus = "completed" | "upcoming";

const lineStyles = {
  completed: "bg-primary-75 h-[2px] w-full",
  upcoming: "bg-gray-500 h-[2px] w-full",
};

function StepLine({ status }: { status: StepLineStatus }) {
  return <div className={lineStyles[status]} />;
}

export default StepLine;
