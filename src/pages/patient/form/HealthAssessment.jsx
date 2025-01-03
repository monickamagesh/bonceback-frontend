import React, { useState } from "react";
import "./HealthAssessment.css";
import TextInput from "../../../components/patient/form/TextInput";
import RadioButton from "../../../components/patient/form/RadioButton";
import CheckboxButton from "../../../components/patient/form/CheckboxButton";
import SelectInput from "../../../components/patient/form/SelectInput";
import { useNavigate } from "react-router-dom";

const HealthAssessment = () => {
  const navigate = useNavigate();
  const [selectedPrimaryIssue, setSelectedPrimaryIssue] = useState();
  const [selectedInjuryTime, setSelectedInjuryTime] = useState();
  const [selectedPainActivities, setSelectedPainActivities] = useState([]);
  const [selectedPainDescriptions, setSelectedPainDescriptions] = useState([]);
  const [painLevel, setPainLevel] = useState("");
  const [selectedSurgeries, setSelectedSurgeries] = useState();
  const [selectedDailyRoutine, setSelectedDailyRoutine] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    navigate("/patient/");
    
  };

  const handlePainLevelChange = (e) => {
    setPainLevel(e.target.value);
  };

  return (
    <div className="form-container w-[1080px] mx-auto bg-white border rounded-xl">
      <h1 className="form-title">General Health Assessment Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Question 1 */}
        <div className="form-question">
          <TextInput
            label="1. How often do you experience this pain"
            name="primaryIssue"
            placeholder="Describe your issue"
            value={selectedPrimaryIssue}
            onChange={setSelectedPrimaryIssue}
          />
        </div>

        {/* Question 2 */}
        <div className="form-button-question">
          <RadioButton
            label="2. When did this issue/injury begin?"
            name="injuryTimeframe"
            options={[
              { value: "Less than 1 week ago", label: "Less than 1 week ago" },
              { value: "1 - 4 weeks ago", label: "1 - 4 weeks ago" },
              { value: "1 - 3 months ago", label: "1 - 3 months ago" },
              {
                value: "More than 3 months ago",
                label: "More than 3 months ago",
              },
            ]}
            selectedValue={selectedInjuryTime}
            onChange={setSelectedInjuryTime}
          />
        </div>

        {/* Question 3 */}
        <div className="form-button-question">
          <CheckboxButton
            label="3. Describe your pain:"
            name="painDescription"
            options={[
              { value: "Sharp", label: "Sharp" },
              { value: "Dull", label: "Dull" },
              { value: "Throbbing", label: "Throbbing" },
              { value: "Burning", label: "Burning" },
              { value: "Tingling", label: "Tingling" },
            ]}
            selectedValues={selectedPainDescriptions}
            onChange={setSelectedPainDescriptions}
          />
        </div>

        {/* Question 4 */}
        <div className="form-question">
          <SelectInput
            label="4. Rate your current pain level:"
            name="painLevel"
            value={painLevel}
            onChange={handlePainLevelChange}
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => ({
              value: num,
              label: num,
            }))}
          />
        </div>

        {/* Question 5 */}
        <div className="form-button-question">
          <CheckboxButton
            label="5. What activities make the pain worse?"
            name="painActivities"
            options={[
              { value: "Walking", label: "Walking" },
              { value: "Sitting", label: "Dull" },
              { value: "Standing", label: "Standing" },
              { value: "Lifting", label: "Lifting" },
            ]}
            selectedValues={selectedPainActivities}
            onChange={setSelectedPainActivities}
          />
        </div>

        {/* Question 6 */}
        <div className="form-question">
          <TextInput
            label="6. Have you had any surgeries or chronic conditions?"
            name="surgeries"
            placeholder="If yes, please specify"
            value={selectedSurgeries}
            onChange={setSelectedSurgeries}
          />
        </div>

        {/* Question 7 */}
        <div className="form-button-question">
          <RadioButton
            label="7. How active is your daily routine?"
            name="dailyRoutine"
            options={[
              { value: "Moderately Active", label: "Moderately Active" },
              { value: "Light Activity", label: "Light Activity" },
              { value: "Inactive", label: "Inactive" },
            ]}
            selectedValue={selectedDailyRoutine}
            onChange={setSelectedDailyRoutine}
          />
        </div>

        {/* Submit Button */}
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default HealthAssessment;
