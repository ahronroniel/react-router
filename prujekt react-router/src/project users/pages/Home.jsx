
import React from 'react'
import { Link,Outlet } from 'react-router-dom';

const Home = () => {
  const user =JSON.parse(localStorage.getItem('user'))
  
  return (
    <>
  
   <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href='info'>{`welcome ${user.name}`}</a>
    </div>
    <ul className="nav navbar-nav">
      <li> <Link to={'info'} >Info</Link> </li>
      <li><Link to={'albums'} >ALBUMS</Link></li>
      <li><Link to={'todos'} >TODOS</Link></li>
      <li><Link to={'posts'} >posts</Link></li>
      <li><Link to={'/Login'} onClick={(e)=>localStorage.removeItem('user')} >LOGOUT</Link></li>
    </ul>
  </div>
</nav>
<Outlet/>
</>
  );
};


export default Home;
