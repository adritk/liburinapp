import React, { Component } from 'react';
import Navbar from '../Component/Navbar'

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core'
import Axios from 'axios'
import '../Styles/TourDomestik.css'

class TourDomestik extends Component {
  state = {
    alltour: []
  }

  componentDidMount() {
    Axios.get('https://my-json-server.typicode.com/adritk/apiliburin/tourdomestik')
        .then((res) => {
            console.log(res.data)
            this.setState({ alltour: res.data })
        })
        .catch((err) => {
            console.log(err)
        })
}

  renderAllTour = () => {
    let { alltour } = this.state
    return (
        alltour.map((val, index) => {
          return (
            <div className="kolomTour">
            <img src={val.image} className="cityImages" alt="notfound" />
            <div className="overlay mobileOverlay">
              <h5>{val.name}</h5>
              <h5>Rp. {val.price.toLocaleString()}</h5>
              <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px' }}></hr>
              <h6><AccessTimeIcon fontSize="small" />&nbsp; {val.duration}</h6>
              <h6><LocationOnIcon fontSize="small" />&nbsp; {val.location}</h6>
              <Button color="primary" variant="contained" size="small" id="buttonBuy">Beli Sekarang</Button>
            </div>
          </div>
            )
      })
    )
  }

  render() {

    return (
      <div>
        <Navbar />
        <div className="tourContainer">
          {this.renderAllTour()}
        </div>
      </div>
    );
  }
}

export default TourDomestik;