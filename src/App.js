import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {CardList} from   "./components/card-list/card-list.component" 

class App extends Component {

  constructor(){
    super()
    this.state = {
     monsters: [],
     searchField:""
    } 
    this.handleSearch = this.handleSearch.bind(this)
  }
  componentDidMount(){
    fetch ("httLOps://jsonplaceholder.typicode.com/users")
    .then(response =>response.json())
    .then(user => this.setState({ monsters: user}))
  }
  handleSearch(event){
    this.setState({
      
      searchField:event.target.value
    })
  }

   render() {
     const {monsters, searchField} = this.state ;
     const filtered = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
     return (
       <div className="App">
         <input type="search"  placeholder="search monsters"  onChange={e => {
           this.setState({searchField:e.target.value})
         
          }
           } />
         <CardList monsters={filtered}  >
       
         {/* {this.state.monsters.map(monster => { return <h1 key={monster.id}>  {monster.name}   </h1>})} */}
         </CardList>
        
       </div> 
     )

   };
    
   
}

export default App;
