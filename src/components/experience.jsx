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
      curt: false,
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
      compName: "",
      jobRole: "",
      responsibility: "",
      startDate: "",
      endDate: "",
      curt: "false",
    };
    const updateInfo = [...info, newEmptyObject];
    setInfo(updateInfo);
  }

  function handleDelete(indexToDelete) {
    const newInfo = info.filter((_, index) => index !== indexToDelete);
    setInfo(newInfo);
  }

  function handleCheck(indexToUpdate) {
    const updateInfo = info.map((item, index) =>
      index === indexToUpdate ? [{ ...info, curt: !item.curt }] : item,
    );
    setInfo(updateInfo);
  }

  if (isEditing) {
    return (
      <div className="form-container">
        <h1 id="experience-h1">Experience Details </h1>

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
                    handleChange(index, "compName", e.target.value);
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
                    handleChange(index, "jobRole", e.target.value);
                  }}
                />
              </label>
              <label htmlFor="">
                Responsibility:
                <input
                  type="text"
                  value={info.responsibility}
                  onChange={(e) => {
                    handleChange(index, "responsibility", e.target.value);
                  }}
                />
              </label>
              <label htmlFor="">
                Start Date:
                <input
                  type="date"
                  value={info.startDate}
                  onChange={(e) => {
                    handleChange(index, "startDate", e.target.value);
                  }}
                />
              </label>
              <label htmlFor="">
                End Date:
                <input
                  type="date"
                  value={item.curt? "Currently Working" : info.endDate}
                  onChange={(e) => {
                    handleChange(index, "endDate", e.target.value);
                  }}
                />
              </label>
              <div className="checkbox-group">
                <input type="checkbox" onClick={() => handleCheck(index)} />
                <label htmlFor="current">Currently Working</label>
              </div>
              {info.length > 1 ? (
                <button
                  style={{ backgroundColor: "Red" }}
                  onClick={() => {
                    handleDelete(index);
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
    <div className="experience-info">
      <div className="section-header">
        <h1 className="section-title">Experience</h1>
        <button
          className="edit-btn"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </div>
      <hr style={{ borderTop: "1px solid #d1d5db", width: "95%" }} />
      <ul>
        {info.map((item, index) => {
          return (
            <li className="main-content" key={index}>
              <h2>Google</h2>
              <p>
                <strong>Role:</strong> SDE2
              </p>
              <p>
                <strong>Responsibility:</strong> Managed the servers
              </p>
              <p>Start Date: {item.startDate}</p>

              {item.curt ? (
                <p>End Date: Currently Working</p>
              ) : (
                <p>End Date: {item.endDate}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
