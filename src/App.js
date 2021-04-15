import React, {useState,useEffect} from "react"
import './App.css';

const App=()=>{
  const API_URL='https://api.chucknorris.io/jokes/random'

  const [recipes,setRecipes]=useState([]);
  useEffect(()=>{
    loadData();
  },[]);
  const loadData=async()=>{
    const response=await fetch(API_URL)
    const data=await response.json();
    setRecipes(data);
    console.log(data)
  }
 
  return (
    <div className="App">
{
  <div>
    <ul>
      <li><img src={`${recipes.icon_url}`}></img></li>
      <li key={recipes.id}>{recipes.value}</li>
    </ul>
    
    </div>
} 
    </div>
  )
}

export default App;
