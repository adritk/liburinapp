import React, { Component } from 'react';
import Navbar from '../Component/Navbar'

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

import { Button } from '@material-ui/core'
import {tiket} from './MyData'

class TiketAtraksi extends Component {

    render() { 
        return (
            <div>
            <Navbar />
            <div className="tourContainer">
                {
                    tiket.map(t => {
                            return (
                                <div className="kolomTour">
                                <img src={t.src} className="cityImages" alt="notfound" />
                                <div className="overlay mobileOverlay">
                                    <h5>{t.name}</h5>
                                    <h5>Rp. {t.price.toLocaleString()}</h5>
                                    <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                    <h6><LocationOnIcon fontSize="small" />&nbsp; {t.location}</h6>
                                    <Button color="primary" variant="contained" size="small" id="buttonBuy">Beli Sekarang</Button>
                                </div>
                                </div>
                            ) 
                    })
                }  
            </div>
        </div>
          );
    }
}
 
export default TiketAtraksi;