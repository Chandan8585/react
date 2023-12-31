// import React from 'react';
// import './restrauntCard.css'; 

// const RestrauntCard = ({restaurant}) => {
//   // console.log(restaurant);
//   console.log(restaurant);
//   return (
//     <div className="restaurant-card" key={restaurant?.info?.id}>
//       <img
//         className="restaurant-image"
//         src="https://placekitten.com/300/200"
//         alt="Restaurant"
//       />
//       <div className="restaurant-info">
//         {/* <h2 className="restaurant-name">{restaurant?.info?.name}</h2> */}
//         {/* <h3 className="restaurant-description">
//          {restaurant?.info?.cuisines?.map((item)=>{
//                 return(<span>{item}</span>)
//          })}
//         </h3> */}
//         <div className="restaurant-details">
//           <span className="restaurant-rating">Rating: {restaurant?.info?.avgRating}</span>
//           <span className="restaurant-price">Price: $$</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestrauntCard;


import React from 'react';
import './RestrauntCard.css'; // Import your CSS file if separate

const RestrauntCard = () => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src="https://placekitten.com/300/200" // Replace with your actual image source
        alt="Restaurant"
      />
      <div className="restaurant-info">
        <h2 className="restaurant-name">Restaurant Name</h2>
        <p className="restaurant-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          aliquet justo vel ante cursus, at tempus odio efficitur.
        </p>
        <div className="restaurant-details">
          <span className="restaurant-rating">Rating: 4.5</span>
          <span className="restaurant-price">Price: $$</span>
        </div>
      </div>
    </div>
  );
};

export default RestrauntCard;

