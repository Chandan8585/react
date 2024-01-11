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

  useEffect(()=>{
      getRestaurantList();
  }, []);

  const getRestaurantList = async()=> {
  try {
    setLoading(true);
    const data = await axios.get("https://nomad-nest-backend.onrender.com/api/hotels");
    SetRestaurantData(data?.data);
    setLoading(false);
   console.log(restaurantData);
  } catch (error) {
    console.log(error)}
  }

  const handleFilterHotel = ()=> {
    const filteredRestaurant = restaurantData?.filter((restaurant)=> restaurant?.name?.includes(searchText)); 
    setFilteredHotel(filteredRestaurant);
  }

  return (
    <div className='body'>
       <div className='search_bar'>
        <input type="text"  placeholder='Enter Restaurant Name' className='search_input' onChange={(e)=> setSearchText(e.target.value)} />
        <button className='search_btn' onClick={()=>handleFilterHotel(searchText, restaurantData)}>Search</button>
    </div>
  {console.log("res",restaurantData)}
   { <div className='restaurant_cards_container'>
             {
              searchText.length === 0 ? ( Loading ? <Shimmer/> : restaurantData?.map((item)=> {
                return(
                  <RestrauntCard item={item} key={item?.id}/>
                )
              })):(filteredHotel?.map((item)=> {
                return(
                  <RestrauntCard item={item} key={item?.id} />
                )
              }))
             }
    </div>
    }
    </div>
  )
}

export default Body



