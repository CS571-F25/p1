import React, { useState, useEffect } from "react";
import {Row, Col, Container} from "react-bootstrap";
import StaffCard from "../components/StaffCard";
import staff from "../assets/staff.json"

export default function FacultyStaff (props) {
    return <div style = {{ backgroundColor: "#beebf7"}}>
        <Container className = "py-5">
        <h1 className = "text-center my-5">Meet the WISE Staff!</h1>
            <Row className = "g-4 justify-content-center" role = "list" aria-label = "WISE staff list">
            {staff.map((person, index) => (
                <Col key = {index} role = "list_item"
                xs = {12} sm = {6} md = {4} lg = {3}
                className = "d-flex justify-content-center">
                    <StaffCard {...person} />
                </Col>
            ))}
            </Row>
        </Container>
    </div>
}