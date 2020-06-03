import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './Pages/Home';
import LoginPage from './Component/Login'
import Register from './Component/Register'
import TourDomestik from './Pages/TourDomestik'
import TiketAtraksi from './Pages/TiketAtraksi'
import PackageDetails from './Pages/PackageDetails';
// import './App.css';

class App extends Component {
  render() { 
    return ( 
        <div>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={Register} />
            <Route path="/tourdomestik" component={TourDomestik} />
            <Route path="/tiketatraksi" component={TiketAtraksi} />
            <Route path="/package-details" component={PackageDetails} />

        </div>
     );
  }
}
 
export default App;