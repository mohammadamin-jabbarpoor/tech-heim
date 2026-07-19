import { StepStatus } from "./cart-steps";

export type StepLabelProps = {
  title: string;
  status: StepStatus;
};

const statusStyles = {
  completed: "font-medium text-sm text-primary-75",
  current: "font-medium text-sm text-primary",
  upcoming: "font-medium text-sm text-gray-500",
} as const;

function StepLabel({ title, status }: StepLabelProps) {
  return <p className={statusStyles[status]}>{title}</p>;
}

export default StepLabel;
