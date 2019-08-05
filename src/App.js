import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {SearchBox}  from "./components/search-box/search-box.component";
import {CardList} from   "./components/card-list/card-list.component" ;
function getUrlData(url){
  return fetch(url).then(response =>response.json())


}
class App extends Component {

  constructor(){
    super()
    this.state = {
     monsters: [],
     searchField:""
    } 
    // this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    // fetch ("https://jsonplaceholder.typicode.com/users")
    // .then(response =>response.json())
    getUrlData("https://jsonplaceholder.typicode.com/users")
    .then(user => this.setState({ monsters: user}))
  }


  handleChange =  event =>{
    this.setState({
      
      searchField:event.target.value
    })
  } 

  

   render() {
     const {monsters, searchField} = this.state ;
     const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
     return (
       <div className="App">
         <h1>MOnsters RoloDex</h1>
          <SearchBox
          
          placeholder="Search monsters"
          handleChange={this.handleChange}

      />
         <CardList monsters={filteredMonsters}  >
           
         
         </CardList>
        
       </div> 
     )

   };
    
   
}

export default App;
