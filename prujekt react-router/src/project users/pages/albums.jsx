import React from "react";
import { Link } from "react-router-dom";
import fetchData from "./fatch";
const Albums = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { data, loading, error } = fetchData(`users/${user.id}/albums`);

  function sorting() {
    const newArray = [...data];
    newArray.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      } else return 0;
    });
    return newArray;
  }
  return (
    <>
      <section className="section">
        <ul>
          {" "}
          {sorting().map((album, idx) => (
            <h4 key={idx}>
              <Link to={`${album.id}`}>{album.title}</Link>{" "}
            </h4>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Albums;
