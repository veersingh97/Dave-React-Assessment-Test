import React from "react";
import './Certifications.css';

const Certifications = () => {
  return (
    <div  className='section'>
      <form>
        <div className="grid">
          <div>
            <label className="col1-row1">Name</label>
            <input type="text" placeholder="Certiticate Name"></input>
            <label className="col2-row1">Issuing Organisation</label>
            <input type="text" placeholder="Organisation Name"></input>
          </div>
          <div>
            <label className="col1-row2">Certificate Link</label>
            <input type="text" placeholder="Certificate Link"></input>
            <label  className="col2-row2">Issue Date</label>
            <input type="text" placeholder="Issue Date"></input>
          </div>
        </div>
        <button className="btn clear top-margin">Save Changes</button>
      </form>
    </div>
  );
};

export default Certifications;
