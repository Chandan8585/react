import React, { useEffect, useState } from 'react'
import SearchBar from './searchbar/SearchBar';
import "./Body.css";
import RestrauntCard from './card/RestrauntCard';
import Shimmer from './shimmer/shimmer';
import axios from 'axios';
const Body = () => {
  const [Loading, setLoading] = useState(false);
  const [restaurantData, SetRestaurantData] = useState([]);
const [Error, setError] = useState("");
  useEffect(()=>{
      getRestaurantList();
  }, []);

  const getRestaurantList = async()=> {
  try {
    setLoading(true);
    const data = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const result = data?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    SetRestaurantData(result);
    // SetRestaurantData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // SetRestaurantData(data?.data?.cards[2]?.data?.data?.cards);
   
console.log("first", result);

  } catch (error) {
    // (error);
    setError(error);
  } finally{
    setLoading(false);
  }
 
  }
  return (
    <div className='body'>
    <SearchBar/>
  {console.log(restaurantData)}
  {/* <h1>{Error}</h1> */}
   { <div className='restaurant_cards_container'>
        {
          Loading ? (<Shimmer/> ): (
          restaurantData?.map((restaurant) => {
           return ( <RestrauntCard  {...restaurant.info} key={restaurant?.info?.id}/> );
          }   )
          )
        } 

        {/* {
          <div>
              <RestrauntCard/>
          <RestrauntCard/>
          <RestrauntCard/>
          <RestrauntCard/>
          <RestrauntCard/>
          <RestrauntCard/>
          </div>
        
        } */}
    </div>
    }
    </div>
  )
}

export default Body
