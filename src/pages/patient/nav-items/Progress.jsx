import React, { useState } from "react";
import "./Progress.css";
import CheckboxButton from "../../../components/patient/form/CheckboxButton";

const ProgressLogScreen = () => {
  const [regimen, setRegimen] = useState("");
  return (
    <div className=" w-[1080px]">
      {/* Main Box */}
      <div className="">
        {/* Regimen Card */}
        <div className="regimen-card w-[1080px] mx-auto bg-white border rounded-xl mb-32 py-20">
          {/* Header */}
          <div className="header">
            <h2>Knee Pain Regimen</h2>

            <p>prescribed by,</p>
            <p>Dr. Rohit Chawla (Oncological Physical Therapist)</p>
            <div className="buttons mt-2">
              <button className="btn">Past Regimen Schedules</button>
              <button className="btn">Progress Analytics</button>
            </div>
          </div>

          {/* Days Counter */}
          <div className="days-counter">
            <h2>06/07</h2>
            {/* <p>days</p> */}
            <button className="start-btn">Start</button>
          </div>
        </div>

        {/* Content Section */}
        <div className="content ">
          {/* Left Side: Exercise List */}
          <div className="exercise-list  bg-white border rounded-xl ">
            <ul className="flex flex-col mx-5 my-10">
              <CheckboxButton
                name="regimen"
                options={[
                  {
                    value: "Basic PushUp",
                    label: "Basic PushUp - 3 sets of 7 reps",
                  },
                  {
                    value: "Wall PushUp",
                    label: "Wall PushUp - 3 sets of 8 reps",
                  },
                  {
                    value: "Tricep Dips",
                    label: "Tricep Dips - 2 sets of 8 reps",
                  },
                  {
                    value: "Knee PushUp",
                    label: "Knee PushUp - 3 sets of 10 reps",
                  },
                  {
                    value: "Wall PushUp",
                    label: "Wall PushUp - 3 sets of 8 reps",
                  },
                  {
                    value: "Basic PushUp",
                    label: "Basic PushUp - 3 sets of 7 reps",
                  },
                  {
                    value: "Basic PushUp",
                    label: "Basic PushUp - 3 sets of 7 reps",
                  },
                  {
                    value: "Wall PushUp",
                    label: "Wall PushUp - 3 sets of 8 reps",
                  },
                  {
                    value: "Tricep Dips",
                    label: "Tricep Dips - 2 sets of 8 reps",
                  },
                  {
                    value: "Knee PushUp",
                    label: "Knee PushUp - 3 sets of 10 reps",
                  },
                  {
                    value: "Wall PushUp",
                    label: "Wall PushUp - 3 sets of 8 reps",
                  },
                  {
                    value: "Basic PushUp",
                    label: "Basic PushUp - 3 sets of 7 reps",
                  },
                ]}
                selectedValues={regimen}
                onChange={setRegimen}
              />
              {/* Add more exercises as needed */}
            </ul>
          </div>

          {/* Right Side: Exercise Details */}
          <div className="exercise-details w-full text-gray-700">
            <div className="flex items-center justify-between max-w-[600px]">
            
            <h2 className="text-2xl font-semibold text-gray-900"> Knee Pain Regimen</h2>
              <div className="buttons mt-2 flex items-center">
                <button className="btn">Prev</button>
                <button className="btn">Next</button>
              </div>
            </div>

            <p className="">SETS - 3 | REPS - 5</p>
            <div className="flex items-center justify-between max-w-[600px] mb-4">
              <p>Basic Push-Up Video Guide:</p>

              <button className="play-btn">Play Guide</button>
            </div>
            <p >
              Basic Push-Up Guide:
              
            </p>
            <ul className="list-disc pl-5 max-w-[600px] mt-5 ">
              <li className="mb-4"> Start Position: Hands slightly wider than shoulders, body straight from head to heels, core engaged, and neck neutral.</li>
              <li className="mb-4">Lower: Bend elbows at 45°, lowering chest close to the ground. Keep elbows tucked.</li>
              <li className="mb-4">Push Up: Press through palms to return to the start, maintaining body alignment.</li>
              <li className="mb-4">Breathe: Inhale while lowering, exhale while pushing up.</li>
              <li className="mb-4">Avoid Mistakes: No sagging hips, flared elbows, or dropping your head.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressLogScreen;
