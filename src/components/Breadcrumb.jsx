import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav
      className="flex items-center space-x-2 text-sm text-gray-600 mb-6"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
          <div className="flex items-center">
            {item.link && index < items.length - 1 ? (
              <Link
                to={item.link}
                className="hover:text-red-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  index === items.length - 1 ? "text-gray-800 font-medium" : ""
                }
              >
                {item.label}
              </span>
            )}
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
