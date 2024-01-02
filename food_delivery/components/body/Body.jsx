import React, { useEffect, useState } from 'react'
import "./Body.css";
import RestrauntCard from './card/RestrauntCard';
import Shimmer from './shimmer/shimmer';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Body = () => {
  const [Loading, setLoading] = useState(false);
  const [restaurantData, SetRestaurantData] = useState([]);
  const [filteredHotel, setFilteredHotel] = useState([]);
  const [searchText, setSearchText] = useState("");
const [Error, setError] = useState("");
  useEffect(()=>{
      getRestaurantList();
  }, [filteredHotel]);

  const getRestaurantList = async()=> {
  try {
    setLoading(true);
    const data = await axios.get("https://nomad-nest-backend.onrender.com/api/hotels");

    // const result = data?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    SetRestaurantData(data?.data);
    // setFilteredHotel(data.data);
    // SetRestaurantData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // SetRestaurantData(data?.data?.cards[2]?.data?.data?.cards);

  } catch (error) {
    // (error);
    setError(error);
  } finally{
    setLoading(false);
  }
 
  }

  const handleFilterHotel = ()=> {
    const filteredRestaurant = restaurantData.filter((restaurant)=> restaurant.name.includes(searchText)); 
    setFilteredHotel(filteredRestaurant);
  }

  return (
    <div className='body'>
       <div className='search_bar'>
        <input type="text"  placeholder='Enter Restaurant Name' className='search_input' onChange={(e)=> setSearchText(e.target.value)} />
        <button className='search_btn' onClick={()=>handleFilterHotel(searchText, restaurantData)}>Search</button>
    </div>
  {console.log(restaurantData)}
   { <div className='restaurant_cards_container'>
        {
          filteredHotel.length===0 ? (  restaurantData?.map((restaurant) => {
            return (<Link key={restaurant.id} to={`hotels/${restaurant._id}`}><RestrauntCard  hotel={restaurant} /></Link>  );
           }   )) : (
            filteredHotel?.map((restaurant) => {
           return ( <Link key={restaurant.id} to={`hotels/${restaurant._id}`}><RestrauntCard  hotel={restaurant} /></Link> );
          }   )
          )
        } 
    </div>
    }
    </div>
  )
}

export default Body
