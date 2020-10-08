import React from 'react';
import { Carousel } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { map } from 'lodash';

import 'bootstrap/dist/css/bootstrap.min.css';

import bombsquad from "../../assets/images/bombsquad.jpeg"
import bsquad1 from "../../assets/images/bsquad1.jpeg"
import bsquad2 from "../../assets/images/bsquad2.jpeg"
import disavowed from "../../assets/images/disavowed.jpeg"
import disavowed1 from "../../assets/images/disavowed1.jpeg"
import disavowed2 from "../../assets/images/disavowed2.jpeg"
import hazelwood from "../../assets/images/hazelwood.jpeg"
import hotseat from "../../assets/images/hotseat.jpeg"
import m1 from "../../assets/images/m1.jpeg"
import m2 from "../../assets/images/m2.jpeg"
import m3 from "../../assets/images/m3.jpeg"
import m4 from "../../assets/images/m4.jpeg"
import m5 from "../../assets/images/m5.jpeg"
import m6 from "../../assets/images/m6.jpeg"
import missioncontrol from "../../assets/images/missioncontrol.jpeg"
import mc1 from "../../assets/images/mc1.jpeg"
import mc2 from "../../assets/images/mc2.jpeg"
import mc3 from "../../assets/images/mc3.jpeg"
import th1 from "../../assets/images/th1.jpeg"
import th2 from "../../assets/images/th2.jpeg"
import w1 from "../../assets/images/w1.jpeg"
import w2 from "../../assets/images/w2.jpeg"
import wellingtonmanor from "../../assets/images/wellingtonmanor.jpeg"

const importedImages = {
    bombsquad,
    bsquad1,
    bsquad2,
    disavowed,
    disavowed1,
    disavowed2,
    hazelwood,
    hotseat,
    mc1,
    mc2,
    mc3,
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    missioncontrol,
    th1,
    th2,
    w1,
    w2,
    wellingtonmanor
}

export default (props) => (
    <Carousel controls={false} indicators={false} interval={props.interval || 3500} style={{ margin: '20px auto' }}>
        {
            map(props.images, (image, i) => (
                <Carousel.Item key={`carousel-item-${i}`}>
                    <AnchorLink href={`#${image}`}>
                        <img
                            alt="room"
                            className="d-block w-100"
                            src={importedImages[image]}
                        />
                    </AnchorLink>
                </Carousel.Item>
            ))
        }
    </Carousel>
);
