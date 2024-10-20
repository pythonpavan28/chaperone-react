import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Menu icons
import { FiShoppingCart } from "react-icons/fi"; // Shopping cart icon
import { IoPerson } from "react-icons/io5";
import "./navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart sidebar

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="https://res.cloudinary.com/dpbmiyyne/image/upload/v1729323981/image_55_mgmpxr.png" alt="logo"  />
          <h2>Chaperone</h2>
        </div>

        {/* Center: Navigation Items */}
        <div className={isOpen ? "nav-links-mobile" : "nav-links"}>
          <ul>
            <div className="navitems-center">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="plants-pots">
                Plants & Pots
                
              </li>
              <li className="dropdown " >
                Tools
                <ul className="dropdown-content">
                  <li>
                    Gardening Tools
                  </li>
                  <li>
                    Pest Control
                  </li>
                  <li>
                    Fertilizers
                  </li>
                  <li>
                    watering Cans
                  </li>
                  <li>
                    Garden Accessories
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                Our Services
                <ul className="dropdown-content">
                  <li>
                    Book a Maali
                  </li>
                  <li>
                  Plant Day Care
                  </li>
                  <li>
                  Rent Plants
                  </li>
                </ul>
              </li>
              <li>
                Blog
              </li>
              <li>
                Our Story
              </li>
              <li>
               FAQs
              </li>
            </div>
          </ul>
          <div className="navitems-end">
          <li className="dropdown">
            <div className="my-profile">
              <IoPerson/>
              My Profile
            </div>
               
                <ul className="dropdown-content">
                  <li>
                    Hello Priyanka!
                  </li>
                  <li>
                  9856784012
                  </li>
                  <br/>
                  <li>
                  My Account
                  </li>
                  <li>
                  Orders & Refund
                  </li>
                  <li>
                  Wishlist
                  </li>
                  <li>
                  Gift Cards
                  </li>
                  <li>
                  Service Membership
                  </li>
                  <li>
                  Refer to Friend
                  </li>
                </ul>
              </li>
            <li>
              <div className="cart-icon" onClick={toggleCart}>
                <FiShoppingCart size={30} />
              </div>
            </li>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
      </nav>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar  ${isCartOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleCart}>
          <FiX size={30} />
        </button>
        <h2>Shopping Cart</h2>
        {/* Add cart items here */}
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          {/* You can map through cart items here */}
        </ul>
      </div>
    </>
  );
};

export default Navbar