import React from "react";
import { Card } from "react-bootstrap";
import images from "../assets/images/wise_staff/export_staff.js"

export default function StaffCard(props) {
  return (
    <Card aria-label={`WISE Staff: ${props.name}`}
      className = "shadow-sm text-center border-3 h-100"
      style = {{ backgroundColor: "#fcf2eb", 
        borderRadius: "15px", maxWidth: "350px", width: "100%",
        display: "flex", flexDirection: "column", justifyContent: "space-between"}}>

        {/* Staff Picture */}
      <Card.Img
        src = {images[props.image]}
        alt = {props.name}
        style = {{
          height: "200px", objectFit: "cover"}}/>

      <Card.Body className = "d-flex flex-column justify-content-between" style={{ color: "#1a1a1a" }}>
        <div>
            {/* Staff Name */}
          <Card.Title as = "h2" style = {{ fontWeight: "bold", textAlign: "center", display: "flex", alignItems: "center", 
            flexDirection: "column", wordBreak: "keep-all", overflowWrap: "break-word"}}>
                {props.name}
          </Card.Title>

          {/* Staff Title */}
          <Card.Subtitle as = "h3" className = "mb-2 text-muted">{props.title}</Card.Subtitle>
        </div>

        <Card.Text as = "h3" className = "mt-2">
            {/* Staff Email */}
          <a href = {`mailto:${props.email}`}
           aria-label={`Email: ${props.email}`}
           style = {{ textDecoration: "none", color: "#0d6efd", textAlign: "center", display: "flex", 
            alignItems: "center", flexDirection: "column", wordBreak: "keep-all"}}>
            {props.email.split("@")[0]}
            <br/> @{props.email.split("@")[1]}
          </a>
        </Card.Text>

      </Card.Body>

    </Card>
  );
}