import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LocationsList() {
  const [locations, setLocation] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        setLocation(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [locations]);
  return (
    <>
      {locations.map(area => (
        <div key={area.id}>
          <p>{area.type}</p>
        </div>
      ))}
    </>
  );
}
