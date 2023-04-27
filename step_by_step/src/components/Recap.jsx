import React from "react";
import "../App.css";

export default function Recap() {
  return (
    <form id="recap">
      <h1>Recap of your choice</h1>
      <p>name: juan</p>
      <p>email: juan@ehb.be</p>
      <div className="choises">
        <p>choices:</p>
        <ul>
          <li>Web</li>
          <li>Design</li>
        </ul>
      </div>
      <button>Submit</button>
    </form>
  );
}
