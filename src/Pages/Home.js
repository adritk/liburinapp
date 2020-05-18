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
                    </div>
                </section>

                <section className="section-three first-style">
                    <h1 data-aos="zoom-in-right">Destinasi Terbaik</h1>
                    <div className="mainContainer">
                        {/* {this.renderMostBuy()} */}
                        
                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="1700">
                             <img src={Padang} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                
                             </div>
                         </div>

                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="2400">
                             <img src={Jogja} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                
                             </div>
                         </div>

                         <div className="kolomDestinasi" data-aos="zoom-in-down" data-aos-delay="2800">
                             <img src={Toraja} className="cityImages" alt="notfound" />
                             <div className="overlay mobileOverlay">
                                
                             </div>
                         </div>
                    
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;