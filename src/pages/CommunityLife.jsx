import React from "react"; 
import photos from "../assets/community.json";
import PhotoGallery from "../components/PhotoGallery";
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
                    <Image src="/p1/community_life/wise_den_1.png" alt="group of residents on a couch in the WISE Den"
                        style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
                </Col>
                <Col md={4} sm={12} className="mb-4">
                    <Image src="/p1/community_life/friendsgiving_3.png" alt="annual friendsgiving dinner in the WISE Den"
                    style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
                </Col>
                <Col md={4} sm={12} className="mb-4">
                    <Image src="/p1/community_life/crafts_2.png" alt="various crafting activities in the WISE Den"
                        style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
                </Col>
            </Row>
            <Row className="gy-4">
                <Col md={4} sm={12} className="mb-4">
                    <Image src="/p1/community_life/tote_bag_1.png" alt="painting pumpkins in the WISE Den"
                        style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
                </Col>
                <Col md={4} sm={12} className="mb-4">
                    <Image src="/p1/community_life/friendsgiving_2.png" alt="student staff at friendsgiving event in the WISE Den"
                    style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
                </Col>
                <Col md={4} sm={12} className="mb-4">
                    <Image src="/p1/community_life/crafts_1.png" alt="residents make friendship bracelets in the WISE Den"
                        style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
                </Col>
            </Row>
            <Row classname="gy-4">
                <h2 style={{marginBottom:"30px"}}> No Longer in WISE?</h2>
                <Col md={6} sm={12} className="mb-4 text-start">
                    <h3>Out of House Members (OHM)</h3>
                    <p>
                        WISE Out of House Members (OHM) is a student organization open to all students on campus 
                        but designed for the alumni of the Women in Science and Engineering Learning Community. 
                        WISE Out of House Members connects the Women in Science and Engineering Learning Community 
                        Alum to better each other and our community. We endeavor to link women in the STEM fields 
                        with the Madison community through outreach and social events while striving for success 
                        and equality. We have primarily career and social events designed for networking and socializing.
                    </p>
                    <ul>
                        <li><a href="https://forms.gle/KYPCcTeipiQ4MRuu9">OHM Membership Form</a></li>
                        <li><a href="https://win.wisc.edu/organization/ohm_uwmadison">OHM WIN Page</a></li>
                        <li><a href="https://www.instagram.com/ohm_uwmadison/">OHM Instagram</a></li>
                    </ul>
                </Col>
                <Col md={6} sm={12} className="mb-4">
                {/* /p1/public/ohm_1.png
                    /p1/public/ohm_2.png */}
                    <Image src="/p1/public/ohm_1.png" alt="WISE Alumni - OHM"
                        style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
                </Col>
            </Row>
        </Container>
    );
}