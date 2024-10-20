import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import './sortBy.css'

function SortBy() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
      setIsDropdownVisible((prevState) => !prevState);
    };
  
    return (
        <div className='sort-main-container'>
            <p className='product-name'>300 products</p>
        

      <div className="sort-container">
        <div className='sort-name-arrow-c'>
        <span>Sort By</span>
        <button type='button' onClick={toggleDropdown} className="sort-button">
          {isDropdownVisible ? (
                <FaAngleUp className="sort-by-down-arrow" />
              ) : (
                <FaAngleDown className="sort-by-down-arrow" />
              )} {/* Up arrow if open, down arrow if closed */}
        </button>
        </div>
  
        {isDropdownVisible && (
          <div className="sort-dropdown">
            <div>
              <label>
                <input type="checkbox" className="checkbox" />
                Size
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" className="checkbox" />
                Popularity
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" className="checkbox" />
                Price, Low-High
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" className="checkbox" />
                Price, High-Low
              </label>
            </div>
          </div>
        )}
      </div>
      </div>
    );
  };

export default SortBy