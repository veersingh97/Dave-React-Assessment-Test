import React from 'react';
import './Skills.css'

const Skills = () => {
  return (
    <div className='section'>
      <form>
        <div className='grid'>
          <div>
          <label className='col1-row1'>Skills Name</label>
          <input type="text" placeholder="Enter Skills Name"></input>
          </div>
          <div>
          <label className='col2-row1'>Years of Experience</label>
          <input type="text" placeholder="Your Experience in Years"></input>
          </div>
        </div>
          
          
          <button className="btn clear top-margin">Save Changes</button>
        </form>
    </div>
  )
}

export default Skills