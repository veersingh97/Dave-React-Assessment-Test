import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div  className='section'>
      <form>
        <div className="grid">
          <div>
            <label className="col1-row1">Company Name</label>
            <input type="text" placeholder="Enter Company Name"></input>
            <label className="col1-row2">Position</label>
            <input type="text" placeholder="FrontEnd Developer"></input>
            <label className="col1-row3">Date of Joining</label>
            <input type="date"></input>
          </div>
          <div>
            <label className="col2-row1">Date of Resign</label>
            <input type="date"></input>
            <label className="col2-row2">Work Experience</label>
            <input type="text" placeholder="Your Experience in Years"></input>
          </div>
        </div>
        <button className="btn clear top-margin">Save Changes</button>
      </form>
    </div>
  );
};

export default Experience;
