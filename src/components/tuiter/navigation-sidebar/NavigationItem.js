import React from "react";
import { Link } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";

const NavigationItem = ({
  page = {
    icon: "fab fa-twitter fa-lg",
    text: "",
    href: "",
    name: "",
  },
  active,
}) => {
  return (
    <div>
      {page.name === active ? (
        <Link to={`/tuiter/${page.name}`}>
          <div className="list-group-item text-white wd-blue">
            <i className={page.icon}></i>
            <span className="d-none d-xl-inline-block p-1 ps-2">
              {" "}
              {page.text}
            </span>
          </div>
        </Link>
      ) : (
        <Link to={`/tuiter/${page.name}`}>
          <div className="list-group-item bg-dark text-white">
            <i className={page.icon}></i>
            <span className="d-none d-xl-inline-block p-1 ps-2">
              {" "}
              {page.text}
            </span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default NavigationItem;
