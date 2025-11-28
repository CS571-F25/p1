import React from "react"; 
import photos from "../assets/community.json";
import PhotoGallery from "../components/PhotoGallery";
import {Row, Col, Container} from "react-bootstrap";

export default function CommunityLife () {
    const connect = photos.filter(p => p.category==="connect");
    const explore = photos.filter(p => p.category==="explore");
    const grow = photos.filter(p => p.category==="staff")
    return (
        <Container style={{paddingTop: "120px", marginBottom:"2rem"}}>
            <h1 className="text-center mb-4">Community Life</h1>
            <p>Being a part of WISE community gives you the chance to...</p>

            <Row className="gy-4">
                <Col md={4} sm={12}>
                    <h3 className="text-center mb-2">...Connect</h3>
                    <PhotoGallery photos={connect} fixedHeight={400}/>
                </Col>
                <Col md={4} sm={12}>
                    <h3 className="text-center mb-2">...Explore</h3>
                    <PhotoGallery photos={explore} fixedHeight={400}/>
                </Col>
                <Col md={4} sm={12}>
                    <h3 className="text-center mb-2">...Grow</h3>
                    <PhotoGallery photos={grow} fixedHeight={400}/>
                </Col>
            </Row>
    
        </Container>
    );
}