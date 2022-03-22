import React from "react";
import { Link, useLocation } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";

const NavigationItem = ({
  page = {
    icon: "fab fa-twitter fa-lg",
    text: "",
    href: "",
    name: "",
  },
}) => {
  const location = useLocation();

  return (
    <div>
      {page.href === location.pathname ? (
        <Link to={`${page.href}`}>
          <div className="list-group-item text-white wd-blue">
            <i className={page.icon}></i>
            <span className="d-none d-xl-inline-block p-1 ps-2">
              {" "}
              {page.text}
            </span>
          </div>
        </Link>
      ) : (
        <Link to={`${page.href}`}>
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
