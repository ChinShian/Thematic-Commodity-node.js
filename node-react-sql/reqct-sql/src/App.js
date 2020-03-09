import React,{useState, useEffect} from 'react';
import './App.css';

function App() {

  const [products,setProducts]=useState([])
  const getProducts=()=>{
    fetch('http://localhost:5500/try-db')
    .then(response=>response.json())
    .then(response=>setProducts({products:response.data}))
    .catch(err=>console.error(err))
  }
  useEffect(()=>{
    getProducts();
  },[])

 console.log(products)
 const pro =( 
 <div>
  { products.map((v,i)=>{
       return (
         <div>{v.Name}</div>
       )
     }) }
    </div> )
//  const renderProduct=({tIm,Name})=><div key={tIm}><h1>{Name}</h1></div>
  return (
    <div className="App">
    {pro}
     {/* {products.map((v,i)=>{
       return (
         <div>{v.Name}</div>
       )
     })} */}
    </div>
  );
}

export default App;
