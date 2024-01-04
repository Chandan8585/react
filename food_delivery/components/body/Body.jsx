// import React, { useEffect, useState } from 'react'
// import "./Body.css";
// import RestrauntCard from './card/RestrauntCard';
// import Shimmer from './shimmer/shimmer';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// const Body = () => {
//   const [Loading, setLoading] = useState(false);
//   const [restaurantData, SetRestaurantData] = useState([]);
//   const [filteredHotel, setFilteredHotel] = useState([]);
//   const [searchText, setSearchText] = useState("");
// const [Error, setError] = useState("");
//   useEffect(()=>{
//       getRestaurantList();
//   }, [filteredHotel]);

//   const getRestaurantList = async()=> {
//   try {
//     setLoading(true);
//     const data = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

//     // const result = data?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//     SetRestaurantData(data?.data);
//     // setFilteredHotel(data.data);
//     // SetRestaurantData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     // SetRestaurantData(data?.data?.cards[2]?.data?.data?.cards);

//   } catch (error) {
//     // (error);
//     setError(error);
//   } finally{
//     setLoading(false);
//   }
 
//   }

//   const handleFilterHotel = ()=> {
//     const filteredRestaurant = restaurantData.filter((restaurant)=> restaurant.name.includes(searchText)); 
//     setFilteredHotel(filteredRestaurant);
//   }

//   return (
//     <div className='body'>
//        <div className='search_bar'>
//         <input type="text"  placeholder='Enter Restaurant Name' className='search_input' onChange={(e)=> setSearchText(e.target.value)} />
//         <button className='search_btn' onClick={()=>handleFilterHotel(searchText, restaurantData)}>Search</button>
//     </div>
//   {console.log(restaurantData)}
//    { <div className='restaurant_cards_container'>
//         {
//           filteredHotel.length===0 ? (  restaurantData?.map((restaurant) => {
//             return (<Link key={restaurant.id} to={`hotels/${restaurant._id}`}><RestrauntCard  hotel={restaurant} /></Link>  );
//            }   )) : (
//             filteredHotel?.map((restaurant) => {
//            return ( <Link key={restaurant.id} to={`hotels/${restaurant._id}`}><RestrauntCard  hotel={restaurant} /></Link> );
//           }   )
//           )
//         } 
//     </div>
//     }
//     </div>
//   )
// }

// export default Body


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
    const getRestaurantList = async()=> {
      try {
        // setLoading(true);
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const res = await data.json();
        // const result = res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const result = res.data.cards[2].card.card.gridElements.infoWithStyle?.restaurants;
        SetRestaurantData(result);
        // SetRestaurantData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // SetRestaurantData(data?.data?.cards[2]?.data?.data?.cards);
       
    console.log("first", res.data.cards[2].card.card.gridElements.infoWithStyle?.restaurants);
    
      } catch (error) {
        // (error);
        setError(error);
      } finally{
        setLoading(false);
      }
     
      }
      getRestaurantList();
      
  }, []);

//   const getRestaurantList = async()=> {
//   try {
//     setLoading(true);
//     const data = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
//     const result = data?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//     SetRestaurantData(result);
//     // SetRestaurantData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     // SetRestaurantData(data?.data?.cards[2]?.data?.data?.cards);
   
// console.log("first", result);

//   } catch (error) {
//     // (error);
//     setError(error);
//   } finally{
//     setLoading(false);
//   }
 
//   }
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