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
    this.handleSearch = this.handleSearch.bind(this)
  }
  componentDidMount(){
    // fetch ("https://jsonplaceholder.typicode.com/users")
    // .then(response =>response.json())
    getUrlData("https://jsonplaceholder.typicode.com/users")
    .then(user => this.setState({ monsters: user}))
  }
  handleSearch(event){
    this.setState({
      
      searchField:event.target.value
    })
  }

   render() {
     const {monsters, searchField} = this.state ;
     const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
     return (
       <div className="App">
          <SearchBox
          
          placeholder="Search monsters"
          handleChange={e => this.setState({ searchField : e.target.value})}

      />
         <CardList monsters={filteredMonsters}  >
           
         
         </CardList>
        
       </div> 
     )

   };
    
   
}

export default App;
