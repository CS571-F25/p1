import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

export default function PMApp() {
    const [formData, setFormData] = useState({
        name: "",
        pronouns: "",
        email: "",
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
                    "Content-Type": "application/json",
                    "X-CS571-ID":"bid_2d8ae5d0494a63e6de5d93090a454a4e38fa6809b4d31eb23825e645725421c6"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            setSubmitted(true); 
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
            <Form.Label>Preferred Pronouns</Form.Label>
            <Form.Control
                name="pronouns"
                type="text"
                required
                value={formData.pronouns}
                onChange={handleChange}
                placeholder="Ex: she/her/hers"
            />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Wisc Email</Form.Label>
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
            <Form.Label>Intended Major(s) & Certificate(s)</Form.Label>
            <Form.Control
                name="major"
                type="text"
                required
                value={formData.major}
                onChange={handleChange}
                placeholder="Ex: Computer Science, Biology, Electrical Engineering"
            />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Please describe your past leadership or mentoring experience. How will it help you succeed in the Peer Mentor role?</Form.Label>
            <Form.Control
                as="textarea"
                name="experience"
                rows={3}
                value={formData.experience}
                onChange={handleChange}
                placeholder="Ex: clubs, tutoring, mentoring, etc."
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

            <Button type="submit"
                variant="primary"
                className="w-100 mt-3"
            >
                Submit Application
            </Button>
        </Form>
        </Card>
    );
}
