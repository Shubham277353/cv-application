import { useState } from "react";
import '../styles/experience.css';

export default function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({ compName: "", jobRole: "",responsibility:"", startDate: "", endDate: "" });

  if (isEditing) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        Company Name: 
        <input
          placeholder="Google"
          type="text"
          value={info.compName}
          onChange={(e) => {
            setInfo({ ...info, compName: e.target.value });
          }}
        />
         Job Role: 
        <input
          placeholder="SDE2"
          type="text"
          value={info.jobRole}
          onChange={(e) => {
            setInfo({ ...info, jobRole: e.target.value });
          }}
        />
         Responsibility:
        <input
          type="text"
          value={info.responsibility}
          onChange={(e) => {
            setInfo({ ...info, responsibility: e.target.value });
          }}
        />
         Start Date: 
        <input
          type="date"
          value={info.startDate}
          onChange={(e) => {
            setInfo({ ...info, startDate: e.target.value });
          }}
        />
         End Date: 
        <input
          type="date"
          value={info.endDate}
          onChange={(e) => {
            setInfo({ ...info, endDate: e.target.value });
          }}
        />
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
