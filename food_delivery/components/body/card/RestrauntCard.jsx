import React from 'react';
import './RestrauntCard.css'; // Import your CSS file if separate
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const RestrauntCard = ({item}) => {
 
  const handleAddToCart = (id)=> {
      cart.push(id);
  }
  return (
    <div className="restaurant-card">
      <Link to={`hotels/${item._id}`}>
        <img
        className="restaurant-image"
        src={item?.image}// Replace with your actual image source
        alt="Restaurant"
      />
      <div className="restaurant-info">
        <h2 className="restaurant-name">{item?.name}</h2>
        <p className="restaurant-description">
          {item?.category}
        </p>
        <div className="restaurant-details">
          <span className="restaurant-rating">Rating: 4.5</span>
          <span className="restaurant-price">Price: $$</span>
        </div>
    
      </div>
      </Link>
      <div onClick={()=>handleAddToCart(item._id)}>
          <button>Add to Cart</button>
        </div>
    </div>
  );
};

export default RestrauntCard;

