import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import { InstagramEmbed } from 'react-social-media-embed';

export default function StayConnected() {
    /*
    useEffect(() => {
        fetch('https://cs571api.cs.wisc.edu/rest/f25/bucket/inquiries', {
            method: 'GET',
            headers: {
                'X-CS571-ID': "......",
            },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        });
    }, []);

    const submitQ = (e) => {
        e.preventDefault();
        
        const form = new FormData(e.target);
        const email = form.get("email");
        const question = form.get("question");
        
        if (!email || !question) {
            alert("Please fill out both sections!");
            return;
        }
    
        fetch("https://cs571api.cs.wisc.edu/rest/f25/bucket/inquiries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CS571-ID": "......."
            },
            body: JSON.stringify({ email, question })
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            alert("Inquiry submitted successfully!");
            e.target.reset();
        })
        .catch((err) => {
            console.error(err);
            alert("There was an issue with submission, try again!");
        });
    };
    */

  return (
    <div style = {{ backgroundColor: "#93d3e6"}}>
    <Container className = "py-5">
      <h1 className = "text-center my-5">Stay Connected With Us</h1>

        <Row className = "g-4">
          {/* Social Media Section*/}
          <Col xs = {12} md = {6} lg = {4}>
            <Card className = "text-center shadow-sm h-100">
              <Card.Body>
                <Card.Title className = "mb-3">Connect</Card.Title>
                <div className = "d-flex justify-content-center align-items-center">
                  <a href = "https://instagram.com" target = "_blank" rel = "noopener noreferrer">
                    <FaInstagram className = "me-2" size = {30} />
                  </a>
                  <h6 className = "m-0">Follow Us @wise_uw</h6>
                </div>

                <div className = "d-flex justify-content-center align-items-center">
                    <div style = {{ transform: "scale(0.85)", width: "360px"}}>
                        <InstagramEmbed
                            url = "https://www.instagram.com/p/DNgPDKitjpD/"
                            width = "100%"/>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Inquiries */}
          <Col xs = {12} md = {6} lg = {4}>
            <Card className = "text-center shadow-sm h-100">
              <Card.Body>
                <Card.Title className = "mb-3">Submit A Question</Card.Title>
                <p>Want to reach out? Submit an inquiry here and we'll get back to you!</p>
                <form /* onSubmit={submitQ}*/ >
                  <input
                    name = "email"
                    type = "email"
                    placeholder = "enter your email :)"
                    className = "form-control mb-3"
                    style = {{ borderRadius: "10px" }}
                  />
                  <input
                    name = "question"
                    type = "text"
                    placeholder = "ask your question..."
                    className = "form-control mb-3"
                    style = {{ borderRadius: "10px" }}
                  />
                  <Button variant = "primary" type = "submit">
                    Submit
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Information Section */}
          <Col xs = {12} md = {6} lg = {4}>
            <Card className = "text-center shadow-sm h-100">
              <Card.Body>
                <Card.Title className = "mb-3">Contact</Card.Title>
                <h6><strong>WISE Seminar - Freshmen</strong></h6>
                <p>
                  <FaEnvelope className = "me-2" size={25}/>
                  <a
                    href="mailto:info@housing.wisc.edu"
                    style={{ textDecoration: "none", color: "#0d6efd" }}>
                    info@housing.wisc.edu
                  </a>
                </p>
                <div style = {{marginTop: 20}}><br/>
                    <h6><strong>OHM - Out Of House Members</strong></h6>
                    <p>
                        <FaEnvelope className = "me-2" size={20}/>
                        <a  href = "mailto:ohm.uwmadison@gmail.com"
                        style = {{ textDecoration: "none", color: "#0d6efd" }}>
                            ohm.uwmadison@gmail.com
                        </a>
                    </p>
                    <p>
                        <a href = "https://win.wisc.edu/organization/ohm_uwmadison"
                        style = {{ textDecoration: "none", color: "#0d6efd"}}>
                            Wisconsin Involvment Network Page
                        </a>
                    </p>
                    <br/>
                    <p>       WISE Waters Hall 
                        <br/> 1200 Observatory Drive 
                        <br/> Madison, WI 53706 US 
                        <br/> University of Wisconsin–Madison
                    </p>
                    <Button
                    variant = "primary"
                    href = "https://maps.google.com"
                    target = "_blank"
                    >
                    View on Map
                    </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}