import { Icon } from "iconsax-react";
import { StepStatus } from "./cart-steps";

export type StepCircleProps = {
  icon: Icon;
  status: StepStatus;
};

const statusStyles = {
  completed: {
    circle:
      "w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-primary-75 rounded-full",
    iconProps: {
      color: "white",
      variant: "Outline",
    },
    iconClass: "w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7",
  },
  current: {
    circle:
      "w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 flex items-center justify-center border-2 lg:border-[3px] border-primary rounded-full",
    iconProps: {
      color: "#0C68F4",
      variant: "Outline",
    },
    iconClass: "w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11",
  },
  upcoming: {
    circle:
      "w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-gray-500 rounded-full",
    iconProps: {
      color: "white",
      variant: "Outline",
    },
    iconClass: "w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7",
  },
} as const;

function StepCircle({ icon: Icon, status }: StepCircleProps) {
  const style = statusStyles[status];

  return (
    <div className={style.circle}>
      <Icon {...style.iconProps} className={style.iconClass} />
    </div>
  );
}

export default StepCircle;
