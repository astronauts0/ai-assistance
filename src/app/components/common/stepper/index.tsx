// Stepper.tsx
import React from "react";

interface StepperProps {
  currentStep: number;
}

const steps = [
  "Personal",
  "Education",
  "Work Experience",
  "Skill",
  "Equal Employment",
];

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  return (
    <section className="flex flex-col items-center w-full text-white">
      <h2 className="text-5xl  mb-4">Complete your profile</h2>
      <p className="mb-6 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard
      </p>
      <div className="flex items-center justify-center py-7 gap-6 w-full border-b border-gray-500/50">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full border text-sm font-semibold ${
                  currentStep === index + 1
                    ? "bg-gradient-to-r from-[#FF00CC] to-[#850CFF]"
                    : "border-white text-white"
                }`}
              >
                {index + 1}
              </div>
              <span className="text-white text-sm">{step}</span>
            </div>
            {index < steps.length - 1 && <div className="w-12 h-px bg-white" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stepper;
