import React from 'react';
import { Accordion, Card }  from 'react-bootstrap';

const FAQ = () => {
    return (
        <Accordion defaultActiveKey="0">
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                <span style={{ fontWeight: 'bold' }}>What is an escape room?</span>
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <Card.Body>An escape room is a live-action game that requires teamwork and critical thinking to help you decipher clues and complete puzzles so you can complete your mission!</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="1">
                <span style={{ fontWeight: 'bold' }}>Am I actually locked in the escape room?</span>
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
            <Card.Body>No, none of our escape room doors are actually locked, and you are welcome to leave at any time.</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="2">
                <span style={{ fontWeight: 'bold' }}>Can I use my cell phone in the escape room? Can I take pictures in the rooms?</span>
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
            <Card.Body>We do not force you to leave your phone outside the room, but you will not need it to solve any clues. We do not allow any pictures or video taken inside our rooms; we don’t want to spoil the experience for the next players!</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="3">
                <span style={{ fontWeight: 'bold' }}>Can we get a refund?</span>
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
            <Card.Body>We do not offer refunds. You may reschedule your game within a 24-hour time period. Please make sure to check your calendar before making a reservation to avoid any issues. All sales are final.</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="4">
                <span style={{ fontWeight: 'bold' }}>Will we have the room to ourselves?</span>
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
            <Card.Body>You are not guaranteed a private game unless you reserve the entire room. You do not need to have the maximum number of participants, but you do need to pay for the full room. No worries, the more brains you have the better your chances of completing your mission, sometimes sharing a room works in your favor! <i style={{ color: 'red' }}>***Due to COVID-19, all rooms will be private until further notice.</i></Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="5">
                <span style={{ fontWeight: 'bold' }}>What happens if we are late?</span>
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
            <Card.Body>Please arrive 15 minutes before the start of your game. If you arrive after the start time and are the only ones booked in the room you will be able to play the remainder of the time booked. If there are other players, you will not be able to join once they have started.</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="6">
                <span style={{ fontWeight: 'bold' }}>What happens if we cannot figure out the puzzles?</span>
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
            <Card.Body>There will be a game master dedicated to making sure you have a fun experience. We offer a set of clues when needed to help if you get stuck.</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="7">
                <span style={{ fontWeight: 'bold' }}>Is the game physical? What should we wear?</span>
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
            <Card.Body>Our games are challenges of the mind, and do not require physical activity. You do not have to wear any specific clothing, anything that is comfortable for you is fine.</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="8">
                <span style={{ fontWeight: 'bold' }}>Are your games ADA compliant?</span>
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
            <Card.Body>Yes, all of our escape rooms are ADA compliant with the exception of certain portions of ‘Diasvowed’. <i>**Please contact us for questions regarding ‘Disavowed’.</i></Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="9">
                <span style={{ fontWeight: 'bold' }}>Can we bring food or drink into the game?</span>
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="9">
            <Card.Body>Unfortunately, no food or drinks are allowed in the escape rooms in an attempt to keep all rooms cleanly for each customer.</Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
    );
};

export default FAQ;