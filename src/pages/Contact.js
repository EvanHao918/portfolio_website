// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);
    data.append('file', formData.file);

    try {
      const response = await fetch('https://your-backend-endpoint.com/contact', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Your message has been sent!');
      } else {
        alert('There was a problem sending your message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message.');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            File:
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              required
            />
          </label>
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
