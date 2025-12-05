import React from "react";
import { Modal, Button} from "react-bootstrap";
import { useContext} from "react"
import EventDataContext from "../contexts/EventDataContext";

export default function EventModal(props) {
  // console.log(props)
  const { selectedEvent } = useContext(EventDataContext);
  if (!selectedEvent) return null;
  // cons
  // console.log(selectedEvent.event_name)
  const description = `WISE Poster for ${selectedEvent.event_name}`
  return (
    
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {selectedEvent.event_name}
        </Modal.Title>
    </Modal.Header>
    <Modal.Body >
      <img src={selectedEvent.image} className="img-fluid d-block mx-auto" alt={description} height={275} width={275} /> 
      <p>Join WISE on {selectedEvent.date} at {selectedEvent.start_time} for {selectedEvent.event_name}!</p>
      <p>{selectedEvent.event_desc}</p>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
    </Modal>
  );

}
