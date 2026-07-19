import { Icon } from "iconsax-react";
import { StepStatus } from "./cart-steps";

export type StepCircleProps = {
  icon: Icon;
  status: StepStatus;
};

const statusStyles = {
  completed: {
    circle:
      "w-12 h-12 flex items-center justify-center bg-primary-75 rounded-full",
    iconProps: {
      size: 32,
      color: "white",
      variant: "Outline",
    },
  },
  current: {
    circle:
      "w-18 h-18 flex items-center justify-center border-[3px] border-primary rounded-full",
    iconProps: {
      size: 48,
      color: "#0C68F4",
      variant: "Outline",
    },
  },
  upcoming: {
    circle:
      "w-12 h-12 flex items-center justify-center bg-gray-500 rounded-full",
    iconProps: {
      size: 32,
      color: "white",
      variant: "Outline",
    },
  },
} as const;

function StepCircle({ icon: Icon, status }: StepCircleProps) {
  const style = statusStyles[status];

  return (
    <div className={style.circle}>
      <Icon {...style.iconProps} />
    </div>
  );
}

export default StepCircle;
