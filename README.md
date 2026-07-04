# ⚖️ Mesothelioma Legal Claims Portal

<div align="center">

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An ultra-modern, fully responsive legal intake and case evaluation application designed to streamline legal claims for asbestos exposure and mesothelioma victims.

[Explore Features](#-features) • [Installation Guide](#-local-development-setup) • [API Documentation](#-api-endpoints) • [Deployment](#-deployment-guide)

</div>

---

## 📖 Project Overview

The **Mesothelioma Legal Claims Portal** is a production-grade, highly responsive web interface built for legal consultation and intake management. Optimized for conversion, accessibility, and speed, this platform helps affected individuals submit critical exposure history, receive preliminary criteria verification, and connect with legal teams securely.

This repository (`kanizen-assignment`) represents the optimized frontend client built with **React 18** and styled with modern utility patterns (`globals.css`), configured for seamless deployments via **Vercel**.

---

## ✨ Features

### 🎨 Frontend Experience
*   **Intuitive Legal Form Wizard:** A structured, multi-step intake flow to gather diagnostic history, occupational exposure, and contact parameters.
*   **Live Legal Clock Indicator:** Dynamic, client-side live clock tracking local or global operation times for high-urgency user reassurance.
*   **Real-time Validation & States:** Robust, accessible form field validations with active visual feedback, instant loading states, and state-retaining fallback mechanisms.
*   **Mobile-First Responsive Design:** Fully adaptive grid systems targeting breakpoints at `768px` and `1024px` for optimal performance on tablets, desktops, and touch-focused mobile browsers.

### 🛡️ Security & Performance
*   **Zero-Injection Architecture:** Client-side sanitization combined with strict parameterized APIs to protect user privacy.
*   **Cross-Origin Resource Sharing (CORS):** Strict domain configurations restricting API consumption exclusively to verified hosts.
*   **Web Vitals Optimized:** Fast paint timings, minimal layout shifts, and lazy loading strategies to maximize lighthouse conversion scores.

---

## 🛠️ Tech Stack Matrix

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Core** | `React.js 18.2.0` | Declarative UI updates & high-performance component state management. |
| **Styling** | `CSS3 / globals.css` | Bespoke styling, responsive utility grids, and custom visual design system. |
| **Build & Scripts** | `react-scripts 5.0.1` | Optimized build pipelines, Webpack bundling, and testing utilities. |
| **Server Engine** | `Node.js / Express` | Decoupled RESTful backend for processing intakes (configured for database sync). |
| **Database** | `MySQL 2` | Schema-enforced relational storage with SQL execution monitoring. |
| **Deployment** | `Vercel` | Cloud edge-network hosting configured natively with `vercel.json`. |

---

## 📁 Repository Structure

Below is the directory structure for this frontend-focused repository, featuring built-in documentation and configuration profiles.

```bash
kanizen-assignment/
├── .env                         # Local environment overrides
├── .gitignore                   # Dependency and distribution lockouts
├── DEPLOYMENT.md                # Deployment-specific specifications
├── ENVIRONMENT_SETUP.md         # Advanced system config guidelines
├── FORM_TROUBLESHOOTING.md     # Debugging form states & payload anomalies
├── IMMEDIATE_FIX.md             # Standard operating procedure for hotfixes
├── README.md                    # Premium repository guide (this document)
├── VERCEL_DEPLOYMENT.md         # Specific instructions for Vercel pipeline
├── globals.css                  # Universal styling guidelines & responsive design
├── package.json                 # Core dependencies, script configurations
├── package-lock.json            # Lockfile for reproducible builds
├── vercel.json                  # Vercel-specific routing and performance setup
├── public/                      # Static assets
│   └── index.html               # Document template entry point
└── src/                         # Application source
    ├── App.js                   # Root Component containing application layouts
    ├── index.js                 # Virtual DOM mount pipeline
    └── components/              # Reusable modular UI elements (Forms, Clocks, UI)
```

---

## 🏃‍♂️ Local Development Setup

Follow these steps to spin up the local development suite.

### 📋 Prerequisites
*   **Node.js** Version `16.0.0` or higher
*   **npm** Version `8.0.0` or higher
*   **MySQL Server** (if syncing local backend logs)

### Step 1: Clone and Enter Repository
```bash
git clone https://github.com/Alok345/kanizen-assignment.git
cd kanizen-assignment
```

### Step 2: Set Up Environment Configuration
Generate your `.env` file in the root directory:
```bash
cat <<EOF > .env
REACT_APP_API_URL=http://localhost:5000
PORT=3000
EOF
```

### Step 3: Install Packages & Run Frontend
Install standard dependencies and initialize the development server:
```bash
npm install
npm start
```
The application will automatically load on **`http://localhost:3000`**.

---

## 🛢️ Backend Integration & DB Initialization

To configure the decoupled Express backend mentioned in upstream guidelines:

### 1. Database Provisioning
Configure your local MySQL instance using the SQL script:
```sql
CREATE DATABASE mesothelioma_claims;
USE mesothelioma_claims;

CREATE TABLE form_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Connect the REST Interface
Ensure you set your backend directory configuration to refer to this repository’s front end. If running a local API wrapper, run:
```bash
# Verify connection to API
curl http://localhost:5000/api/health
```

---

## 🌐 API Specifications

When communicating with the backend API, payloads must match the following JSON schemas:

### 📌 Form Submission
`POST /api/form`

*   **Request Headers:** `Content-Type: application/json`
*   **Payload Schema:**
```json
{
  "fullName": "Jane Doe",
  "email": "janedoe@legalhelp.com",
  "message": {
    "exposureYear": 1984,
    "diagnosisConfirmed": true,
    "occupationalHistory": "Shipyard Boiler Technician",
    "phoneNumber": "+1-555-0199"
  }
}
```

*   **Response Schema (Success 201):**
```json
{
  "status": "success",
  "message": "Claim application successfully registered",
  "submissionId": 28402
}
```

---

## 🚀 Deployment Guide

### Vercel Deployment (Recommended)
This repository is configured out-of-the-box for instant deployment to Vercel via `vercel.json`.

1.  Push your changes to your Git repository (GitHub/GitLab/Bitbucket).
2.  Import your repository into the [Vercel Dashboard](https://vercel.com/new).
3.  Set your Environment Variables in Vercel:
    *   `REACT_APP_API_URL` = `https://your-production-api-endpoint.com`
4.  Click **Deploy**.

For detailed pipelines, refer to [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md).

---

## 🔧 Diagnostics & Troubleshooting

| Error Symptom | Cause | Action / Remediation |
| :--- | :--- | :--- |
| `Failed to Fetch (CORS Error)` | The API gateway is denying access to the frontend origin. | Ensure the backend CORS configuration allows headers from the frontend domain. |
| `Live clock desynchronization` | Browser client clock time drifting from actual atomic server clock. | Check system settings for time auto-sync or inspect client browser localizations. |
| `Failed Form Submission` | Payload keys do not align with backend expectations. | Check browser console network tab; map fields to raw JSON strings where necessary (refer to [FORM_TROUBLESHOOTING.md](./FORM_TROUBLESHOOTING.md)). |

For immediate production hotfixes, please read **[IMMEDIATE_FIX.md](./IMMEDIATE_FIX.md)**.

---

## 🤝 Contributing

Contributions are welcome! Please follow this workflow:

1.  **Fork** the project repository.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'feat: Add elegant legal verification feature'`).
4.  Push your branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

**Developed with ❤️ by [Alok345](https://github.com/Alok345)**

*For developer support, please consult the troubleshooting directories or raise a GitHub Issue.*

</div>