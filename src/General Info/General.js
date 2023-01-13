import React from "react";
import "./General.css";

const General = () => {
  return (
    <div className="section">
      <form>
        
          <div className="grid">
            <div>
              <label className="col1-row1">Name</label>
              <input type="text" placeholder="Veer Singh Gurjar"></input>
            </div>
            <div>
              <label className="col2-row1">Headline</label>
              <input type="text" placeholder="Enter Here Your Headline"></input>
            </div>
          </div>
          <button className="btn">Save Changes</button>
        
      </form>
    </div>
  );
};

export default General;
