import { useState } from "react";

export default function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({ compName: "", jobRole: "", startDate: "", endDate: "" });

  if (isEditing) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        Company Name: {}
        <input
          placeholder="Google"
          type="text"
          onChange={(e) => {
            setInfo({ ...info, compName: e.target.value });
          }}
        />
        {} Job Role: {}
        <input
          placeholder="SDE2"
          type="text"
          onChange={(e) => {
            setInfo({ ...info, jobRole: e.target.value });
          }}
        />
        {} Start Date: {}
        <input
          type="date"
          onChange={(e) => {
            setInfo({ ...info, startDate: e.target.value });
          }}
        />
        {} End Date: {}
        <input
          type="date"
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
