import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      adoptable: []
    };
    
  }
  componentDidMount() {
    //Hit .get('/api/dog') endpoint and set the adoptable dog state to res.data
    axios.get("/api/dog").then(res => {
      this.setState({
        adoptable: res.data
      });
    })
  }
  
  render() {
    return (
      <div className="App">
        {/* <Header className="App-header" /> */}
        
        
      </div>
    );
  }
}

export default App;
