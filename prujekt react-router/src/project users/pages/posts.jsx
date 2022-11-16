import React from 'react';
import { Link } from 'react-router-dom';
import fetchData from "./fatch";

const Posts = () => {

 const user = JSON.parse(localStorage.getItem('user'))
 const { data, loading, error } = fetchData(`users/${user.id}/posts`);

console.log(data);
  return (
   <>
   
    {data.map((post,idx) =><h2  key={idx}><Link to={`${post.id}`}>{post.title}</Link></h2>) }
     
   </>
  );
};
export default Posts;
