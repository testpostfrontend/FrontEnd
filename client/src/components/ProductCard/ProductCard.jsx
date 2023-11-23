import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './style.css';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';

const ProductCard = () => {
  const dummyData = [
    { name: 'Product 1', location: 'Location 1', price: '$19.99', image: img1 },
    { name: 'Product 2', location: 'Location 2', price: '$29.99', image: img2 },
    { name: 'Product 3', location: 'Location 3', price: '$39.99', image: img3 },
    { name: 'Product 4', location: 'Location 4', price: '$49.99', image: img4 },
    { name: 'Product 5', location: 'Location 5', price: '$59.99', image: img1 },
    { name: 'Product 6', location: 'Location 6', price: '$69.99', image: img2 },
    { name: 'Product 7', location: 'Location 7', price: '$79.99', image: img3 },
    { name: 'Product 8', location: 'Location 8', price: '$89.99', image: img4 },
    // Add more dummy data as needed
  ];

  return (
    <>
    {/* Text outside the product cards */}
    <div className="best-seller-text">Nos Best Sellers</div>
      <div className="product-grid">
        {dummyData.map((product, index) => (
          <div key={index} className="product-card">
            {/* Product Image */}
            <div className="image-container">
              <img src={product.image} alt={`Product ${index + 1}`} className="product-image" />
              {/* Heart Icon */}
              <div className="heart-icon">&hearts;</div>
            </div>

            {/* Product Name */}
            <div className="product-name">
              <span className="name">{product.name}</span>
              <div className="location">
                <FaMapMarkerAlt className="location-icon" />
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
              <button className="buy-button">Buy</button>
            </div>
          </div>
        ))}
      </div>

      {/* Button outside the card */}
      <div className="centered-button-container">
        <button className="discover-button">Je veux découvrir plus</button>
      </div>
    </>
  );
};

export default ProductCard;
