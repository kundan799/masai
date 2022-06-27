
import { useState } from "react";
import Slide from "./Components/Slide";
import "./styles.css";

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
  const [count,setCount]=useState(0)
  const [page,setPage]=useState({})
  const pagination =()=>{
    if(data[count] !== undefined){
      setPage(data[count])

    }
  }
 
  const handlepre=()=>{
    setCount(count-1);
    pagination();

  }
  const handlenext=()=>{
    setCount(count+1);
    pagination();
  }
  return (
    <>
    {/* <h1>{count}</h1> */}
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      {/* {data.map((el)=>(
 <Slide title={el.title} description={el.description} key={el.id}/>

 
      ))} */}
      <Slide data={page}/>
      
     
      <button data-testid="prev" disabled={count<=0} onClick={handlepre}>Prev</button>
      <button data-testid="next" disabled={count>=data.length-1} onClick={handlenext}>Next</button>
    </div>
    </>
  );
}
