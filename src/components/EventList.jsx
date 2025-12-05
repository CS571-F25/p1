import React, { useContext } from "react";
import { Card, Button, Modal} from "react-bootstrap";
import { useState} from "react"
import EventModal from "./EventModal";
import EventDataContext from "../contexts/EventDataContext";

export default function EventList (props) {
    // console.log(props)
    const [modalShow, setModalShow] = useState(false);
    const { setSelectedEvent } = useContext(EventDataContext);
    
    return (
    <Card style={{margin: "0.5rem", padding: "0.5rem", backgroundColor:  "#fcf2eb",  borderRadius: "15px", maxWidth: "350px", width: "100%",
        display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        <h1>{props.event_name}</h1>
        <p>{new Date(props.date).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric'})}</p>

        <Button variant="primary" onClick={() => {
            setModalShow(true)
            setSelectedEvent(props)}}>
            More Details
        </Button>

        <EventModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </Card>
    )
}
