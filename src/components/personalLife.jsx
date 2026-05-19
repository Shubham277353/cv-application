import { useState } from "react";
import "../styles/personalLife.css";

export default function PersonalLife() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });

  if (isEditing) {
    return (
      <form
        className="personal-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="">
          Full Name : {}
          <input
            placeholder="John Doe"
            type="text"
            value={info.name}
            onChange={(e) => {
              setInfo({ ...info, name: e.target.value });
            }}
          />
        </label>

        <label htmlFor="">
          {} Email : {}
          <input
            placeholder="johndoe@email.com"
            type="email"
            value={info.email}
            onChange={(e) => {
              setInfo({ ...info, email: e.target.value });
            }}
          />
        </label>

        <label htmlFor="">
          {} Phone No. : {}
          <input
            placeholder="123456789"
            type="number"
            value={info.phone}
            onChange={(e) => {
              setInfo({ ...info, phone: e.target.value });
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
      <h2>{info.name}</h2>
      <p>{info.email}</p>
      <p>{info.phone}</p>
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
