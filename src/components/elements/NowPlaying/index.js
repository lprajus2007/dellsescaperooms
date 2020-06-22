import React from "react"
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "./styles.scss"

import Carousel from "../../helpers/Carousel";

const BombSquad = () => (
    <div id="bombsquad" className="game-section">
        <div className="left-div">
            <div className="poster">
                <Carousel images={["bombsquad", "bsquad1", "bsquad2"]} showThumbs={false} width="450px" />
            </div>
        </div>
        <div className="right-div">
            <h1 className="center">Bomb Squad</h1>
            <p>
                Wisconsin Dells PD has discovered a very suspicious case in the alley behind Dells
                Escape Rooms. Your elite team of bomb technicians have been called to the scene
                to investigate the item in question. Your captain has reason to believe this is a
                time-sensitive issue… 15 minutes separates you from success or a possible body
                bag. Calm your nerves, steady your hands and don’t screw this up! Do you have
                what it takes time to survive? If not… KABOOM!
            </p>
            <ul className="actions special">
                <li><a href="https://dellsescaperooms.resova.us" target="_blank" rel="noopener noreferrer" className="button primary">Book Now</a></li>
            </ul>
        </div>
    </div>
);

const HazelWood = () => (
    <div id="hazelwood" className="game-section">
        <div className="left-div">
            <h1 className="center">The Heist</h1>
            <p>
                You’ve be perfecting your skills and now it’s time for the big payoff… Hazelwood
                Bank. Rumor has it the vault houses a priceless item locked inside. Sneak into the
                bank, infiltrate the vault, crack the safe, and slip out the back to change your life
                forever. Get caught and you’re looking at 15 years in an 8x8 concrete cell. No
                room for error on this one, sticky hands!
            </p>
            <ul className="actions special">
                <li><a href="https://dellsescaperooms.resova.us" target="_blank" rel="noopener noreferrer" className="button primary">Book Now</a></li>
            </ul>
        </div>
        <div className="right-div">
            <div className="poster">
                <Carousel interval={3600} images={["hazelwood", "th1", "th2"]} showThumbs={false} width="450px" />
            </div>
        </div>
    </div>
);

const MissionControl = () => (
    <div id="missioncontrol" className="game-section">
        <div className="left-div">
            <div className="poster">
                <Carousel interval={4500} images={["missioncontrol", "mc1", "mc2", "mc3"]} showThumbs={false} width="450px" />
            </div>
        </div>
        <div className="right-div">
            <h1 className="center">Mission Control</h1>
            <p>
                Communications are down. The oxygen supply has been compromised. You need
                to intercept the Captain’s badly damaged spacecraft in orbit, but time is running
                out. Fix the oxygen or face your demise in space. Repair communications or
                Captain’s team will be lost in space, left to die. We are in a dire situation here,
                astronaut! Save the day or say your prayers… do you have what it takes?
            </p>
            <ul className="actions special">
                <li><a href="https://dellsescaperooms.resova.us" target="_blank" rel="noopener noreferrer" className="button primary">Book Now</a></li>
            </ul>
        </div>
    </div>
);

const Disavowed = () => (
    <div id="disavowed" className="game-section">
        <div className="right-div">
            <h1 className="center">Disavowed</h1>
            <p>
                Tensions between the United States and the USSR are at a boiling point.
                Movement has been seen in non-militarized zones causing the Soviets to issue a capture or execute order on all Americans in the country.
                Deep behind enemy lines, your cell of CIA spies head to the extraction point. Things don’t go as planned and you wake-up in a holding cell with your unit.
                What happens next depends on your abilities to withstand torture or defy death. Due to the sensitivity of this matter there will be no rescue attempts made.
                You are on your own… Godspeed!
                <br /><br />
                <i>
                    **Due to graphic content, we strongly recommend players be 12 years or older**
                </i>
            </p>
            <ul className="actions special">
                <li><a href="https://dellsescaperooms.resova.us" target="_blank" rel="noopener noreferrer" className="button primary">Book Now</a></li>
            </ul>
        </div>
        <div className="left-div">
            <div className="poster">
                <Carousel interval={4000} images={["disavowed", "disavowed1", "disavowed2"]} showThumbs={false} width="450px" />
            </div>
        </div>
    </div>
);

const Wellington = () => (
    <div id="wellingtonmanor" className="game-section">
        <div className="left-div">
            <div className="poster">
                <Carousel interval={5000} images={["wellingtonmanor", "w1", "w2"]} showThumbs={false} width="450px" />
            </div>
        </div>
        <div className="right-div">
            <h2 className="center">Wellington Manor</h2>
            <p>
                You have decided to explore the urban legend surrounding the mysterious murder of beloved Lord Wellington.
                Your iron nerves quickly desert you as the lights flicker and the front door loudly slams and locks by itself.
                Beware of traps, nothing is as it seems at face value in these halls.
                Succeed and help Lord Wellington expose the identity of his true murderer before you too become a permanent resident of Wellington Manor!
                <br /><br />
                <i>
                    **Recommended minimum age of 10. Players under 10 are allowed with a private room – please call for details.
                    Players under 16 must have a parent/guardian inside the room to play (w/ paid ticket)**
                </i>
            </p>
            <ul className="actions special">
                <li><a href="https://dellsescaperooms.resova.us" target="_blank" rel="noopener noreferrer" className="button primary">Book Now</a></li>
            </ul>
        </div>
    </div>
);

export default () => (
    <>
        <section id="first" className="main special">
            <header className="major">
                <h1 className="gold">Now Playing</h1>
            </header>
            <BombSquad />
            <HazelWood />
            <MissionControl />
            <Disavowed />
            <Wellington />
        </section>
    </>
)