import React, { useEffect, useState} from "react"
import { Container, Row, Col} from "react-bootstrap";
import EventList from "../components/EventList";

export default function WISEEvents (props) {
    const [events, setEvents] = useState([]);

    const loadMessages = () => {
    fetch(`https://cs571api.cs.wisc.edu/rest/f25/bucket/events`, {
        headers: {
        "X-CS571-ID": "bid_2d8ae5d0494a63e6de5d93090a454a4e38fa6809b4d31eb23825e645725421c6"
        }
    })
        .then(res => res.json())
        .then(json => {
        const results = json.results;
        // transform from [id, {data}] to [data,id]
        const list = Object.entries(results).map(([uuid, eventObj]) => {
            const eventKey = Object.keys(eventObj)[0];
            return {
                id: uuid,
                ...eventObj[eventKey]
            };
        });

        setEvents(list);
        });
    };

    useEffect(loadMessages, []);

    
    console.log(events) 
    return <Container>
        <br/>
        <br/>
        <br/>
        <h1 className = "text-center my-5">WISE Events!</h1>
         <Col >
            <Row>
                {events.map(event => <Col xs={12} sm = {12} md = {6} lg = {6} xl = {4} xxl = {4} key = {event.id}>
                    <EventList {...event}/></Col>)
                }
            </Row>
        </Col>
       
    </Container>
}