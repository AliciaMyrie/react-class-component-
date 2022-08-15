import React, {useState, useEffect} from "react";

function FunctionalComponent({Count}){
const [count, setCount] = useState(Count)
const [coffee, setCoffee] = useState([])

useEffect( () => {
    let url = "https://api.sampleapis.com/coffee/hot"
    fetch(url)
    .then(res=> res.json())
    .then(data => {
       // do something
       setCoffee(data) 
    })
},[])

    return (
    <>  
<h1>this is a functional component {count}</h1>
<button onClick={()=> {
    //update the count to count +1
  setCount(count+1)
}}>add one</button>

    {coffee.map(
        coffee =>
         <h1 key={coffee.id}>{coffee.title}</h1>
    )}

</>
)
}

export default FunctionalComponent;