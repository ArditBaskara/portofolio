import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Page } from "../../components/Page";
import { white, blue, typeScale } from "../../utils";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  min-height: 70vh;
  margin-top: 2rem;
`;

const Heading = styled.h2`
  color: ${blue[60]};
  text-align: center;
  font-size: ${typeScale.header1};
  font-weight: bold;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 500px;
  background: linear-gradient(145deg, ${blue[60]}, ${blue[40]});
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 15px rgba(0, 71, 236, 0.2), inset 0 0 10px rgba(202, 202, 202, 1);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background: ${white[10]};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:focus {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  resize: none;
  padding: 0.75rem 1rem;
  color: ${white[10]};
  font-size: ${typeScale.paragraph};
  background-color: #eef2;
  width: ${(props) => (props.full ? "100%" : "auto")};
  height: ${(props) =>
    props.lines ? `calc(${props.lines}*${typeScale.paragraph})` : "auto"};
  outline: none;
  border: 3px solid black;
  box-shadow: 8px 8px 0 black;
  border-radius: 0.5rem;
  transition: all 0.1s ease;
  &:focus,
  &:active {
    background-color: #eef3;
    box-shadow: 6px 6px 0 black;
  }
`;

const Button = styled.button`
  all: unset;
  background-color: ${(props) => (props.bg ? props.bg["60"] : blue["60"])};
  font-size: ${(props) =>
    props.sm ? typeScale.helperText : typeScale.paragraph};
  font-weight: bold;
  padding: ${(props) => (props.sm ? "0.1rem 1.2rem" : "0.15rem 1.8rem")};

  min-width: 50px;
  min-height: 40px;
  border: 3px solid ${(props) => (props.bg ? props.bg["00"] : blue["00"])};
  border-radius: 0.5rem;
  color: ${(props) => (props.bg ? props.bg["00"] : blue["00"])};
  box-shadow: 8px 8px 0 ${(props) => (props.bg ? props.bg["00"] : blue["00"])};
  cursor: pointer;
  transition: all 0.1s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => (props.bg ? props.bg["70"] : blue["70"])};
    box-shadow: 10px 10px 0
      ${(props) => (props.bg ? props.bg["00"] : blue["00"])};
  }

  &:active,
  &:focus {
    background-color: ${(props) => (props.bg ? props.bg["80"] : blue["80"])};
    box-shadow: 4px 4px 0 ${(props) => (props.bg ? props.bg["00"] : blue["00"])};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    box-shadow: 2px 2px 0 ${(props) => (props.bg ? props.bg["00"] : blue["00"])};
  }
`;

const PageWrapper = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 1) 50%, rgb(0, 0, 0) 100%);
  min-height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: white;
`;

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback("");

    try {
      const response = await fetch("https://formspree.io/f/xyzzypra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFeedback("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFeedback("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFeedback("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <Page header="Contact">
        <Heading>Get in Touch</Heading>
        <ContactWrapper>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </Form>
          {feedback && <p>{feedback}</p>}
        </ContactWrapper>
      </Page>
    </PageWrapper>
  );
};
export default Contact;