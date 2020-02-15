import React from 'react';


import './App.css';
import Card from './components/Card';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount(){
    fetch('https://api.github.com/users/DarneaPinkett')
    .then(res => res.json())
    .then(user => {console.log("USER", user); this.setState({user: user})})
    .catch(err => console.log("error"));
  }

  render() {
    return (
      <div className="App">
        <Card user={this.state.user}/>
      </div>
    )
  }
}


export default App;
