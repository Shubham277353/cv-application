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
    if (info.length > 1) {
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
                  placeholder="GGSIPU"
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
                  placeholder="B.Tech"
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
              {info.length > 1 ? (
                <button
                  style={{ backgroundColor: "Red" }}
                  onClick={() => {
                    deleteForm(index);
                  }}
                >
                  Delete
                </button>
              ) : null}
            </form>
          );
        })}
        <div id="add-submit-btn-container">
          <button
            style={{
              backgroundColor: "transparent",
              color: "#2563eb",
              border: "1px solid #2563eb",
            }}
            className="special-btns"
            onClick={handleMore}
          >
            Add More
          </button>
          <button
            className="special-btns"
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
      <div className="section-header">
        <h1 className="section-title">Education</h1>
        <button className="edit-btn no-print"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </div>
      <hr style={{ borderTop: "1px solid #d1d5db", width: "95%" }} />

      {info.map((item) => {
        return (
          <div className="main-content">
            <h2>Institute: {item.institute}</h2>
            <p><strong>Course:</strong> {item.course}</p>
            <p>Start Date: {item.startDate}</p>
            <p>End Date: {item.endDate}</p>
          </div>
        );
      })}
    </div>
  );
}
