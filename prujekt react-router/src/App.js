import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './project users/pages/Home'
import Info from './project users/pages/info'
import Todos from './project users/pages/todos'
import Posts from './project users/pages/posts'
import Login from './project users/pages/Login'
import Comments from './project users/pages/comments'
import Albums from './project users/pages/albums'
import 'bootstrap/dist/css/bootstrap.css'
import Photos from './project users/pages/photos'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/users/:userid' element={<Home />}>
      <Route path='info' element={<Info />}/>
      <Route path='todos' element={<Todos />}/>
      <Route path='posts' element={<Posts/>}/>
      <Route path='albums' element={<Albums/>}/>
      <Route path='albums/:albumid' element={<Photos/>}/>
      <Route path='posts/:postsId' element={<Comments/>}/>
       
      </Route>
</Routes>
</BrowserRouter>
    
  )
}

export default App;
