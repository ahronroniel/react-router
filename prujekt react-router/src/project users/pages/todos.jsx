import React, { useState, useEffect } from "react";
import fetchData from "./fatch";


const Todos = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { data, loading, error } = fetchData(`users/${user.id}/todos`);
  console.log(data);

  const [value, setValue] = useState("completed");
   const [random,setRandom] = useState(false)
 
  const filter = () => {
    if (!random) {
       const dataFilter = data.sort((a, b) => (a[value] > b[value] ? 1 : -1));
    console.log(dataFilter);
    return dataFilter;
    }
    else{
      const dataFilter = data.sort((a, b) => (Math.random()-1/2 ));
      return dataFilter
    }
   
  };
const sorting = (e) =>{
  setRandom(false)
setValue(e.target.value)

}

  
 
  return (
    <section className="section">
      <div>
        <button onClick={sorting} value="completed" class="btn btn-primary">
          filter comleted{" "}
        </button>
        <button onClick={sorting} value="title" class="btn btn-primary">
          filter abc{" "}
        </button>
        <button onClick={sorting} value="id" class="btn btn-primary">
          filter id{" "}
        </button>
        <button  onClick={()=>setRandom(true)} value="random" class="btn btn-primary">
          filter random{" "}
        </button>
      </div>
      <h2>todos for {user.name}</h2>
      {filter().map((todo, indx) => (
        <div>
          {todo.id}{" "}
          <input checked={todo.completed} type="checkbox" key={indx} />{" "}
          {todo.title}
        </div>
      ))}
    </section>
  );
};
export default Todos;

