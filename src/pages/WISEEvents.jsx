import React, { useEffect, useState} from "react"
import { Container, Row, Col, Button} from "react-bootstrap";
import events from "../assets/events.json"
import EventList from "../components/EventList";
import EventDataContext from "../contexts/EventDataContext";

export default function WISEEvents (props) {
    const [selectedEvent, setSelectedEvent] = useState(null);
    // console.log(events) 
    return <Container>
        <br/>
        <br/>
        <br/>
        <h1 className = "text-center my-5">WISE Events!</h1>
        <EventDataContext.Provider value = {{events, selectedEvent, setSelectedEvent}}>
        <Col >
            <Row>
                {events.map(event => <Col xs={12} sm = {12} md = {6} lg = {6} xl = {4} xxl = {4} key = {event.id}>
                    <EventList {...event} />
                    </Col>)
                }
            </Row>
        </Col>
       </EventDataContext.Provider>
    </Container>
}