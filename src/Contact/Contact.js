import React from "react";

const Contact = () => {
  return (
    <div  className='section'>
      <form>
        <div className="grid">
          <div>
            <label  className="col1-row1">Phone</label>
            <input type="text" placeholder="Phone Number"></input>
            <label  className="col2-row1">Email</label>
            <input type="text" placeholder="Email Id"></input>
          </div>
          <div>
            <label  className="col1-row2">Skype</label>
            <input type="text" placeholder="Skpe Id"></input>
          </div>
        </div>

        <button className="btn clear top-margin">Save Changes</button>
      </form>
    </div>
  );
};

export default Contact;
