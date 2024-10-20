import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./products.css"; // Importing the CSS file

const Products = () => {
  const itemsPerPage = 6; // Number of items to show per page

  const initialItems = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dpbmiyyne/image/upload/v1729424933/nyqnbk14swzl4xasjnkn.jpg",
      name: "Item 1",
      description: "Description for Item 1",
      rating: 4.5,
      originalPrice: 100,
      discountPrice: 80,
      liked: false,
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dpbmiyyne/image/upload/v1729424933/nyqnbk14swzl4xasjnkn.jpg",
      name: "Item 2",
      description: "Description for Item 2",
      rating: 4.0,
      originalPrice: 150,
      discountPrice: 120,
      liked: false,
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dpbmiyyne/image/upload/v1729424933/nyqnbk14swzl4xasjnkn.jpg",
      name: "Item 2",
      description: "Description for Item 2",
      rating: 4.0,
      originalPrice: 150,
      discountPrice: 120,
      liked: false,
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dpbmiyyne/image/upload/v1729424933/nyqnbk14swzl4xasjnkn.jpg",
      name: "Item 2",
      description: "Description for Item 2",
      rating: 4.0,
      originalPrice: 150,
      discountPrice: 120,
      liked: false,
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dpbmiyyne/image/upload/v1729424933/nyqnbk14swzl4xasjnkn.jpg",
      name: "Item 2",
      description: "Description for Item 2",
      rating: 4.0,
      originalPrice: 150,
      discountPrice: 120,
      liked: false,
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dpbmiyyne/image/upload/v1729424933/nyqnbk14swzl4xasjnkn.jpg",
      name: "Item 2",
      description: "Description for Item 2",
      rating: 4.0,
      originalPrice: 150,
      discountPrice: 120,
      liked: false,
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dpbmiyyne/image/upload/v1729424933/nyqnbk14swzl4xasjnkn.jpg",
      name: "Item 2",
      description: "Description for Item 2",
      rating: 4.0,
      originalPrice: 150,
      discountPrice: 120,
      liked: false,
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dpbmiyyne/image/upload/v1729424933/nyqnbk14swzl4xasjnkn.jpg",
      name: "Item 2",
      description: "Description for Item 2",
      rating: 4.0,
      originalPrice: 150,
      discountPrice: 120,
      liked: false,
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dpbmiyyne/image/upload/v1729424933/nyqnbk14swzl4xasjnkn.jpg",
      name: "Item 2",
      description: "Description for Item 2",
      rating: 4.0,
      originalPrice: 150,
      discountPrice: 120,
      liked: false,
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dpbmiyyne/image/upload/v1729424933/nyqnbk14swzl4xasjnkn.jpg",
      name: "Item 2",
      description: "Description for Item 2",
      rating: 4.0,
      originalPrice: 150,
      discountPrice: 120,
      liked: false,
    },
    // Add more items here to test pagination, at least 12 or more
  ];

  const [items, setItems] = useState(initialItems);
  const [cart, setCart] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the items to be shown on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddToCart = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const handleLike = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, liked: !item.liked } : item
    );
    setItems(updatedItems);
  };

  // Handle pagination
  const nextPage = () => {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <div className="item-list">
        {currentItems.map((item) => (
          <div className="item-card" key={item.id}>
            <div>
              <img src={item.image} alt={item.name} />

              <button type="button" className="view-product">
                <Link to={"/view-product"}>
                View Product
                </Link>
                </button>
              
            </div>
            <div className="item-description-container">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <p className="rating">⭐⭐⭐⭐⭐ {item.rating} </p>
              <p className="item-price">
                <del>
                  <span>&#8377;</span>
                  {item.originalPrice}
                </del>{" "}
                <strong className="discount-price">
                  <span>&#8377;</span>
                  {item.discountPrice}
                </strong>
              </p>
            </div>
            <div className="cart-buy-btn-c">
              <div className="cart-controls">
                {cart[item.id] ? (
                  <div>
                    <button
                      type="button"
                      className="plus-minus-button"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      -
                    </button>
                    <span>{cart[item.id]}</span>
                    <button
                      type="button"
                      className="plus-minus-button"
                      onClick={() => handleAddToCart(item.id)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(item.id)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>

              <button className="buy-on-rent-btn">Buy on Rent</button>
            </div>
            {/* Like Button */}
            <button
              className={`like-button ${item.liked ? "liked" : ""}`}
              onClick={() => handleLike(item.id)}
            >
              {item.liked ? "❤️" : "🤍"}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          type="button"
          className="prev-next-btn"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(items.length / itemsPerPage)}
        </span>
        <button
          type="button"
          className="prev-next-btn"
          onClick={nextPage}
          disabled={currentPage === Math.ceil(items.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
