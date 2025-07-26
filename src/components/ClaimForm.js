"use client"

import { useState } from "react"
import config from "../config"

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    dateOfDiagnosis: "",
    jobTitle: "",
    typeOfDiagnosis: "",
    story: "",
    agreeToTerms: false,
    verifyHuman: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Debug: Log form data and validation
    console.log("Form submission started");
    console.log("Form data:", formData);
    console.log("Validation:", {
      agreeToTerms: formData.agreeToTerms,
      verifyHuman: formData.verifyHuman,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email
    });

    if (!formData.agreeToTerms || !formData.verifyHuman) {
      setSubmitMessage("Please complete all required fields and checkboxes.")
      console.log("Form validation failed - checkboxes not checked");
      return
    }

    if (!formData.firstName || !formData.lastName || !formData.email) {
      setSubmitMessage("Please fill in all required fields (First Name, Last Name, Email).")
      console.log("Form validation failed - missing required fields");
      return
    }

    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const apiUrl = config.getApiUrl("/api/form");
      const requestBody = {
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: JSON.stringify(formData),
      };

      console.log("Making API request to:", apiUrl);
      console.log("Request body:", requestBody);

      // Use configuration for API URL
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })

      console.log("Response status:", response.status);
      console.log("Response headers:", Object.fromEntries(response.headers.entries()));

      const result = await response.json()
      console.log("Response data:", result);

      if (response.ok) {
        setSubmitMessage("✅ Thank you! Your claim form has been submitted successfully. We'll contact you soon.")
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          dateOfBirth: "",
          dateOfDiagnosis: "",
          jobTitle: "",
          typeOfDiagnosis: "",
          story: "",
          agreeToTerms: false,
          verifyHuman: false,
        })
      } else {
        setSubmitMessage(`❌ Error: ${result.error || "Failed to submit form. Please try again."}`)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      setSubmitMessage("❌ Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="claim-form">
      <div className="form-header">
        <div className="slots-badge">
          <span className="mobile-text">ONLY 6 SLOTS</span>
          <span className="desktop-text">6 SLOTS LEFT</span>
        </div>
        <h2 className="form-title">Claim Form</h2>
      </div>

      {submitMessage && (
        <div className={`submit-message ${submitMessage.includes("✅") ? "success" : "error"}`}>{submitMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              id="dateOfDiagnosis"
              name="dateOfDiagnosis"
              value={formData.dateOfDiagnosis}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="typeOfDiagnosis">Type of Diagnosis *</label>
          <select
            id="typeOfDiagnosis"
            name="typeOfDiagnosis"
            value={formData.typeOfDiagnosis}
            onChange={handleInputChange}
            required
          >
            <option value="">Select diagnosis type</option>
            <option value="pleural-mesothelioma">Pleural Mesothelioma</option>
            <option value="peritoneal-mesothelioma">Peritoneal Mesothelioma</option>
            <option value="pericardial-mesothelioma">Pericardial Mesothelioma</option>
            <option value="testicular-mesothelioma">Testicular Mesothelioma</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="story">Tell us your story (optional)</label>
          <textarea
            id="story"
            name="story"
            value={formData.story}
            onChange={handleInputChange}
            rows={4}
            placeholder="Share your experience..."
          />
        </div>

        <div className="checkbox-group">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="agreeToTerms">
              I agree to the privacy policy and disclaimer and give my express written consent to be contacted regarding
              my case options. I understand that I may be contacted using automatic dialing equipment. Message and data
              rates may apply. My consent does not require purchase. This is Legal advertising.
            </label>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              id="verifyHuman"
              name="verifyHuman"
              checked={formData.verifyHuman}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="verifyHuman">Please check this box to verify you're a person.</label>
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? (
            <>
              <div className="spinner"></div>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span className="mobile-text">Submit →</span>
              <span className="desktop-text">Start your claim now</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default ClaimForm
