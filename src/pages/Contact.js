import './contact.scss';
import React, { useState } from 'react';
const BASE_URL = 'https://satyajitzecdata.pythonanywhere.com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    company_name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform API call here to send form data
    // Replace 'API_ENDPOINT' with your actual API endpoint
    fetch(`${BASE_URL}/contact-us/`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response as needed
        console.log(data);
        alert("Messege sent succefully, we will reach you soon")
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error(error);
        alert("We could not sent message right now, Try again after sometime")
      });
  };

  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Shark Tank Contact Form</h1>
      </div>

      <div className="row">
        <div className="col-lg-7 mx-auto">
          <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
              <div className="container">
                <form id="contact-form" role="form" onSubmit={handleSubmit}>
                  <div className="controls">
                    <div className="row">
                      <div className="">
                        <div className="form-group">
                          <label htmlFor="form_name">Firstname *</label>
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Please enter your firstname *"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="form-group">
                          <label htmlFor="form_lastname">Lastname *</label>
                          <input
                            id="form_lastname"
                            type="text"
                            name="surname"
                            className="form-control"
                            placeholder="Please enter your lastname *"
                            required
                            value={formData.surname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="">
                        <div className="form-group">
                          <label htmlFor="form_email">Email *</label>
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Please enter your email *"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="form-group">
                          <label htmlFor="company_name">Company Name *</label>
                          <input
                            id="company_name"
                            type="text"
                            name="company_name"
                            className="form-control"
                            placeholder="your Company Name *"
                            required
                            value={formData.company_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="form_message">Message *</label>
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control"
                            placeholder="Write your message here."
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 text-center mt-3">
                        <input
                          type="submit"
                          className="text-white btn btn-success btn-send pt-2 btn-block "
                          value="Send Message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
