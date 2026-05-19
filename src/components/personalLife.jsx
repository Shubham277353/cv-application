import { useState } from "react";
import "../styles/personalLife.css";
import { FileX, Mail, Phone  } from 'lucide-react';

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
        <h1 className="form-heading">Personal Details </h1>
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
      <h2>{"Shubham Bhandari"}</h2>
      <hr style={{ borderTop: "1px solid white", width: "70%" }} />

      <div className="contact-info">
        <div className="icon-cont">
          <Mail size={20} />
          <p>{"goluboi@gmail.com"}</p>
        </div>
        <p>|</p>
        <div className="icon-cont">
          <Phone size={20} />
          <p>{7843924832}</p>
        </div>
      </div>
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
