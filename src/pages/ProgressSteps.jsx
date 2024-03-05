import React, { useState } from "react";

const ProgressSteps = () => {
  const [step, setStep] = useState(1);

  const handleStepIncrease = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };
  const handleStepDecrease = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex justify-center items-cente pt-40">
      <div className="flex flex-col justify-center items-center gap-8">
        {/* PROGRESS CONTAINER */}
        <div className="flex items-center">
          {/* ONE */}
          <div
            className={`w-10 h-10 border-4  border-blue-700 p-4 rounded-[50%] flex items-center justify-center`}
          >
            <p>1</p>
          </div>
          {/* TWO */}
          <div
            className={`w-20 h-2 border-b-4 ${
              step >= 2 ? "border-blue-700" : "border-gray-500"
            }`}
          ></div>
          <div
            className={`w-10 h-10 border-4 ${
              step >= 2 ? "border-blue-700" : "border-gray-500"
            }  p-4 rounded-[50%] flex items-center justify-center`}
          >
            <p>2</p>
          </div>
          {/* THREE */}
          <div
            className={`w-20 h-2 border-b-4 ${
              step >= 3 ? "border-blue-700" : "border-gray-500"
            }`}
          ></div>
          <div
            className={`${
              step >= 3 ? "border-blue-700" : "border-gray-500"
            } w-10 h-10 border-4 p-4 rounded-[50%] flex items-center justify-center`}
          >
            <p>3</p>
          </div>
          {/* FOUR */}
          <div
            className={`w-20 h-2 border-b-4 ${
              step >= 4 ? "border-blue-700" : "border-gray-500"
            }`}
          ></div>
          <div
            className={`${
              step >= 4 ? "border-blue-700" : "border-gray-500"
            } w-10 h-10 border-4  p-4 rounded-[50%] flex items-center justify-center`}
          >
            <p>4</p>
          </div>
        </div>
        {/* PREV AND NEXT BUTTONS */}
        <div className="flex gap-4">
          <button
            onClick={handleStepDecrease}
            className={`${
              step === 1 ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
            }  text-white font-bold py-2 px-4 rounded-l`}
          >
            Prev
          </button>
          <button
            onClick={handleStepIncrease}
            className={`${
              step === 4 ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
            }  text-white font-bold py-2 px-4 rounded-r`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
