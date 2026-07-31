"use client";

import { usePathname } from "next/navigation";
import { cartSteps, StepStatus } from "./cart-steps";
import StepLine from "./StepLine";
import StepCircle from "./StepCircle";
import StepLabel from "./StepLabel";
import { Fragment } from "react/jsx-runtime";

function Stepper() {
  const pathname = usePathname();

  const currentStepIndex = cartSteps.findIndex(
    (step) => step.path === pathname,
  );

  const steps = cartSteps.map((step, index) => {
    let status: StepStatus;

    if (index < currentStepIndex) {
      status = "completed";
    } else if (index === currentStepIndex) {
      status = "current";
    } else {
      status = "upcoming";
    }

    return {
      ...step,
      status,
    };
  });

  const gridTemplateColumns = steps
    .map((_, index) => (index < steps.length - 1 ? "auto 1fr" : "auto"))
    .join(" ");

  return (
    <div
      className="grid items-center px-10 md:px-0 max-w-100 mx-auto py-6 md:py-8 lg:py-10 mb-6 md:mb-8 lg:mb-10"
      style={{ gridTemplateColumns }}
    >
      {steps.map((step, index) => (
        <Fragment key={step.path}>
          <div className="relative justify-self-center" style={{ gridRow: 1 }}>
            <StepCircle icon={step.icon} status={step.status} />
            <div className="absolute left-1/2 top-full -translate-x-1/2 mt-1 whitespace-nowrap">
              <StepLabel title={step.title} status={step.status} />
            </div>
          </div>
          {index < steps.length - 1 && (
            <div style={{ gridRow: 1 }}>
              <StepLine
                status={index < currentStepIndex ? "completed" : "upcoming"}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default Stepper;
