import React, { Component } from 'react';
import Axios from 'axios'
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
import 'aos/dist/aos.css';
import '../Styles/Home.css'

class Home extends Component {
    state = {
        packageTour: []
    }

    componentDidMount() {
        AOS.init({ duration: 1000, animatedClassName: 'animated' })

        Axios.get(API_URL + 'mostbuy')
            .then((res) => {
                console.log(res.data)
                this.setState({ packageTour: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // renderMostBuy = () => {
    //     let { packageTour } = this.state
    //     return packageTour.map((val, index) => {
    //         if (index === 0) {
    //             return (
    //                 <div>
    //                     <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="1700">
    //                         <img src={API_URL + '/' + val.imagePath} className="cityImages" alt="notfound" />
    //                         <div className="overlay mobileOverlay">
                                
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         } else if(index === 1) {
    //             return (
    //                 <div>
    //                     <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="2400">
    //                         <img src={API_URL + '/' + val.imagePath} className="cityImages" alt="notfound" />
    //                         <div className="overlay mobileOverlay">
                                
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         } else if(index === 2) {
    //             return (
    //                 <div>
    //                     <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="2900">
    //                         <img src={API_URL + '/' + val.imagePath} className="cityImages" alt="notfound" />
    //                         <div className="overlay mobileOverlay">
                                
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         }
    //     })
    // }

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
                    <h1 data-aos="zoom-in-right">Mengapa Liburin</h1>
                    <div className="mainContainer">
                        <div className="kolomInfo" data-aos="zoom-in-down" data-aos-delay="500">
                            <img src={Search} className="iconSearch carimudah" alt="notfound" />
                            <h1>Carinya Mudah</h1>
                            <h3>Kemudahan mencari destinasi wisata sesuai keinginan anda</h3>
                        </div>
                        <div className="kolomInfo" data-aos="zoom-in-down" data-aos-delay="1000">
                            <img src={Shield} className="iconSearch" alt="notfound" />
                            <h1>Terpercaya</h1>
                            <h3>Situs terpercaya di indonesia yang menyediakan layanan perjalanan ke seluruh indonesia</h3>
                        </div>
                        <div className="kolomInfo" data-aos="zoom-in-down" data-aos-delay="1500">
                            <img src={Card} className="iconSearch" alt="notfound" />
                            <h1>Harga Terbaik</h1>
                            <h3>Wujudkan liburan anda dengan paket tour berkualitas dengan harga yang relatif terjangkau</h3>
                        </div>
                        <hr style={{marginTop: "10px",width: "65%"}} />
                    </div>
                </section>


                <section className="section-three first-style">
                    <h1 data-aos="zoom-in-right">Destinasi Terbaik</h1>
                    <div className="mainContainer">
                        {/* {this.renderMostBuy()} */}
                        
                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="500">
                             <img src={Padang} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                <h4>Paket Tour Padang</h4>
                                <h4>Rp. 2.500.000</h4>
                                <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                <h6><AccessTimeIcon fontSize="small" />&nbsp; 4D3N</h6>
                                <h6><FlightTakeoffIcon fontSize="small" />&nbsp;Air Asia</h6>
                                <h6><LocationOnIcon fontSize="small" />&nbsp;Sumatera Barat, Indonesia</h6>
                                <Button color="primary" variant="contained" size="small" style={{margin: '50px 0px 0px 55px'}}>Beli Sekarang</Button>
                             </div>
                         </div>

                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="1000">
                             <img src={Jogja} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                <h4>Culinary Yogyakarta Tour</h4>
                                <h4>Rp. 3.500.000</h4>
                                <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                <h6><AccessTimeIcon fontSize="small" />&nbsp; 3D2N</h6>
                                <h6><FlightTakeoffIcon fontSize="small" />&nbsp;Citilink</h6>
                                <h6><LocationOnIcon fontSize="small" />&nbsp;Daerah Istimewa Yogyakarta, Indonesia</h6>
                                <Button color="primary" variant="contained" size="small" style={{margin: '50px 0px 0px 55px'}}>Beli Sekarang</Button>
                             </div>
                         </div>

                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="1500">
                             <img src={Toraja} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                <h4>Makassar Toraja Tour</h4>
                                <h4>Rp. 4.500.000</h4>
                                <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                <h6><AccessTimeIcon fontSize="small" />&nbsp; 5D4N</h6>
                                <h6><FlightTakeoffIcon fontSize="small" />&nbsp;Lion Air</h6>
                                <h6><LocationOnIcon fontSize="small" />&nbsp;Sulawesi Utara, Indonesia</h6>
                                <Button color="primary" variant="contained" size="small" style={{margin: '50px 0px 0px 55px'}}>Beli Sekarang</Button>
                             </div>
                         </div>
                         <hr style={{marginTop: "10px",width: "65%"}} />
                    </div>
                </section>

                <section className="section-three first-style">
                    <h1 data-aos="zoom-in-right">Theme Park</h1>
                    <div className="mainContainer">
                        
                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="500">
                             <img src={Jungle} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                <h4>Jungle Land</h4>
                                <h4>Rp. 100.000</h4>
                                <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                <h6><LocationOnIcon fontSize="small" />&nbsp; Bogor, Indonesia</h6>
                                <Button color="primary" variant="contained" size="small" style={{margin: '50px 0px 0px 55px'}}>Beli Sekarang</Button>
                             </div>
                         </div>

                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="1000">
                             <img src={JatimPark} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                <h4>Jatim Park 2</h4>
                                <h4>Rp. 150.000</h4> 
                                <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                <h6><LocationOnIcon fontSize="small" />&nbsp; Malang, Indonesia</h6>
                                <Button color="primary" variant="contained" size="small" style={{margin: '50px 0px 0px 55px'}}>Beli Sekarang</Button>
                             </div>
                         </div>

                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="1500">
                             <img src={Dufan} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                <h4>Dunia Fantasi</h4>
                                <h4>Rp. 150.000</h4>
                                <hr style={{ backgroundColor: "white", marginRight: '20px', marginTop: '17px', marginBottom: '15px'}}></hr>
                                <h6><LocationOnIcon fontSize="small" />&nbsp; Jakarta, Indonesia</h6>
                                <Button color="primary" variant="contained" size="small" style={{margin: '50px 0px 0px 55px'}}>Beli Sekarang</Button>
                             </div>
                         </div>
                    
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;