import { useState } from "react";
import "../styles/experience.css";

export default function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState([
    {
      compName: "",
      jobRole: "",
      responsibility: "",
      startDate: "",
      endDate: "",
    },
  ]);

  function handleChange(indexToUpdate, field, value) {
    const updateInfo = info.map((item, index) =>
      index === indexToUpdate ? { ...item, [field]: value } : item,
    );
    setInfo(updateInfo);
  }

  if (isEditing) {
    return (
      <div>
        <h1 className="form-heading">Experience Details </h1>

        {info.map((item, index) => {
          return (
            <form
              className="experience-form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor="">
                Company Name:
                <input
                  placeholder="Google"
                  type="text"
                  value={"Google"}
                  onChange={(e) => {
                    setInfo(handleChange(index, "compName", e.target.value));
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
                    setInfo(handleChange(index, "jobRole", e.target.value));
                  }}
                />
              </label>
              <label htmlFor="">
                Responsibility:
                <input
                  type="text"
                  value={info.responsibility}
                  onChange={(e) => {
                    setInfo(
                      handleChange(index, "responsibility", e.target.value),
                    );
                  }}
                />
              </label>
              <label htmlFor="">
                Start Date:
                <input
                  type="date"
                  value={info.startDate}
                  onChange={(e) => {
                    setInfo(handleChange(index, "startDate", e.target.value));
                  }}
                />
              </label>
              <label htmlFor="">
                End Date:
                <input
                  type="date"
                  value={info.endDate}
                  onChange={(e) => {
                    setInfo(handleChange(index, "endDate", e.target.value));
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
        })}
      </div>
    );
  }

  return (
    <div className="experience-info">
      <h1>Experience</h1>
      <hr style={{ borderTop: "1px solid black", width: "90%" }} />
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
