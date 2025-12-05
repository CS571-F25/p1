import React, { useEffect, useState} from "react"
import { Container, Row, Col, Button, Dropdown, DropdownButton} from "react-bootstrap";
import events from "../assets/events.json"
import EventList from "../components/EventList";
import EventDataContext from "../contexts/EventDataContext";

export default function WISEEvents (props) {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [sortOrder, setSortOrder] = useState("desc");

    const sortedEvents = [...events].sort((a, b) => {
        const d1 = new Date(a.date);
        const d2 = new Date(b.date);
    
        return sortOrder === "asc" ? d1 - d2 : d2 - d1;
    });
    
    return <Container style={{paddingTop: "25px", marginBottom:"2rem"}}>
        <h1 className = "text-center my-5">WISE Events!</h1>
        <DropdownButton id="dropdown-basic-button" title="Sort Date By">
            <Dropdown.Item onClick={() => setSortOrder("asc")}>Oldest to Newest</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOrder("desc")}>Newest to Oldest</Dropdown.Item>
        </DropdownButton>
        <EventDataContext.Provider value = {{events, selectedEvent, setSelectedEvent}}>
        <Col >
            <Row>
                {sortedEvents.map(event => <Col xs={12} sm = {12} md = {6} lg = {6} xl = {4} xxl = {4} key = {event.id}>
                    <EventList {...event} />
                    </Col>)
                }
            </Row>
        </Col>
       </EventDataContext.Provider>
    </Container>
}