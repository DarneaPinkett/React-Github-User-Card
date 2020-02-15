import React from 'react';
import axios from 'axios';

import CardList from './components/CardList';

import './App.css';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      cardData: []
    }
  }

  componentDidMount(){
    axios
    .get('https://api.github.com/users/DarneaPinkett')
    .then(res => {
      this.setState(()=> ({cardData: res.data}))
      console.log(res, 'response for API')
      console.log(this.state.cardData, 'State data')
    })
    .catch(err => {
      console.log('The error.', err)
    })
  }

  render() {
    return (
      <div className="App">
        <CardList cards={this.state.cardData}/>
      </div>
    )
  }
}


export default App;
