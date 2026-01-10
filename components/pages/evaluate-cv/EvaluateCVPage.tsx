"use client";

import { useState } from "react";
import EmailStep from "./EmailStep";
import FileStep from "./FileStep";
import  ScoreStep  from "./ScoreStep";
import  ChoosePlanStep from "./ChoosePlanStep";  


export default function EvaluateCVPage() {
  const [step, setStep] = useState(1);
  // 1. Centralized Data Store
  const [cvData, setCvData] = useState({
    email: "",
    file: null, // This will hold the actual File object
  });

  // 2. Helper to update data from child components
  const updateData = (newData: any) => {
    setCvData((prev) => ({ ...prev, ...newData }));
  };

  const handleFinalSubmit = async () => {
    const formData = new FormData();
    formData.append("email", cvData.email);
    formData.append("cv", cvData.file);

    console.log("Data submit", formData)
  };

  const nextStep = () => setStep((prev) => prev + 1);
  return (
    <section className="max-w-332 px-4 mx-auto mt-10 min-h-[calc(100vh-300px)] flex flex-col ">
      {/* progess bar component5 */}
      <div className="mb-12">
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full ${step >= i ? "bg-[#2CB67D]" : "bg-gray-100"
                }`}
            />
          ))}
        </div>

        <p className="text-center text-sm mt-4 text-gray-500 font-medium">
          Étape {step} / 4
        </p>
      </div>

      {/* Conditional Rendering of Steps */}
      <div className="flex items-center justify-center border flex-1">
        {
          step === 1 && <EmailStep defaultValue={cvData.email} onNext={(email) => updateData({ email })} currentStep={step} nextStep={nextStep} />
        }

        {
          step === 2 && <FileStep defaultValue="" onNext={(file) => updateData({ file })} currentStep={step} nextStep={nextStep} />
        }
        {
          step === 3 && <ScoreStep currentStep={step} nextStep={nextStep} />
        }
        {
          step === 4 && <ChoosePlanStep currentStep={step} nextStep={nextStep} />
        }
      </div>
    </section>
  );
}


