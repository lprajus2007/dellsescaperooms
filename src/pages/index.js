import React, { Component } from "react"
import Helmet from "react-helmet"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Slide } from '@material-ui/core'
import ReactNotificationBar from "../components/elements/ReactNotificationBar/NotificationBar"

import Sticky from "../components/helpers/Sticky"
import StickyHeader from "../components/elements/StickyHeader"
import NowPlaying from "../components/elements/NowPlaying"
import MobileMenu from "../components/elements/MobileMenu"
import SlickSlider from "../components/elements/Testimonies"
import FAQ from "../components/elements/FAQ"

import Carousel from "../components/helpers/Carousel"

import "../css/main.scss"

import logo from "../assets/images/logo.png";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            checked: false
        }
        this.body = React.createRef();
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.body.current.className = "";
            this.setState({
                checked: true
            })
        }, 300);
    }

    toggleMenu(state) {
        if (state) {
            this.setState({
                isMenuOpen: state.isOpen
            });
        } else {
            this.setState({
                isMenuOpen: !this.state.isMenuOpen
            });
        }
    }

    render() {
        return (
            <>
            <Helmet>
              <title>Dells Escape Rooms</title>
              <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
            </Helmet>
            <div ref={this.body} className="is-preload" style={{
                maxWidth: '1445px', 
                margin: '0px auto'
            }}>
                <div id="wrapper outer-container">
                    <ReactNotificationBar
                        className={{ background: 'darkred' }}
                        message="Dells Escape Rooms is taking every precaution we can to make sure all rooms are sterilized and safe during this time. Please note we are requiring masks. We also have ones available for $1 if you don’t have one. Thank you and happy escaping!"
                    />
                    <ul className="icons">
                        <li className="mobile-only-hide"><a href="https://www.facebook.com/WisconsinDellsEscapeRooms/" className="icon brands fa-facebook-f alt gold"><span className="label">Facebook</span></a></li>
                        <li className="mobile-only-hide"><a href="https://www.instagram.com/dellsescaperooms/" className="icon brands fa-instagram alt gold"><span className="label">Instagram</span></a></li>
                        <li className="mobile-only-view">
                            <div style={{ background: 'black', position: 'fixed', right: 0, top: 0 }}>
                                <div
                                    role="button"
                                    className={`icon ${!this.state.isMenuOpen ? 'fa fa-bars' : 'fa fa-times'} alt gold`}
                                    onClick={() => this.toggleMenu()}
                                    onKeyDown={() => this.toggleMenu()}
                                />
                            </div>
                        </li>
                        <li className="mobile-only-view"><MobileMenu isOpen={this.state.isMenuOpen} toggleMenu={this.toggleMenu} /></li>
                    </ul>
                    <header id="header" className="alt">
                        <Slide direction="up" timeout={500} in={this.state.checked}>
                            <div className="logo">
                                <img alt="logo" src={logo} />
                            </div>
                        </Slide>
                        <h2 className="caption gold" style={{ marginTop: "-50px", marginLeft: "75px" }}>Do you have what it takes to escape?!</h2>
                    </header>
                    <Sticky sides={{ top: 0 }}>
                        <StickyHeader>
                            <nav id="nav" style={{ height: "80px" }}>
                                <ul>
                                    <li><AnchorLink href="#first">Now Playing</AnchorLink></li>
                                    <li><AnchorLink href="#second">Reviews</AnchorLink></li>
                                    <li><AnchorLink href="#cta">Groups</AnchorLink></li>
                                    <li><AnchorLink href="#faq">FAQ</AnchorLink></li>
                                    <li><a target="_blank" href="https://dellsescaperooms.resova.us/gift-voucher">Gift Vouchers</a></li>
                                    <li><a target="_blank" href="https://dellsescaperooms.resova.us/">Book Now</a></li>
                                </ul>
                            </nav>
                        </StickyHeader>
                    </Sticky>
    
                    <div id="main">
                            <section id="intro" style={{ padding: '0px 0px !important' }} className="special">
                                <div style={{ height: '50vw', overflow: 'hidden' }} className="content">
                                    <Carousel interval={3000} images={["m1", "m2", "m3", "m4", "m5", "m6"]} />
                                </div>
                            </section>  
                            <NowPlaying />
                            <section id="second" className="main special">
                                <header className="major">
                                    <h1 className="gold">Reviews</h1>
                                    <p>We are the highest rated escape room in Wisconsin Dells on TripAdvisor. Checkout the reviews!</p>
                                </header>
                                <SlickSlider />
                            </section>
    
                            <section id="cta" className="main special">
                                <header className="major">
                                    <h1 className="gold">Groups</h1>
                                    <p>
                                        This won’t be your average company picnic. Dells Escape Rooms offers you and your employees an experience
                                        like never before! Book your team building event and have access to our escape rooms. You’ll also be able 
                                        to view your co-workers behaviors, build upon teamwork fundamentals, and most importantly – have FUN!.
                                    </p>
                                </header>
                                <footer className="major">
                                    <ul className="actions special">
                                        <li><AnchorLink href="#footer" className="button">Get in Touch</AnchorLink></li>
                                    </ul>
                                </footer>
                            </section>

                            <section id="FAQ" className="main special">
                                <header className="major">
                                    <h1 className="gold">FAQ</h1>
                                    <FAQ />
                                </header>
                            </section>
    
                    </div>
    
                    <footer id="footer">
                        <section>
                            <h2 className="gold">We are located in the beautiful Upper River District of Wisconsin Dells Downtown!</h2>
                            <ul className="icons" style={{ float: 'none' }}>
                                <li><h2 className="gold">Follow us on social:</h2></li>
                                <li><a href="https://www.facebook.com/WisconsinDellsEscapeRooms/" className="icon brands fa-facebook-f alt gold"><span className="label">Facebook</span></a></li>
                                <li><a href="https://www.instagram.com/dellsescaperooms/" className="icon brands fa-instagram alt gold"><span className="label">Instagram</span></a></li>
                            </ul>
                        </section>
                        <section>
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe
                                        title="dells-map-location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.9781667885386!2d-89.77475708433607!3d43.627813362089576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8807460628551015%3A0xc42b4ab1aa96994e!2sDells%20Escape%20Rooms!5e0!3m2!1sen!2sca!4v1594781602143!5m2!1sen!2sca"
                                        width="100%"
                                        height="100%"
                                        frameborder="0"
                                        allowfullscreen=""
                                        aria-hidden="false"
                                        tabindex="0"
                                    />
                                </div>
                            </div>
                            <dl className="alt">
                                <dt>Address</dt>
                                <dd>325 Broadway &bull; Wisconsin Dells, WI 53965</dd>
                                <dt>Phone</dt>
                                <dd>(608) 678-2272</dd>
                                <dt>Email</dt>
                                <dd><a href="#">info@dellsescaperooms.com</a></dd>
                            </dl>
                        </section>
                        <p className="copyright">&copy; 2020 Dells Escape Rooms</p>
                    </footer>
        
                </div>
            </div>
          </>        
        )
    }
}
