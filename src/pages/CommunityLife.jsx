import React from "react"; 
import photos from "../assets/community.json";
import PhotoGallery from "../components/PhotoGallery";
import PMApp from "../components/PMApp";
import {Row, Col, Container, Image} from "react-bootstrap";

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
                    <h2 className="text-center mb-2">...Connect</h2>
                    <PhotoGallery photos={connect} fixedHeight={400}/>
                </Col>
                <Col md={4} sm={12}>
                    <h2 className="text-center mb-2">...Explore</h2>
                    <PhotoGallery photos={explore} fixedHeight={400}/>
                </Col>
                <Col md={4} sm={12}>
                    <h2 className="text-center mb-2">...Grow</h2>
                    <PhotoGallery photos={grow} fixedHeight={400}/>
                </Col>
            </Row>
            <Row className="gy-4">
                <h2 style={{paddingTop:"100px"}}>WISE Den</h2>
                <p>Enjoy a cozy space dedicated to members of WISE available for studying, movie nights, get-togethers, and more!</p>
                <Col md={4} sm={12} className="mb-4">
                    <Image src="/p1/community_life/wise_den_1.png" alt="WISE Den"
                        style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
                </Col>
                <Col md={4} sm={12} className="mb-4">
                    <Image src="/p1/community_life/friendsgiving_3.png" alt="WISE Den"
                    style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
                </Col>
                <Col md={4} sm={12} className="mb-4">
                    <Image src="/p1/community_life/crafts_2.png" alt="WISE Den"
                        style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
                </Col>
            </Row>
            <Row className="gy-4">
                <Col md={4} sm={12} className="mb-4">
                    <Image src="/p1/community_life/tote_bag_1.png" alt="WISE Den"
                        style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
                </Col>
                <Col md={4} sm={12} className="mb-4">
                    <Image src="/p1/community_life/friendsgiving_2.png" alt="WISE Den"
                    style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
                </Col>
                <Col md={4} sm={12} className="mb-4">
                    <Image src="/p1/community_life/crafts_1.png" alt="WISE Den"
                        style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
                </Col>
            </Row>
            <Row classname="gy-4">
                <h2 style={{marginBottom:"30px"}}> Apply to be a WISE Peer Mentor!</h2>
                <Col md={6} sm={12} className="mb-4 text-start">
                    <p>
                        Peer Mentors support WISE by building meaningful mentoring relationships with residents and 
                        supporting the programmatic and outreach goals of the WISE residential learning community. 
                        Mentoring will take place through formal and informal interactions that include providing guidance, 
                        information, academic and career development resources and support.
                    </p>
                        <ul>
                            <li>Must have lived in the WISE Residential Learning Community.</li>
                            <li>By start of employment must have completed 2 semesters of college post high school (summer school does not count as a semester). </li>
                            <li>During pre-employment and employment, a student staff member must abide by the University Residence Halls Contract, the Student Housing Handbook and the University of Wisconsin System academic and non-academic policies and expectations. </li>
                            <li>Must be able to attend all training dates. </li>
                            <li>All applicants must be currently enrolled and maintain enrollment through the employment period.</li>
                        </ul>
                </Col>
                <Col md={6} sm={12} className="mb-4">
                    
                    <PMApp/>
                </Col>
            </Row>
        </Container>
    );
}