import { useState } from "react";
import "../styles/education.css";
// import { FileMinusCorner } from "lucide-react";

export default function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState([
    {
      institute: "",
      course: "",
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

  function handleMore() {
    const newEmptyObject = {
      institute: "",
      course: "",
      startDate: "",
      endDate: "",
    };
    const newInfo = [...info, newEmptyObject];
    setInfo(newInfo);
  }

  function deleteForm(indexToDelete) {
    if(info.length > 1){
    const updateInfo = info.filter((_, index) => index !== indexToDelete);
    setInfo(updateInfo);
    }
  }

  if (isEditing) {
    return (
      <div className="form-container">
        <h1 id="education-h1">Education Details </h1>
        {info.map((item, index) => {
          return (
            <form
            key={index}
              className="education-form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor="">
                Institute : {}
                <input
                  value={item.institute}
                  placeholder="Guru gobind college"
                  type="text"
                  onChange={(e) => {
                    handleChange(index, "institute", e.target.value);
                  }}
                />
              </label>
              <label htmlFor="">
                {} Course : {}
                <input
                  value={item.course}
                  placeholder="MCA"
                  type="text"
                  onChange={(e) => {
                    handleChange(index, "course", e.target.value);
                  }}
                />
              </label>
              <label htmlFor="">
                {} Start Date : {}
                <input
                  value={item.startDate}
                  type="date"
                  onChange={(e) => {
                    handleChange(index, "startDate", e.target.value);
                  }}
                />
              </label>
              <label htmlFor="">
                {} End Date : {}
                <input
                  type="date"
                  value={item.endDate}
                  onChange={(e) => {
                    handleChange(index, "endDate", e.target.value);
                  }}
                />
              </label>
              <button
                style={{ backgroundColor: "Red" }}
                onClick={() => {
                  deleteForm(index);
                }}
              >
                Delete
              </button>
            </form>
          );
        })}
        <div id="add-submit-btn-container">
          <button onClick={handleMore}>Add More</button>
          <button
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="education-info">
      <div>
        <h1>Education</h1>
        <hr style={{ borderTop: "1px solid black", width: "90%" }} />
      </div>
      {info.map((item) => {
        return (
          <div id="main-content">
            <h2>Institute: {"Guru Gobind Singh University"}</h2>
            <p>Course: {"MCA"}</p>
            <p>Start Date: 2026-05-01</p>
            <p>End Date: 2026-05-01</p>
          </div>
        );
      })}
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
