"use client";
import React, { useState } from 'react';
import Link from 'next/link';

function RegisterInterestForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submit logic; integrate with API or email service later
    setSubmitted(true);
  };

  return (
    <div className="space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Register Your Interest</span>
          <h2 className="sec-title">Begin Your Andalus Journey</h2>
          <p className="sec-text mx-auto" style={{ maxWidth: '760px' }}>
            Simply complete the form below and register your interest. We will be in touch to discuss payment and associated details immediately.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <form className="contact-form about-contact-grid style2" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="+34 000 000 000"
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Type Here...</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-control"
                    rows={5}
                    placeholder="Share any thoughts, questions, or goals for your retreat."
                    required
                  />
                </div>
                <div className="col-12 text-center mt-2">
                  <button type="submit" className="th-btn style4 th-icon">
                    Submit Interest
                  </button>
                </div>
                {submitted && (
                  <div className="col-12 mt-3 text-center">
                    <div className="alert alert-success mb-0">
                      Thank you! Your interest has been registered. We'll reach out shortly.
                    </div>
                  </div>
                )}
              </div>
            </form>
            <div className="text-center mt-40">
              <p className="about-contact-details-text mb-0">
                Prefer direct contact? Email us at{' '}
                <Link href="mailto:info@houseofandalus.com">info@houseofandalus.com</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterInterestForm;
