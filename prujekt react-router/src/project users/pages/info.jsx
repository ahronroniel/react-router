import React from "react";
const Info = () => {
  let user = [];

  const getUser = () => {
    user = JSON.parse(localStorage.getItem("user"));
  };

  getUser();

  return (
    <section>
      <div>
        <h1>full name: {user.name}</h1>
        <h3>user name: {user.username}</h3>
        <h3>email: {user.email}</h3>
        <h3>phone number: {user.phone}</h3>
      </div>
    </section>
  );
};

export default Info;
