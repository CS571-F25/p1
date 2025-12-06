import React from "react";
import PMApp from "../components/PMApp";
import {Container, Row, Col, Card, Image} from "react-bootstrap";
export default function AboutWISE (props) {
    return (
        <div style = {{ backgroundColor: "#93d3e6"}}>
        <Container style={{paddingTop: "120px", marginBottom:"2rem"}}>
            <h1 className="text-center mb-4">About WISE</h1>
            <Row className="mb-4">
                <Col md={4} sm={12}>
                    <Card className="p-3 h-100 shadow-sm text-start">
                        <h2>Quick Facts</h2>
                        <ul>
                            <li>Location: <a href="https://maps.app.goo.gl/dLaw3i15decz9eP8A" target="_blank" rel="noopener noreferrer">Waters Residence Hall</a></li>
                            <li>Residents: 137</li>
                            <li>Houses: 3</li>
                            <li>Room Type: Double</li>
                            <li>Gender-Inclusive <a href="https://www.housing.wisc.edu/undergraduate/experience/inclusivity/gender-inclusive-housing/" target="_blank" rel="noopener noreferred">Room Options</a></li>
                            <li>Fees: $250</li>
                            <li>Fee <a href="https://www.housing.wisc.edu/undergraduate/communities/fee-exceptions" target="_blank" rel="noopener noreferred">Exception Request</a> Form</li>
                        </ul>
                    </Card>
                </Col>
                <Col md={8} sm={12}>
                    <Card className="p-3 h-100 shadow-sm text-start">
                        {/*<h2>Women in Science & Engineering</h2>*/}
                        <p>
                            WISE is a learning community welcome to all students interested in learning about 
                            women's contributions in science, technology, engineering, and math. 
                            Residents will build a strong community with each other and staff/faculty who 
                            share their interests.
                        </p>
                        <p>
                            WISE's mission is to cultivate engagement in STEM fields for all and to expose 
                            students to the many important contributions women have and continue to make in STEM.
                        </p>
                        <p>
                            By combining social, cultural, academic, and professional development, WISE helps 
                            students thrive in their first year at UW-Madison while building a foundation for 
                            lifelong success in a diverse workforce and interconnected world.
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={4} sm={12} className="mb-3">
                    <Card className="p-3 h-100 shadow-sm text-start">
                        <h2>How to Join</h2>
                        <p>All items must be completed by your due date (May 1 for most admitted students). 
                            You can be assigned to any learning/theme community even if you did not preference it.</p>
                        <ol>
                            <li>Sign your <a href="https://go.wisc.edu/my-housing">University Residence Halls</a> contract and submit your advance payment</li>
                            <li>Rank WISE first when you submit your hall preferences</li>
                            <li>Prioritize learning communities over residence halls when you submit your hall preferences</li>
                            <li>Indicate if you want a <a href="https://www.housing.wisc.edu/undergraduate/assignments/roommates/">random or preferred roommate</a>. Create/join a roommate group if you have 
                                preferred roommates. Make sure all preferred roommates have matching preferences</li>
                        </ol>
                    </Card>
                </Col>
                <Col md={4} sm={12} className="mb-3">
                    <Card className="p-3 h-100 shadow-sm text-start">
                        <h2>Community Goals</h2>
                        <ul>
                            <li>
                                Build a strong community with other WISE students (past and present), UW-Madison 
                                faculty and staff, and the larger community of STEM scholars
                            </li>
                            <li>
                                Provide a community that inspires students to thrive in their first year at UW-Madison and beyond
                            </li>
                            <li>Build a foundation for lifelong success in STEM fields</li>
                            <li>Improve the retention and success of students in STEM fields at UW-Madison</li>
                            <li>Expose students to women's contributions in STEM fields</li>
                            <li>Expose students to different areas of study and research</li>
                            <li>Develop skills that will support students' success as a college student and future professional</li>
                        </ul>
                        {/* <h2>Community Expectations</h2>
                        <ul>
                            <li>Acknowledge that the WISE first-year seminar is an integral part of the WISE 
                                experience and agree to attend at least one semester of the seminar.
                            </li>
                            <li>Agree to attend (at minimum) one WISE community event each month. These include 
                                activities such as: study groups, campus outings, arts and crafts, and info sessions 
                                from various campus departments.
                            </li>
                            <li>Agree to meet twice per semester with your assigned WISE <a href="https://cs571-f25.github.io/p1/#/staff">Peer Mentor</a>.</li>
                            <li>Be open and respectful to the other residents of the WISE community.</li>
                        </ul> */}
                    </Card>
                </Col>
                <Col md={4} sm={12} className="mb-3">
                    <Card className="p-3 h-100 shadow-sm text-start">
                        <h2>Activities & Events</h2>
                        <p>
                            WISE integrates a regular schedule of social and enrichment activities including 
                            community building events, lab and research tours, co-curricular programming with 
                            other learning communities, and plays. Students have opportunities to network with 
                            professionals in the STEM fields while also developing relationships and discovering 
                            a variety of interests and topic areas.
                        </p>
                        <p>Examples include:</p>
                            <ol>
                                <li>Cultural events and workshops</li>
                                <li>Career and professional development</li>
                                <li>Performing arts events</li>
                                <li>Behind the scenes tours</li>
                                <li>Self-care and destress workshops</li>
                            </ol>
                        <a href="https://cs571-f25.github.io/p1/#/events"> See more past and upcoming events </a>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={6} sm={12}>
                    <Card className="p-3 h-100 shadow-sm text-start">
                        <h2>WISE Seminar</h2>
                        <p>Interdisciplinary Courses 175 | 1 credit</p>
                        <p>Typically offered Tuesday evenings in Upper Carson Gulley</p>
                        <p>
                            The WISE seminar helps residents network to build their social and professional community by 
                            developing connections with other WISE residents, as well as to professors and corporate 
                            professionals from all STEM fields. The Seminar often includes dinner, although this varies 
                            depending on the program. Students may enjoy a guest speaker, a round table discussion with 
                            visiting professors or corporate STEM professionals, and/or a discussion on topics relevant 
                            to wome's contributions in STEM. Each semester students take field trips that might include 
                            a corporate visit, a lab tour, movie, or a performance. The seminar is only open to WISE 
                            students and fulfills the <a href="https://cals.wisc.edu/">College of Agricultural & Life 
                            Sciences</a> first-year seminar requirement.
                        </p>
                    </Card>
                </Col>
                <Col md={6} sm={12}>
                    <Image src="/p1/community_life/seminar_1.png" alt="residents at the WISE Seminar" 
                    fluid style={{borderRadius:"8px", width:"100%", height:"500px", objectFit:"cover", objectPosition:"bottom"}}/>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={6} sm={12} className="mb-4">
                    <Image src="/p1/community_life/peer_mentors.png" alt="WISE Peer Mentors group photo" 
                    fluid style={{borderRadius:"8px", width:"100%", height:"500px", objectFit:"cover", objectPosition:"bottom"}}/>
                </Col>
                <Col md={6} sm={12}>
                <Card className="mb-4 text-start">
                    <h2 style={{marginBottom:"30px"}}> Apply to be a WISE Peer Mentor!</h2>
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
                </Card>
                </Col>
            </Row>
            <Row className="mb-4">
                <Card className="mb-4">
                    <PMApp/>
                </Card>
            </Row>
        </Container>
        </div>
    )
}