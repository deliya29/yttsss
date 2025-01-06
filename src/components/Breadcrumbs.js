import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <nav className="bg-gray-100 py-3 px-5 rounded mb-6">
      <ul className="flex items-center space-x-1 text-sm text-gray-600">
        <li>
          <Link to="/" className="hover:text-orange-600">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const to = `/${paths.slice(0, index + 1).join("/")}`; // Perbaikan sintaks template literal
          const isLast = index === paths.length - 1;
          return (
            <li key={to} className="flex items-center">
              <span className="mx-1 text-gray-400">/</span>
              {isLast ? (
                <span className="text-gray-800 font-semibold">
                  {isNaN(path) ? path.charAt(0).toUpperCase() + path.slice(1) : path}
                </span>
              ) : (
                <Link to={to} className="hover:text-orange-600">
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
