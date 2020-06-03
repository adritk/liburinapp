import React, { Component } from 'react';
// import {tour} from './MyData'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Aceh from '../Images/aceh.jfif'
import Bali from '../Images/backgroundbali.jfif'
import Bromo from '../Images/backgroundbromo.jfif'
import Jogja from '../Images/backgroundjogja.jfif'
import Bandung from '../Images/bandung.jfif'
import Medan from '../Images/palembang.jfif'
import Bunaken from '../Images/bunaken.jfif'
import Kintamani from '../Images/kintamani.jfif'
import Surabaya from '../Images/surabaya.jfif'
import Padang from '../Images/padang.jfif'
import Jakarta from '../Images/monas.jfif'
import Toraja from '../Images/Toraja.jfif'

class PackageDetails extends Component {


    componentDidMount() {
      console.log("received "+this.props.location.state.tour);
    }
    render() { 
   
        return (
          <div>
                        {/* <div className="kolomTour">
                                    <img src={tour[7].src} className="cityImages" alt="notfound" />
                                    <div className="overlay mobileOverlay">
                                    <h5>{tour[7].name}</h5>
                                    <h5>Rp. {tour[7].price.toLocaleString()}</h5>
                                    <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                    <h6><AccessTimeIcon fontSize="small" />&nbsp; {tour[7].duration}</h6>
                                    <h6><LocationOnIcon fontSize="small" />&nbsp; {tour[7].location}</h6>
                                    </div>
                                  </div> */}
                    
                </div>      
          );
      }
}
 
export default PackageDetails;