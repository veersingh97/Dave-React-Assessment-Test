import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [active, isActive] = useState(0);
  return (
    <div className="header-section">
      <ul className="header-content">
        <li>
          <Link
            to="/info"
            onClick={() => isActive(0)}
            className={active==0 ? "active" : "normal"}
          >
            General Info
          </Link>
        </li>
        <li>
          <Link
            to="/experience"
            onClick={() => isActive(1)}
            className={active==1 ? "active" : "normal"}
          >
            Experince
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className={active==2 ? "active" : "normal"}
            onClick={() => isActive(2)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={active==3 ? "active" : "normal"}
            onClick={() => isActive(3)}
          >
            Add Projects
          </Link>
        </li>
        <li>
          <Link
            to="/certifications"
            className={active==4 ? "active" : "normal"}
            onClick={() => isActive(4)}
          >
            Add Licenses & Certifications
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={active==5 ? "active" : "normal"}
            onClick={() => isActive(5)}
          >
            Contact Info
          </Link>
        </li>
        
      </ul>
    </div>
  );
}

export default Header;
