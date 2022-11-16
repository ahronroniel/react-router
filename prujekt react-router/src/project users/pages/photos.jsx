import React, { useState } from "react";
import fetchData from "./fatch";
import { useParams } from "react-router-dom";

const Photos = () => {
  const [num, setNum] = useState(10);
  let albumId = useParams("albumId");
const currentPhotos=50
  const { data, loading, error } = fetchData(
    `albums/${albumId.albumid}/photos`
  );

  const morePictures = () => {
   num < currentPhotos ? setNum(num + 10):setNum(10);
  };
console.log(num);
  return (
    <>
    <div>
      {data
        .filter((img, idx) => idx < num)
        .map((img, idx) => (
          <img key={idx} src={img.thumbnailUrl} alt="Italian Trulli" />
        ))}</div>
        <br/>
      <button onClick={morePictures}>more pictures</button>
    </>
  );
};

export default Photos;
