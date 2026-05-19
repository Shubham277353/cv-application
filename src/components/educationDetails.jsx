import { useState } from "react";
import '../styles/education.css';


export default function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({ institue: "", course: "", startDate: "", endDate: "" });

  if (isEditing) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        Institute : {}
        <input
        value={info.institue}
          placeholder="Guru gobind college"
          type="text"
          onChange={(e) => {
            setInfo({ ...info, institue: e.target.value });
          }}
        />
        {} Course : {}
        <input
        value={info.course}
          placeholder="MCA"
          type="text"
          onChange={(e) => {
            setInfo({ ...info, course: e.target.value });
          }}
        />
        {} Start Date : {}
        <input
        value={info.startDate}
          type="date"
          onChange={(e) => {
            setInfo({ ...info, startDate: e.target.value });
          }}
        />
        {} End Date : {}
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
      <h2>{info.institue}</h2>
      <p>{info.course}</p>
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
