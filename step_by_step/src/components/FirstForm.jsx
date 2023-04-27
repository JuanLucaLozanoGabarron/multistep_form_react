import { React, useState } from "react";
import "../App.css";
import SecondForm from "./SecondForm";

export default function FirstForm() {
  const [showComponentOne, setShowComponentOne] = useState(true);

  const handleToggleComponentOne = () => {
    setShowComponentOne((prev) => !prev);
  };

  return (
    <div>
      {showComponentOne ? (
        <form>
          <h1>Step by step</h1>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <button type="submit" onClick={handleToggleComponentOne}>
            Next
          </button>
        </form>
      ) : (
        <SecondForm />
      )}
    </div>
  );
}
