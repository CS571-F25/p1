import wise_logo from '../assets/images/wise-logo-color.png';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Home (props) {
    return <Container fluid={true}>
        <Row>
            <Col xs={12} lg={6} xl={12} xxl={12} style={{alignText: 'center' }}>
            <br/>
                <h1>Welcome to WISE Learning Community!</h1>
            </Col>
        </Row>
        <img src = {wise_logo} alt = "wise logo"/>
        <p>The Women in Science & Engineering (WISE) learning community is a welcoming environment 
            for all students interested in learning about women's contributions in science, technology,
            engineering, and math (STEM) fields. Residents will build a strong community with each other 
            and staff/faculty who share their interests. 
        </p>
    </Container>

}