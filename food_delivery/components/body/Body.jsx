// import React, { useEffect, useState } from 'react'
// import "./Body.css";
// import RestrauntCard from './card/RestrauntCard';
// import Shimmer from './shimmer/shimmer';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// // const Body = () => {
// //   const [Loading, setLoading] = useState(false);
// //   const [restaurantData, SetRestaurantData] = useState([]);
// //   const [filteredHotel, setFilteredHotel] = useState([]);
// //   const [searchText, setSearchText] = useState("");
// // const [Error, setError] = useState("");
// //   useEffect(()=>{
// //       getRestaurantList();
// //   }, []);

// //   const getRestaurantList = async()=> {
// //   try {
// //     setLoading(true);
// //     const data = await axios.get("https://nomad-nest-backend.onrender.com/api/hotels");

// //     // const result = data?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
// //     SetRestaurantData(data?.data);
// //     // setFilteredHotel(data.data);
// //     // SetRestaurantData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// //     // SetRestaurantData(data?.data?.cards[2]?.data?.data?.cards);

// //   } catch (error) {
// //     // (error);
// //     setError(error);
// //   } finally{
// //     setLoading(false);
// //   }
 
// //   }

// //   const handleFilterHotel = ()=> {
// //     const filteredRestaurant = restaurantData.filter((restaurant)=> restaurant.name.includes(searchText)); 
// //     setFilteredHotel(filteredRestaurant);
// //   }

// //   return (
// //     <div className='body'>
// //        <div className='search_bar'>
// //         <input type="text"  placeholder='Enter Restaurant Name' className='search_input' onChange={(e)=> setSearchText(e.target.value)} />
// //         <button className='search_btn' onClick={()=>handleFilterHotel(searchText, restaurantData)}>Search</button>
// //     </div>
// //   {console.log(restaurantData)}
// //    { <div className='restaurant_cards_container'>
// //              {
// //               searchText.length === 0 ? ( !restaurantData && Loading ? <Shimmer/> : restaurantData.map((item)=> {
// //                 return(
// //                   <RestrauntCard item={item} key={item.id}/>
// //                 )
// //               })):(filteredHotel.map((item)=> {
// //                 return(
// //                   <RestrauntCard item={item} key={item.id} />
// //                 )
// //               }))
// //              }
// //     </div>
// //     }
// //     </div>
// //   )
// // }

// export default Body




import React, { useEffect, useState } from 'react'
import SearchBar from './searchbar/SearchBar';
import "./Body.css";
import RestrauntCard from './card/RestrauntCard';
import Shimmer from './shimmer/shimmer';
import axios from 'axios';
const Body = () => {
  let result;
  const [Loading, setLoading] = useState(false);
  const [restaurantData, SetRestaurantData] = useState([]);
const [Error, setError] = useState("");
  useEffect(()=>{
    const getRestaurantList = async()=> {
      try {
     
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const res = await data.json();
        // const result = res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        result = await res?.data?.cards[2]?.card?.card?.facetList;
       result.then((data)=> {
        console.log(res?.data?.cards[2]?.card?.card?.facetList); 
        SetRestaurantData(data);
        setLoading(true);
       }).catch((error)=>{
             setError(error);
       })
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
      
  }, [result]);

  console.log("after useffect", restaurantData)
  
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
<h1>{Error}</h1>
  {/* <h1>{Error}</h1> */}
   { <div className='restaurant_cards_container'>
        {
          Loading ? (<Shimmer/> ): (
          restaurantData?.map((restaurant) => {
           return ( <RestrauntCard  {...restaurant.info} key={restaurant?.id}/> );
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















// {
//   filteredHotel.length===0 ? (  restaurantData?.map((restaurant) => {
//     return (<Link key={restaurant.id} to={`hotels/${restaurant._id}`}><RestrauntCard  hotel={restaurant} /></Link>  );
//    }   )) : (
//     filteredHotel?.map((restaurant) => {
//    return ( <Link key={restaurant.id} to={`hotels/${restaurant._id}`}><RestrauntCard  hotel={restaurant} /></Link> );
//   }   )
//   )
// } 


// Chinmay@123
// zionpublicschool