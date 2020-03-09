import React,{Component} from 'react';
import './App.css';

class App extends Component {

  state={
    products:[]
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts=()=>{
    fetch('http://localhost:5500/try-db')
    .then(response=>response.json())
    .then(response=>this.setState({products:response.data}))
    .catch(err=>console.error(err))
  }
  renderProduct=({tIm,Name})=><div key={tIm}><h1>{Name}</h1></div>
 render(){
   const {products} =this.state
  return (
    <div className="App">
     {products.map(this.renderProduct)}
    </div>
  );
}
}
export default App;
