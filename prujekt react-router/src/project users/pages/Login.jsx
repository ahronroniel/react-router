import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import fetchData from "./fatch";

function LogIn() {
  const navigate = useNavigate();
  let name, password;
  const { data, loading, error } = fetchData("users");
  const subString = (text) => text.substring(text.length - 4, text.length);
  const submit = () => {
    const userInfo = data.find((e) => {
      return (
        subString(e.address.geo.lat) === password.value &&
        e.username === name.value
      );
    });
    if (!userInfo) {
      return alert("try agaiin");
    }

    localStorage.setItem("user", JSON.stringify(userInfo));
    console.log(userInfo);
    navigate(`/users/${userInfo.id}`);
  };

  return (
    <>
      <div className="container">
        <form action="/action_page.php">
          <div className="form-group">
            <label for="email">user name:</label>
            <input
              ref={(e) => (name = e)}
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              ref={(e) => (password = e)}
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
            />
          </div>
          <button onClick={submit} type="submit" className="btn btn-default">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default LogIn;
