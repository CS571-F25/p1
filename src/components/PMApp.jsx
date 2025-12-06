import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

export default function PMApp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    major: "",
    year: "",
    experience: "",
    why: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
  e.preventDefault();

  try {
    const response = await fetch("https://cs571api.cs.wisc.edu/rest/f25/bucket/pmapps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    setSubmitted(true);   // show success message
  } catch (err) {
    console.error("Error submitting form:", err);
  }
}

  return (
    <Card className="p-4 shadow-sm">
      <h3 className="mb-3">Peer Mentor Application</h3>

      {submitted && (
        <Alert variant="success">
          Thank you for applying! We will contact you soon.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email (wisc.edu preferred)</Form.Label>
          <Form.Control
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Major</Form.Label>
          <Form.Control
            name="major"
            type="text"
            required
            value={formData.major}
            onChange={handleChange}
            placeholder="Ex: Computer Science"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Year in School</Form.Label>
          <Form.Select
            name="year"
            required
            value={formData.year}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option>Freshman</option>
            <option>Sophomore</option>
            <option>Junior</option>
            <option>Senior</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Past Leadership or Mentoring Experience</Form.Label>
          <Form.Control
            as="textarea"
            name="experience"
            rows={3}
            value={formData.experience}
            onChange={handleChange}
            placeholder="Optional: clubs, tutoring, mentoring, etc."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Why do you want to be a Peer Mentor?</Form.Label>
          <Form.Control
            as="textarea"
            name="why"
            rows={4}
            required
            value={formData.why}
            onChange={handleChange}
            placeholder="Tell us about your motivation!"
          />
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          className="w-100 mt-3"
        >
          Submit Application
        </Button>
      </Form>
    </Card>
  );
}
