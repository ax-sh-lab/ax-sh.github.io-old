import React from "react";

const categories = { home: "", about: "", work: "", contact: "" };

const Nav = () => {
  return (
    <nav>
      <ul>
        {Object.entries(categories).map(([category, link]) => (
          <li>
            <a href={link}>{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
