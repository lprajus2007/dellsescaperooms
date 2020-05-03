import React, { Component } from "react"
import Helmet from "react-helmet"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Sticky from "../components/helpers/Sticky"
import StickyHeader from "../components/elements/StickyHeader"
import NowPlaying from "../components/elements/NowPlaying"

import "../css/main.scss"

import logo from "../assets/images/logo.png"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.body = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => {
            console.log(this.body.current);
            this.body.current.className = "";
        }, 300);
    }

    render() {
        return (
            <>
            <Helmet>
              <title>Dells Escape Rooms</title>
              <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
            </Helmet>
            <body ref={this.body} class="is-preload">
                <div id="wrapper">
                        <ul class="icons">
                            <li><a href="#" class="icon brands fa-twitter alt gold"><span class="label">Twitter</span></a></li>
                            <li><a href="#" class="icon brands fa-facebook-f alt gold"><span class="label">Facebook</span></a></li>
                            <li><a href="#" class="icon brands fa-instagram alt gold"><span class="label">Instagram</span></a></li>
                        </ul>
                        <header id="header" class="alt">
                            <div class="logo">
                                <img src={logo} />
                            </div>
                            <h2 className="gold" style={{ marginTop: "-50px", marginLeft: "75px" }}>Do you have what it takes to escape?!</h2>
                        </header>
                        <Sticky sides={{ top: 0 }}>
                            <StickyHeader>
                                <nav id="nav" style={{ height: "80px" }}>
                                    <ul>
                                        <li><AnchorLink href="#intro">About Us</AnchorLink></li>
                                        <li><AnchorLink href="#first">Pick your escape</AnchorLink></li>
                                        <li><AnchorLink href="#second">Reviews</AnchorLink></li>
                                        <li><AnchorLink href="#cta">Corporate Events</AnchorLink></li>
                                    </ul>
                                </nav>
                            </StickyHeader>
                        </Sticky>
        
                        <div id="main">
                                <section id="intro" class="main special">
                                    <div class="spotlight">
                                        <div class="content">
                                            <header class="major">
                                                <h1 className="gold">About Us</h1>
                                            </header>
                                            <p>
                                                Wisconsin Dells PD has discovered a very suspicious case in the alley behind Dells Escape Rooms. Your elite team of bomb technicians have been called to the scene to investigate the item in question. Your captain has reason to believe this is a time-sensitive issue…15 minutes separates you from success or a possible body bag. Calm your nerves, steady your hands and don’t screw this up! Do you have what it takes time to survive? If not…KABOOM!
                                                Wisconsin Dells PD has discovered a very suspicious case in the alley behind Dells Escape Rooms. Your elite team of bomb technicians have been called to the scene to investigate the item in question. Your captain has reason to believe this is a time-sensitive issue…15 minutes separates you from success or a possible body bag. Calm your nerves, steady your hands and don’t screw this up! Do you have what it takes time to survive? If not…KABOOM!
                                            </p>
                                            <p>
                                                Wisconsin Dells PD has discovered a very suspicious case in the alley behind Dells Escape Rooms. Your elite team of bomb technicians have been called to the scene to investigate the item in question. Your captain has reason to believe this is a time-sensitive issue…15 minutes separates you from success or a possible body bag. Calm your nerves, steady your hands and don’t screw this up! Do you have what it takes time to survive? If not…KABOOM!
                                                Wisconsin Dells PD has discovered a very suspicious case in the alley behind Dells Escape Rooms. Your elite team of bomb technicians have been called to the scene to investigate the item in question. Your captain has reason to believe this is a time-sensitive issue…15 minutes separates you from success or a possible body bag. Calm your nerves, steady your hands and don’t screw this up! Do you have what it takes time to survive? If not…KABOOM!
                                            </p>
                                        </div>
                                    </div>
                                </section>  
                                <NowPlaying />
                                <section id="second" class="main special">
                                    <header class="major">
                                        <h1 className="gold">Reviews</h1>
                                        <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
                                        posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
                                    </header>
                                    <p class="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
                                    <footer class="major">
                                        <ul class="actions special">
                                            <li><a href="generic.html" class="button">Learn More</a></li>
                                        </ul>
                                    </footer>
                                </section>
        
                                <section id="cta" class="main special">
                                    <header class="major">
                                        <h1 className="gold">Corporate Events</h1>
                                        <p>
                                            This won’t be your average company picnic. Dells Escape Rooms offers you and your employees an experience
                                            like never before! Book your team building event and have access to our escape rooms. You’ll also be able 
                                            to view your co-workers behaviors, build upon teamwork fundamentals, and most importantly – have FUN!.
                                        </p>
                                    </header>
                                    <footer class="major">
                                        <ul class="actions special">
                                            <li><a href="generic.html" class="button primary">Book Now</a></li>
                                            <li><a href="generic.html" class="button">Get in touch</a></li>
                                        </ul>
                                    </footer>
                                </section>
        
                        </div>
        
                        <footer id="footer">
                            <section>
                                <h2 className="gold">We are located in Downtown Wisconsin Dells!</h2>
                                <ul class="icons" style={{ float: 'none' }}>
                                    <li><h2 className="gold">Follow us on social:</h2></li>
                                    <li><a href="#" class="icon brands fa-twitter alt gold"><span class="label">Twitter</span></a></li>
                                    <li><a href="#" class="icon brands fa-facebook-f alt gold"><span class="label">Facebook</span></a></li>
                                    <li><a href="#" class="icon brands fa-instagram alt gold"><span class="label">Instagram</span></a></li>
                                </ul>
                            </section>
                            <section>
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=325%20Broadway%2C%20Wisconsin%20Dells&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                            frameborder="0"
                                            scrolling="no"
                                            marginheight="0"
                                            marginwidth="0">
                                        </iframe>
                                        <a href="https://www.embedgooglemap.net/text-tools/number-each-line/"></a>
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
                            <p class="copyright">&copy; 2020 Dells Escape Rooms</p>
                        </footer>
        
                </div>
            </body>
          </>        
        )
    }
}
