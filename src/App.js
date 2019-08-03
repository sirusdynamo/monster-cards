import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {CardList} from   "./components/card-list/card-list.component" 

class App extends Component {

  constructor(){
    super()
    this.state = {
     monsters: [
       {
         name: "Loading",
         id: "1"
       },  
       {
        name: "Dracula vv",
        id:"2"
      },
      {
        name: "Zombie",
        id: "3"
      }
     ]
    }
  }
  componentDidMount(){
    fetch ("https://jsonplaceholder.typicode.com/users")
    .then(response =>response.json())
    .then(user => this.setState({ monsters: user}))
  }

   render() {
     return (
       <div className="App">
         <CardList monsters={this.state.monsters}  >
       
         {this.state.monsters.map(monster => { return <h1 key={monster.id}>  {monster.name}   </h1>})}
         </CardList>
        
       </div> 
     )

   };
    
   
}

export default App;
