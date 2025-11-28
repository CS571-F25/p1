import React from "react";
import { Card} from "react-bootstrap";

export default function EventList (props) {
    // console.log(props)
    return <Card style={{margin: "0.5rem", padding: "0.5rem", backgroundColor:  "#fcf2eb",  borderRadius: "15px", maxWidth: "350px", width: "100%",
        display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        <h2>{props.event_name}</h2>
        <p>{props.event_desc}</p>
        <p>{new Date(props.date).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric'})}</p>
        <p>Starting at {props.start_time}</p>
    </Card>
}
