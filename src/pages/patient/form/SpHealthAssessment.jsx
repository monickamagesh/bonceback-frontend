import React, { useState } from "react";
import "./HealthAssessment.css";
import RadioButton from "../../../components/patient/form/RadioButton";
import CheckboxButton from "../../../components/patient/form/CheckboxButton";
import { FaUpload, FaCheckCircle } from "react-icons/fa";

const HealthAssessment = () => {
  //   const [selectedPrimaryIssue, setSelectedPrimaryIssue] = useState();
  //   const [selectedInjuryTime, setSelectedInjuryTime] = useState();
  //   const [selectedPainActivities, setSelectedPainActivities] = useState([]);
  //   const [selectedPainDescriptions, setSelectedPainDescriptions] = useState([]);
  //   const [painLevel, setPainLevel] = useState("");
  //   const [selectedSurgeries, setSelectedSurgeries] = useState();
  //   const [selectedDailyRoutine, setSelectedDailyRoutine] = useState([]);

  const [selectedPainExperience, setSelectedPainExperience] = useState([]);
  const [selectedMedIntake, setSelectedMedIntake] = useState([]);
  const [selectedPainRadiate, setSelectedPainRadiate] = useState([]);
  const [selectedTreatmentBefore, setSelectedTreatmentBefore] = useState([]);
  const [selectedMedConditions, setSelectedMedConditions] = useState([]);
  const [selectedExpectations, setSelectedExpectations] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("Upload the file");
  const [isUploaded, setIsUploaded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setUploadStatus("Uploaded");
      setIsUploaded(true);
    } else {
      setUploadStatus("Upload the file");
      setIsUploaded(false);
    }
  };

  return (
    <div className="form-container w-[1080px] mx-auto bg-white border rounded-xl">
      <h1 className="form-title">Detailed Health Assessment Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Question 1 */}
        <div className="form-button-question">
          <RadioButton
            label="1. How often do you experience this pain?"
            name="painExperience"
            options={[
              { value: "Constant", label: "Constant" },
              { value: "Intermittent", label: "Intermittent" },
              { value: "Occassionally", label: "Occassionally" },
              { value: "Rarely", label: "Rarely" },
            ]}
            selectedValue={selectedPainExperience}
            onChange={setSelectedPainExperience}
          />
        </div>

        {/* Question 2 */}
        <div className="form-button-question">
          <RadioButton
            label="2. Are you currently taking any medications for this?"
            name="medIntake"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            selectedValue={selectedMedIntake}
            onChange={setSelectedMedIntake}
          />
        </div>

        {/* Question 3 */}
        <div className="form-button-question">
          <RadioButton
            label="3. Does the pain radiate or spread to other parts of your body?"
            name="painRadiate"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            selectedValue={selectedPainRadiate}
            onChange={setSelectedPainRadiate}
          />
        </div>

        {/* Question 4 */}
        <div className="form-button-question">
          <RadioButton
            label="4. Have you received any treatment for this issue before?"
            name="treatmentBefore"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            selectedValue={selectedTreatmentBefore}
            onChange={setSelectedTreatmentBefore}
          />
        </div>

        {/* Question 5 */}
        <div className="form-button-question">
          <CheckboxButton
            label="5. Do you have any existing medical conditions that might affect your recovery?"
            name="medConditions"
            options={[
              { value: "Arthirits", label: "Arthirits" },
              { value: "Spinal Conditions", label: "Spinal Conditions" },
              { value: "High Blood Pressure", label: "High Blood Pressure" },
              { value: "Sprain/ Fractures", label: "Sprain/ Fractures" },
              { value: "Other", label: "Other" },
            ]}
            selectedValues={selectedMedConditions}
            onChange={setSelectedMedConditions}
          />
        </div>

        {/* Question 6 */}
        <div className="form-button-question">
          <CheckboxButton
            label="6. What are your expectations from physiotherapy treatment?"
            name="expectations"
            options={[
              { value: "Pain relief", label: "Pain relief" },
              { value: "Improved Mobility", label: "Improved Mobility" },
              { value: "Strength Restoration", label: "Strength Restoration" },
            ]}
            selectedValues={selectedExpectations}
            onChange={setSelectedExpectations}
          />
        </div>

        {/* Question 7 */}

        <div className="form-button-question">
          <label
            htmlFor="file-upload"
            style={{ display: "block", marginBottom: "8px" }}
          >
            7. Please upload any medical reports or images related to your
            injury. (X-ray, Blood reports, etc)
          </label>
          <input
            type="file"
            id="file-upload"
            name="medicalReports"
            multiple
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label
            htmlFor="file-upload"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 20px",
              backgroundColor: "#f5f5f5",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer",
              gap: "10px",
              fontSize: "0.9rem",
              transition: "background-color 0.3s",
              marginTop: "5px",
            }}
          >
            {isUploaded ? (
              <FaCheckCircle style={{ color: "green" }} />
            ) : (
              <FaUpload style={{ color: "#000" }} />
            )}
            {uploadStatus}
          </label>
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
