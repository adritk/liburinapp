import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './Pages/Home';

class App extends Component {
  render() { 
    return ( 
        <div>
            <Route path="/" component={Home} exact/>
        </div>
     );
  }
}
 
export default App;