import { React, useState } from "react";
import Recap from "./Recap";

export default function SecondForm() {
  const [showComponentTwo, setShowComponentTwo] = useState(true);

  const handleToggleComponentTwo = () => {
    setShowComponentTwo((prev) => !prev);
  };

  return (
    <div>
      {showComponentTwo ? (
        <form>
          <h1>Step by step</h1>
          <label>
            <input type="checkbox" name="optionOne" />
            Motion
          </label>
          <label>
            <input type="checkbox" name="optionTwo" />
            Design
          </label>
          <label>
            <input type="checkbox" name="optionThree" />
            Web
          </label>
          <label>
            <input type="checkbox" name="optionFour" />
            Dev
          </label>
          <button type="submit" onClick={handleToggleComponentTwo}>
            Recap
          </button>
        </form>
      ) : (
        <Recap />
      )}
    </div>
  );
}
