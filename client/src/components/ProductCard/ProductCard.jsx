import { useState } from 'react';
import {  FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './style.css';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import imgheart from '../../assets/heart.png';
import lc from '../../assets/location.png';



const ProductCard = () => {
  const dummyData = [
    { name: 'Lappartement de la falaise  ', location: 'Down Town , Madina Tunis', price: '$19.99', image: img1 },
    { name: 'Appartement S+2rez de chaussée', location: 'Site archéologique de Carthage', price: '$29.99', image: img2 },
    { name: 'Charmant studio vue mer sublime', location: 'Sidi Bou Saïd', price: '$39.99', image: img3 },
    { name: 'Appartement magnifique, chic et stratégique', location: 'Bryce Canyon National Park, USA', price: '$49.99', image: img4 },
    { name: 'Charmant studio vue mer sublime', location: 'Sidi Bou Saïd', price: '$59.99', image: img1 },
    { name: 'Appartement S+2rez de chaussée', location: 'Bryce Canyon National Park, USA', price: '$69.99', image: img2 },
    { name: 'Appartement magnifique, chic et stratégique', location: 'Site archéologique de Carthage', price: '$79.99', image: img3 },
    { name: 'Lappartement de la falaise  ', location: 'Down Town , Madina Tunis', price: '$89.99', image: img4 },
    { name: 'Charmant studio vue mer sublime', location: 'Sidi Bou Saïd', price: '$59.99', image: img3 },
    { name: 'Appartement S+2rez de chaussée', location: 'Bryce Canyon National Park, USA', price: '$69.99', image: img4 },
    { name: 'Appartement magnifique, chic et stratégique', location: 'Site archéologique de Carthage', price: '$79.99', image: img2 },
    { name: 'Lappartement de la falaise  ', location: 'Down Town , Madina Tunis', price: '$89.99', image: img1 },
    { name: 'Appartement S+2rez de chaussée', location: 'Bryce Canyon National Park, USA', price: '$69.99', image: img4 },

  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [animate, setAnimate] = useState(false);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProducts = dummyData.slice(firstIndex, lastIndex);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  };

  return (
    <>
      {/* Text outside the product cards */}
      <div className="best-seller-text">Nos Best Sellers</div>

      {/* Navigation buttons */}
      <div className={`navigation-buttons ${animate ? 'animate' : ''}`}>
        <button className="discover-button" onClick={handlePrevPage} disabled={currentPage === 1}>
          <FaArrowLeft />
        </button>
        <button className="discover-button" onClick={handleNextPage} disabled={lastIndex >= dummyData.length}>
          <FaArrowRight />
        </button>
      </div>

      <div className="product-grid">
        {currentProducts.map((product, index) => (
          <div key={index} className={`product-card fade-in`}>
            {/* Product Image */}
            <div className="image-container">
              <img src={product.image} alt={`Product ${index + 1}`} className="product-image" />
              {/* Heart Icon */}
              <div className="heart-icon"><img src={imgheart}/></div>
              
            </div>

            {/* Product Name */}
            <div className="product-name">
              <span className="name">{product.name}</span>
              <div className="location">
                <img src={lc} className="location-icon" />
                
                <span className="location-text">{product.location}</span>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star, starIndex) => (
                <FaStar key={starIndex} className="star" />
              ))}
            </div>

            {/* Price and Buy Button */}
            <div className="price-and-button">
              <span className="price">
                <span className="new-price">{product.price}</span>
                <span className="old-price">$69.99</span>
              </span>
              <button className="buy-button">Explor</button>
            </div>
          </div>
        ))}
      </div>

      {/* Button outside the card */}
      <div className="centered-button-container">
        <button className="button-decouvrir">Je veux découvrir plus</button>
      </div>
    </>
  );
};

export default ProductCard;
