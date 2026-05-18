import { useState } from "react";

export default function PersonalLife() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });

  if (isEditing) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        Full Name : {}
        <input
          placeholder="John Doe"
          type="text"
          onChange={(e) => {
            setInfo({ ...info, name: e.target.value });
          }}
        />
        {} Email : {}
        <input
          placeholder="johndoe@email.com"
          type="email"
          onChange={(e) => {
            setInfo({ ...info, email: e.target.value });
          }}
        />
        {} Phone No. : {}
        <input
          placeholder="123456789"
          type="number"
          onChange={(e) => {
            setInfo({ ...info, phone: e.target.value });
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
