import wise_logo from "../assets/images/wise-logo-color.png"
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Home (props) {
    return <Container fluid={true}>
        <br/>
        <Row>
            <Col xs={12} lg={12} xl={12} xxl={12} style={{alignText: 'center' }}>
            <br/>
            <br/>
                <h1>Welcome to WISE Learning Community!</h1>
                <h2>Connecting First Year Women in Science & Engineering!</h2>
            </Col>
        </Row>
        <img src = {wise_logo} alt = "wise logo"/>
        <br/>
        <p>The Women in Science & Engineering (WISE) learning community at the University of Wisconsin-Madison is a welcoming environment 
            for all students interested in learning about women's contributions in science, technology,
            engineering, and math (STEM) fields. Residents will build a strong community with each other 
            and staff/faculty who share their interests. 
        </p>
    </Container>

}