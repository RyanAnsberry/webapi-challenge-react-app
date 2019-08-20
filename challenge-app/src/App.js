import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    axios.get('https://webapi-sprint-chanllenge-webpt.herokuapp.com/api/projects')
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
