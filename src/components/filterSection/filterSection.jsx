import React, { useState } from "react";
import "./filterSection.css";

const FilterSection = () => {
 
  const [visibleItems, setVisibleItems] = useState({});


  const toggleVisibility = (id) => {
    setVisibleItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id], 
    }));
  };


  const items = [
    {
      id: 1,
      name: "Type of Plants",
    },
    {
      id: 2,
      name: "Price",
    },

    {
      id: 3,
      name: "Nursery",
    },
    {
      id: 4,
      name: "Ideal Plants Location",
    },
    {
      id: 5,
      name: "Indoor/Outdoor",
    },
    {
      id: 6,
      name: "Maintenance",
    },
    {
      id: 7,
      name: "Plant Size",
    },
    {
      id: 8,
      name: "Water Schedule",
    },
    {
      id: 9,
      name: "Color",
    },
    {
      id: 10,
      name: "Seasonal",
    },
  ];

  return (
    <div className="filter-container">
      <div className="filter-text-c">
        <p>Filter</p>
        <p>CLEAR ALL</p>
      </div>
      <hr />
      {items.map((item) => (
        <div key={item.id}>
          <div>
            <div className="item-name-container">
              <span>{item.name}</span>

              <button
                type="button"
                className="plus-minus-btn"
                onClick={() => toggleVisibility(item.id)}
              >
                {visibleItems[item.id] ? "-" : "+"}
              </button>
            </div>

            <hr />
          </div>
          {visibleItems[item.id] && (
            <div>
              <div className="labels-container">
                <ul>
                  <li>
                    <input type="checkbox" />
                    <p>Lorem, ipsum.(12)</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Lorem, ipsum.(23)</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Lorem, ipsum.(41)</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Lorem, ipsum.(9)</p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
