import { useEffect, useState } from "react"
import { useFetch } from "./data/taskUseFetch";


function App() {

  const {data}=useFetch("http://localhost:8080/task/listar/");


  return (
    <>
    <div>
    {console.log(data?.map((task)=>{return task.nombre}))}
      {data?.map((task)=>{
        (<div>{task.nombre}</div>);
        })}
    </div>
     
 
    </>
  )
}

export default App
