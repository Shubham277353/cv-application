import { useState } from "react";
import "../styles/experience.css";

export default function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    compName: "",
    jobRole: "",
    responsibility: "",
    startDate: "",
    endDate: "",
  });

  if (isEditing) {
    return (
      <form className="experience-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1>Experience Details: </h1>
        <label htmlFor="">
          Company Name:
          <input
            placeholder="Google"
            type="text"
            value={info.compName}
            onChange={(e) => {
              setInfo({ ...info, compName: e.target.value });
            }}
          />
        </label>
        <label htmlFor="">
          Job Role:
          <input
            placeholder="SDE2"
            type="text"
            value={info.jobRole}
            onChange={(e) => {
              setInfo({ ...info, jobRole: e.target.value });
            }}
          />
        </label>
        <label htmlFor="">
          Responsibility:
          <input
            type="text"
            value={info.responsibility}
            onChange={(e) => {
              setInfo({ ...info, responsibility: e.target.value });
            }}
          />
        </label>
        <label htmlFor="">
          Start Date:
          <input
            type="date"
            value={info.startDate}
            onChange={(e) => {
              setInfo({ ...info, startDate: e.target.value });
            }}
          />
        </label>
        <label htmlFor="">
          End Date:
          <input
            type="date"
            value={info.endDate}
            onChange={(e) => {
              setInfo({ ...info, endDate: e.target.value });
            }}
          />
        </label>
        <button
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Submit
        </button>
      </form>
    );
  }

  return (
    <div className="personal-info">
      <h2>{info.compName}</h2>
      <p>{info.jobRole}</p>
      <p>{info.responsibility}</p>
      <p>{info.startDate}</p>
      <p>{info.endDate}</p>
      <button
        onClick={() => {
          setIsEditing(true);
        }}
      >
        Edit
      </button>
    </div>
  );
}
