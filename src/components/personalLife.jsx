import { useState } from "react";
import "../styles/personalLife.css";
import { Mail, Phone  } from 'lucide-react';

export default function PersonalLife() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });

  if (isEditing) {
    return (
      <div>
        <h1 className="personal-h1">Personal Details </h1>
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
          style={{  padding: "10px 18px",fontSize: "0.95rem", margin: "0 auto"}}
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="personal-info">
      <h1>{"Shubham Bhandari"}</h1>
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
        <button style={{width: "4rem",backgroundColor:"transparent"}}
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
    </div>
  );
}
