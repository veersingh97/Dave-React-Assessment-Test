import React from "react";
import './Projects.css';

const Projects = () => {
  return (
    <div  className='section'>
      <form>
        <div className="grid">
          <div>
            <label className="col1-row1">Project Title</label>
            <input type="text" placeholder="Enter The Project Title"></input>
            <label className="col1-row2">Project URL</label>
            <input type="text" placeholder="Project URL"></input>
          </div>
          <div>
            <label className="col2-row1">Project Discription</label>
            <input type="text" placeholder="Discription"></input>
            <label className="col2-row2">Project Duration</label>
            <input type="text" placeholder="Enter Duration in Months"></input>
          </div>
        </div>
        <button className="btn clear top-margin">Save Changes</button>
      </form>
    </div>
  );
};

export default Projects;
