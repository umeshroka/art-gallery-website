import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PriceEnquiryForm = ({ onSubmit }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const item = location.state?.item;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "A valid email is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit({ ...formData, item });
    setFormData({ name: "", email: "", message: "" });
    navigate(-1);
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ borderColor: "#ddd" }}>
            <div className="card-header bg-light text-dark text-center">
              <h5>Price Enquiry</h5>
            </div>
            <div className="card-body" style={{ backgroundColor: "#f9f9f9" }}>
              <p className="text-muted small mb-4">
                You are enquiring about: <strong>{item?.title || "Unknown Item"}</strong>
              </p>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label small">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control form-control-sm ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback small">{errors.name}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label small">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control form-control-sm ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback small">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label small">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    className={`form-control form-control-sm ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback small">
                      {errors.message}
                    </div>
                  )}
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-dark btn-sm">
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceEnquiryForm;
