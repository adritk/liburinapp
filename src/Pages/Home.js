import React, { Component } from 'react';
import Axios from 'axios'
import {projects} from './MyData'
import { API_URL } from '../Helpers/API_URL'
import Navbar from '../Component/Navbar'
import Search from '../Images/search.svg'
import Shield from '../Images/shield.svg'
import Card from '../Images/payment.svg'

import Padang from '../Images/padang.jfif'
import Toraja from '../Images/Toraja.jfif'
import Jogja from '../Images/backgroundjogja.jfif'
import Jungle from '../Images/jungle.jfif'
import JatimPark from '../Images/jatimpark.jpg'
import Dufan from '../Images/dufan.jpg'

 
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

import { Button } from '@material-ui/core'

import AOS from 'aos'

import '../Styles/Home.css'

class Home extends Component {
    state = {
        packageTour: []
    }

    componentDidMount() {
        AOS.init({ duration: 1000, animatedClassName: 'animated' })

        Axios.get('http://localhost:5000/tourdomestik')
            .then((res) => {
                console.log(res.data)
                this.setState({ packageTour: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderTour = () => {
        let {packageTour} = this.state
            return (
                packageTour.map((val, index) => {
                    if(val.id === 1 || val.id === 2 || val.id === 3) {
                        return (
                            <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="500">
                             <img src={require(`../Images/${val.image}`)} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                    <h5>{val.name}</h5>
                    <h5>{val.price}</h5>
                                <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                    <h6><AccessTimeIcon fontSize="small" />&nbsp; {val.duration}</h6>
                    <h6><LocationOnIcon fontSize="small" />&nbsp; {val.location}</h6>
                                <Button color="primary" variant="contained" size="small" id="buttonBuy">Beli Sekarang</Button>
                             </div>
                         </div>
                    )
                }
            })
        )
    }



    render() {
        return (
            <div>
                <Navbar />
                <div className="kosong" style={{height: 65}}></div>
                <section className="backgroundImage">
                    <div className="textOnImage">
                        <h1>Mari Jelajahi Keindahan Indonesia</h1>
                        <p>Kepuasan Anda adalah tujuan kami</p>
                    </div>
                </section>

                <section className="section-two first-style">
                    <h2 data-aos="zoom-in-right">Mengapa Liburin</h2>
                    <div className="mainContainer">
                        <div className="kolomInfo" data-aos="zoom-in-down" data-aos-delay="500">
                            <img src={Search} className="iconSearch carimudah" alt="notfound" />
                            <h2>Carinya Mudah</h2>
                            <h3>Kemudahan mencari destinasi wisata sesuai keinginan anda</h3>
                        </div>
                        <div className="kolomInfo" data-aos="zoom-in-down" data-aos-delay="1000">
                            <img src={Shield} className="iconSearch" alt="notfound" />
                            <h2>Terpercaya</h2>
                            <h3>Situs terpercaya di indonesia yang menyediakan layanan perjalanan ke seluruh indonesia</h3>
                        </div>
                        <div className="kolomInfo" data-aos="zoom-in-down" data-aos-delay="1500">
                            <img src={Card} className="iconSearch" alt="notfound" />
                            <h2>Harga Terbaik</h2>
                            <h3>Wujudkan liburan anda dengan paket tour berkualitas dengan harga yang relatif terjangkau</h3>
                        </div>
                        <hr style={{marginTop: "10px",width: "65%"}} data-aos="zoom-in-left" data-aos-delay="1500" />
                    </div>
                </section>


                <section className="section-three first-style">
                    <h2 data-aos="zoom-in-right">Destinasi Terbaik</h2>
                    <div className="mainContainer">
                        {this.renderTour()}
                        
                         {/* <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="500">
                             <img src={Padang} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                <h5>Paket Tour Padang</h5>
                                <h5>Rp. 1,200,000</h5>
                                <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                <h6><AccessTimeIcon fontSize="small" />&nbsp; 4D3N</h6>
                                <h6><LocationOnIcon fontSize="small" />&nbsp; Padang, Indonesia</h6>
                                <Button color="primary" variant="contained" size="small" id="buttonBuy">Beli Sekarang</Button>
                             </div>
                         </div>

                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="1000">
                             <img src={Jogja} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                <h5>Culinary Yogyakarta Tour</h5>
                                <h5>Rp. 1,300,000</h5>
                                <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                <h6><AccessTimeIcon fontSize="small" />&nbsp; 4D3N</h6>
                                <h6><LocationOnIcon fontSize="small" />&nbsp; Yogyakarta, Indonesia</h6>
                                <Button color="primary" variant="contained" size="small" id="buttonBuy">Beli Sekarang</Button>
                             </div>
                         </div>

                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="1500">
                             <img src={Toraja} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                <h5>Paket Tour Toraja</h5>
                                <h5>Rp. 500,000</h5>
                                <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                <h6><AccessTimeIcon fontSize="small" />&nbsp; 3D2N</h6>
                                <h6><LocationOnIcon fontSize="small" />&nbsp; Makassar, Indonesia</h6>
                                <Button color="primary" variant="contained" size="small" id="buttonBuy">Beli Sekarang</Button>
                             </div>
                         </div>
                         <hr style={{marginTop: "10px",width: "65%"}} /> */}
                    </div>
                </section>

                <section className="section-three first-style">
                    <h2 data-aos="zoom-in-right">Theme Park</h2>
                    <div className="mainContainer">
                        
                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="500">
                             <img src={Jungle} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                <h5>Jungle Land</h5>
                                <h5>Rp. 100,000</h5>
                                <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                <h6><LocationOnIcon fontSize="small" />&nbsp; Bogor, Indonesia</h6>
                                <Button color="primary" variant="contained" size="small" id="buttonBuy">Beli Sekarang</Button>
                             </div>
                         </div>

                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="1000">
                             <img src={JatimPark} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                <h5>Jatim Park 2</h5>
                                <h5>Rp. 150,000</h5> 
                                <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                <h6><LocationOnIcon fontSize="small" />&nbsp; Malang, Indonesia</h6>
                                <Button color="primary" variant="contained" size="small" id="buttonBuy">Beli Sekarang</Button>
                             </div>
                         </div>

                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="1500">
                             <img src={Dufan} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                <h5>Dunia Fantasi</h5>
                                <h5>Rp. 150,000</h5>
                                <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                <h6><LocationOnIcon fontSize="small" />&nbsp; Jakarta, Indonesia</h6>
                                <Button color="primary" variant="contained" size="small" id="buttonBuy">Beli Sekarang</Button>
                             </div>
                         </div>
                         <hr style={{marginTop: "10px",width: "65%"}} />
                    </div>
                </section>
                
                <section className="section-four first-style">
                <h2 data-aos="zoom-in-right">Mau Kemana ?</h2>
                    <div className="flex-container">
                        {
                            projects.map(p => {
                                return (
                                    <div className="boxcard">
                                        <img src={p.src} className="cardCity" alt="notfound" />
                                        <div className="textOnCard">{p.name}</div>
                                    </div>  
                                )
                            })
                        }
                    </div>
                </section>

                <section className="section-five">
                    <div className="textOnBanner">
                        <ul style={{fontFamily: 'acme'}}>
                            <li>
                                <p>12</p>
                                <p>Paket Tour</p>
                            </li>
                            <li>
                                <p>5</p>
                                <p>Theme Park</p>
                            </li>
                            <li>
                                <p>1</p>
                                <p>Water Park</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;