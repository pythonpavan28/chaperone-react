import React from "react";
import "./main.css";
import { IoSearchOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 992, 
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767, 
            settings: {
              slidesToShow: 1, 
            },
          },
          
        ],
      };
      
  return (
    <div>
      <div className="search-container">
        <IoSearchOutline className="search-icon" />
        <input
          type="search"
          className="search-input"
          placeholder="Search Plant"
        />
        <img
          className="leaf-icon"
          src="https://res.cloudinary.com/dpbmiyyne/image/upload/v1729337710/image_91_3x_pgwrlp.png"
          alt="Leaf"
        />
      </div>
      <div className="plants-pots-btn-container">
        <button type="button" className="plants-btn">
          Plants
        </button>
        <button type="button" className="pots-btn">
          Pots
        </button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        repellendus sunt officia, earum laudantium quas sit accusantium
        laboriosam, asperiores ratione veritatis quibusdam. Eius labore at quae
        nemo animi voluptates, modi, totam qui itaque vitae eligendi odit, eaque
        molestiae ab est! earum laudantium quas sit accusantium laboriosam,
        asperiores ratione veritatis quibusdam. Eius labore at quae nemo animi
        voluptates, modi, totam qui itaque vitae eligendi odit, eaque molestiae
        ab est!
      </p>
      <h1>Nursery</h1>
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img
              className="slide-image"
              src="https://res.cloudinary.com/dpbmiyyne/image/upload/v1729430048/c06ygpxxikspvzcxxsxf.jpg"
              alt="slide 1"
            />
            <p style={{ "text-align": "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              vitae.
            </p>
          </div>
          <div>
            <img
              className="slide-image"
              src="https://res.cloudinary.com/dpbmiyyne/image/upload/v1729430048/c06ygpxxikspvzcxxsxf.jpg"
              alt="slide 2"
            />
            <p style={{ "text-align": "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              vitae.
            </p>
          </div>
          <div>
            <img
              className="slide-image"
              src="https://res.cloudinary.com/dpbmiyyne/image/upload/v1729430048/c06ygpxxikspvzcxxsxf.jpg"
              alt="slide 3"
            />
            <p style={{ "text-align": "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              vitae.
            </p>
          </div>
          <div>
            <img
              className="slide-image"
              src="https://res.cloudinary.com/dpbmiyyne/image/upload/v1729430048/c06ygpxxikspvzcxxsxf.jpg"
              alt="slide 4"
            />
            <p style={{ "text-align": "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              vitae.
            </p>
          </div>
          <div>
            <img
              className="slide-image"
              src="https://res.cloudinary.com/dpbmiyyne/image/upload/v1729430048/c06ygpxxikspvzcxxsxf.jpg"
              alt="slide 5"
            />
            <p style={{ "text-align": "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              vitae.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default MainSection;
