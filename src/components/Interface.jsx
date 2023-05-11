import { FaBars } from "react-icons/fa";
import { useState } from "react";
import NavProduct from "./NavProduct";
import NavSolution from "./NavSolution";
import NavResources from "./NavResources";
import { data } from "../data";
import "../interface.css";

const Interface = ({ clickBar }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevState) => {
      if (prevState === index) {
        return null;
      } else {
        return index;
      }
    });
  };

  const showProduct = activeIndex === 0;
  const showSolution = activeIndex === 1;
  const showResources = activeIndex === 2;

  return (
    <>
      <main>
        <header>
          <h1>strapi</h1>
          <ul>
            {data.map((each, i) => {
              return (
                <li
                  key={each.id}
                  className={`${activeIndex === i ? "add-style" : ""}`}
                  onClick={() => handleClick(i)}
                >
                  {each.header}
                </li>
              );
            })}
          </ul>
          <FaBars className="bar-icon" onClick={clickBar} />
        </header>
        {showProduct && <NavProduct />}
        {showSolution && <NavSolution />}
        {showResources && <NavResources />}
        <section className="body-sect">
          <h2>Manage Any Content Anywhere</h2>
          <p>
            Strapi is the leading open-source headless CMS. It’s 100% JavaScript
            and fully customizable.
          </p>
        </section>
      </main>
    </>
  );
};

export default Interface;
