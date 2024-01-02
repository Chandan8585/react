import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const IndividualHotel = () => {
  const [detail, setDetail] = useState({});
  const params = useParams();

  async function getHotelPage() {
    try {
      const data = await axios.get(
        `https://nomad-nest-backend.onrender.com/api/hotels/${params._id}`
      );
      setDetail(data?.data); // Assuming the necessary data is in data.data
      console.log(data.data);
    } catch (error) {
      console.error("Error fetching hotel details:", error);
    }
  }

  useEffect(() => {
    getHotelPage();
  }, [params.id]); // Added params.id to the dependency array

  return (
    <>
      <h1>{detail?.name}</h1>
      <h2>{detail?.city}</h2>
      <img src={detail?.image} />
    </>
  );
};

export default IndividualHotel;
