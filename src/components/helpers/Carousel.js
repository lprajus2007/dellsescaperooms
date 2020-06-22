import React from 'react';
import { Carousel } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { map } from 'lodash';

import 'bootstrap/dist/css/bootstrap.min.css';

import bombsquad from "../../assets/images/bombsquad.png"
import bsquad1 from "../../assets/images/bsquad1.png"
import bsquad2 from "../../assets/images/bsquad2.png"
import disavowed from "../../assets/images/disavowed.png"
import disavowed1 from "../../assets/images/disavowed1.png"
import disavowed2 from "../../assets/images/disavowed2.png"
import hazelwood from "../../assets/images/hazelwood.png"
import hotseat from "../../assets/images/hotseat.png"
import m1 from "../../assets/images/m1.png"
import m2 from "../../assets/images/m2.png"
import m3 from "../../assets/images/m3.png"
import m4 from "../../assets/images/m4.png"
import m5 from "../../assets/images/m5.png"
import m6 from "../../assets/images/m6.png"
import missioncontrol from "../../assets/images/missioncontrol.png"
import mc1 from "../../assets/images/mc1.png"
import mc2 from "../../assets/images/mc2.png"
import mc3 from "../../assets/images/mc3.png"
import th1 from "../../assets/images/th1.png"
import th2 from "../../assets/images/th2.png"
import w1 from "../../assets/images/w1.png"
import w2 from "../../assets/images/w2.png"
import wellingtonmanor from "../../assets/images/wellingtonmanor.png"

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
                            className="d-block w-100"
                            src={importedImages[image]}
                        />
                    </AnchorLink>
                </Carousel.Item>
            ))
        }
    </Carousel>
);
