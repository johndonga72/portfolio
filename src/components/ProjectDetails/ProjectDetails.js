import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.css";
import { useState } from "react";
function ProjectDetails() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === project.image.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.image.length - 1 : prev - 1
    );
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const projectData = {
    1: {
      title: "Unified Healthcare Platform",
      description: `
A unified AI-powered healthcare platform integrating GPT and Knowledge Graphs to deliver accurate medical insights, symptom analysis, and hospital recommendations.
**Key Features:**
• Symptom Checker using GPT + KG reasoning  
• Disease Insights with AI-based context  
• YouTube Health Video Recommendations  
• Nearby Hospital Finder via Google Maps Search  
• PDF Report Generation for User Queries  
• Integrated Online Pharmacy Links  
• Voice-based Interaction Support  
• Mental Health Support & Helplines  
**Tech Stack:** Django, React, GPT API, Neo4j, Streamlit, Flask, Tailwind CSS
            `,
      image: ["/images/healthcare.png"],
    },
    2: {
      title: "Smart Online Course Registration Portal (SOCRP)",
      description: `
## 📘 Project Overview
The **Smart Online Course Registration Portal (SOCRP)** is a full-stack web platform designed to automate course registration, profile management, and student verification. It ensures a smooth registration process with secure authentication, admin control, and shareable candidate profiles for employers.
---
## 🎯 Objectives
- Automate user registration and verification process.  
- Simplify course enrollment with profile-based validation.  
- Enable admin monitoring of user activities and statuses.  
- Provide dynamic profile sharing with secure expiry links.  
- Offer payment integration for premium courses.

---
## ⚙️ Key Features
- **User Registration & Verification:**  
  Auto-generates Membership ID (e.g., SOCRP-2025-00001).  
  Email verification ensures authenticity before activation.  

- **Profile Management:**  
  Users can update personal info, education, and experience anytime.  
  Resume upload/download with live preview.  

- **Admin Dashboard:**  
  Admins can view, edit, block/unblock users.  
  Dashboard analytics showing total users, active, and pending.  

- **Profile Sharing:**  
  Generates temporary shareable links (1/2/7 days).  
  Employers can view candidate profiles and download resumes.  

- **Payment Integration:**  
  Secure checkout for paid courses using payment gateway APIs.

---

## 🏗️ System Architecture
**Frontend:** React handles UI rendering and routing.  
**Backend:** Django REST Framework manages authentication, CRUD, and email verification.  
**Database:** PostgreSQL for structured storage of users, profiles, and courses.  
**API Testing:** Postman used to verify endpoints and responses.  

---

## 💻 Tech Stack
| Layer | Technologies Used |
|-------|--------------------|
| Frontend | React.js, Normal CSS |
| Backend | Django REST Framework |
| Database | PostgreSQL |
| Authentication | JWT, Email Verification |
| API Testing | Postman |
| Deployment | Vercel (Frontend), Render (Backend) |

---

## 🧰 Tools Used
- Visual Studio Code  
- Django Admin Panel  
- Postman (API Testing)  
- GitHub (Version Control)  
- Vercel & Render (Deployment)

---

## 🚀 Deployment
- **Frontend:** Deployed on Vercel for quick global access.  
- **Backend:** Hosted on Render with REST API integration.  
- **Database:** Managed PostgreSQL instance on Render.

---

## 📈 Outcomes
- Reduced manual enrollment effort by 80%.  
- Enhanced transparency for users through real-time verification.  
- Allowed employers to access candidate details securely.  

---

**GitHub Repository:** [View Code](#)  
**Live Demo:** [Try Now](#)
            `,
      image: ["/assets/RealConcepts/jwt1.png", "/assets/RealConcepts/jwt2.png"],
    },
    51: {
      title: "Profile Share Link System Design",
      image: ["/assets/SystemDesign/soseq2.png"], // you can also include a diagram image if exported
      description: `
    🔗 Profile Share Link Feature

    Designed a feature where users can generate a temporary share link to show their profile to recruiters. The link allows read-only access, works without login, and expires automatically after a set time.  

    🔹 Sequence Diagram Overview

    @startuml
    actor User
    actor Viewer
    participant Frontend
    participant Backend
    participant Database

    User -> Frontend : Generate share link
    Frontend -> Backend : POST /share-link
    Backend -> Database : Save token & expiry
    Viewer -> Backend : Open share link
    Backend -> Database : Fetch profile
    Backend -> Database : Save view log
    Backend -> Viewer : Read-only profile
    @enduml

    This diagram shows how the system handles share link generation and profile viewing while maintaining security and logging.  

    🔹 What I Built

    - End-to-end share link generation system  
    - Read-only access to profile data  
    - Token-based authentication to ensure security  
    - Automatic link expiration after a configurable duration  

    🔹 Backend Responsibilities

    - Secure token generation and storage  
    - Validation of token and link expiration before serving profile data  
    - Logging of profile views (ViewLog) including IP and timestamp  
    - Management of multiple share links per user  

    🔹 System Design Highlights

    - ShareLink table stores token, expiry, and creation time  
    - ViewLog table tracks who viewed the profile and when  
    - Users can generate multiple links for different recruiters  
    - Admins can manage users and their links if required  

    🔹 Why This Matters (Business Value)

    - 🔐 Secure access to user profiles  
    - 📊 Track recruiter interest through view logs  
    - ⚡ Quick, login-free sharing for convenience  
    - 💼 Provides a professional profile sharing workflow  

    🔹 Tech Stack

    Backend: Python, Django / FastAPI  
    Database: PostgreSQL / MySQL  
    Security: Token Validation, Read-Only Access  
    Architecture: REST APIs  
    `
    },
    52: {
      title: "User Registration & Email Verification System",
      image: ["/assets/SystemDesign/soseq.png"], // optionally add diagram screenshot
      description: `
    🔐 **User Registration & Email Verification System**

    Designed a secure and reliable user registration system that validates user identities through email verification. This ensures only legitimate users can activate their accounts while providing a seamless registration experience.

    ---

    🔹 Sequence Diagram Overview

    @startuml
    actor User
    participant Frontend
    participant Backend
    participant Database
    participant EmailService

    User -> Frontend : Fill registration form
    Frontend -> Backend : POST /register
    Backend -> Database : Save user (Pending)
    Backend -> EmailService : Send verification link
    User -> Backend : Click verification link
    Backend -> Database : Update status = Active
    Backend -> Frontend : Registration successful
    @enduml

    This diagram illustrates the full registration flow from form submission to account activation using email verification.

    ---

    🔹 Features Implemented:
    - **Secure Registration Form**: Captures user details including name, email, phone, password, and profile photo.  
    - **Pending Account Status**: Users remain inactive until email verification is completed.  
    - **Email Verification**: Generates a unique verification link sent via email to confirm the user's identity.  
    - **Automatic Account Activation**: Clicking the verification link updates the account status to Active.  
    - **Backend Validation**: Ensures verification link is valid and not expired before activating the account.  
    - **Error Handling**: Handles expired, invalid, or already used verification links gracefully.  

    ---

    🔹 Backend Responsibilities:
    - Secure storage of user data with password hashing.  
    - Generate unique verification tokens and store them with expiry timestamps.  
    - Send verification emails through EmailService integration.  
    - Validate verification tokens and update user status upon confirmation.  
    - Maintain database consistency and logging for auditing purposes.  

    ---

    🔹 System Design Highlights:
    - **Database Tables**:  
      - 'User': Stores user details, status, and hashed passwords.  
      - 'VerificationToken': Stores token, user_id, created_at, expiry.  
    - **Security**: Password hashing, token-based verification, and link expiry enforcement.  
    - **Scalability**: Designed to handle high volume user registrations efficiently.  
    - **Frontend Integration**: Users can register via web or mobile UI; email verification ensures trust and security.  

    ---

    🔹 Business Value:
    - 🔐 Prevents fake or spam registrations.  
    - ✅ Ensures only verified users can access the system.  
    - ⚡ Improves user onboarding experience with email verification.  
    - 💼 Reduces support issues and fraudulent accounts.  

    ---

    🔹 Tech Stack:
    - Backend: Python, Django / FastAPI  
    - Database: PostgreSQL / MySQL  
    - Security: Password hashing, token validation, email verification  
    - Architecture: REST APIs  
    - Email Service: SMTP / Third-party services like SendGrid or AWS SES  

    ---

    🔹 Potential Enhancements:
    - SMS-based verification for multi-factor authentication.  
    - Expiry reminders for unverified accounts.  
    - Resend verification link functionality.  
    - Dashboard for admins to manage pending registrations.  

    This system demonstrates expertise in **secure user registration, backend validation, token management, and email-based workflow automation** while providing a smooth onboarding experience.
    `
    },
    53: {
      title: "Profile Management System Class Design",
      image: ["/assets/SystemDesign/soclass.png"], // optionally include diagram screenshot
      description: `
    🏗️ **Profile Management System – Class Diagram**

    This system is designed to manage user profiles, education, experience, skills, languages, and shareable profile links with full administrative oversight. The class diagram illustrates all entities, attributes, methods, and relationships in the system.

    ---

    🔹 **Key Classes and Responsibilities**

    **1. User**
    - Attributes: user_id, membership_id, full_name, email, phone, password_hash, dob, gender, address, profile_photo, resume_file, status, is_verified, created_at  
    - Methods: register(), verify_email(), update_profile(), generate_share_link()  
    - Represents a system user with personal and professional data.

    **2. Education**
    - Attributes: education_id, degree, institution, year_of_completion, cgpa  
    - Represents educational qualifications linked to a user.

    **3. Experience**
    - Attributes: experience_id, company_name, designation, start_date, end_date, responsibilities  
    - Represents professional work experience linked to a user.

    **4. Skill**
    - Attributes: skill_id, skill_name  
    - Stores user skills; users can have multiple skills.

    **5. Language**
    - Attributes: language_id, language_name  
    - Stores languages known by the user.

    **6. Admin**
    - Attributes: admin_id, name, email, password_hash  
    - Methods: view_user(), update_user(), block_user()  
    - Admin manages users and their data with control over account status.

    **7. ShareLink**
    - Attributes: link_id, token, expiry_date, created_at  
    - Represents temporary links for sharing profiles.

    **8. ViewLog**
    - Attributes: log_id, viewed_at, viewer_ip  
    - Tracks each view of a shared profile.

    ---

    🔹 **Relationships**
    - **User – Education / Experience / Skill / Language / ShareLink**: One-to-many relationship; a user can have multiple entries for each.  
    - **ShareLink – ViewLog**: One-to-many; each share link can have multiple view logs.  
    - **Admin → User**: Admin manages users (update, view, block).

    ---

    🔹 **System Highlights**
    - Users can manage their profiles including education, experience, skills, and languages.  
    - Users can generate secure share links to share their profiles externally.  
    - All profile views via share links are logged for analytics.  
    - Admins can oversee and manage all user data to ensure compliance and security.

    ---

    🔹 **Tech Stack**
    - Backend: Python, Django / FastAPI  
    - Database: PostgreSQL / MySQL  
    - Security: Password hashing, token-based share links, read-only access  
    - Architecture: REST APIs  

    ---

    This class diagram and system design ensure a **structured, secure, and scalable user profile management system** suitable for professional networking, recruitment, or portfolio platforms.
    `
    },
    54: {
      title: "Profile Management System – ER Diagram",
      image: ["/assets/SystemDesign/soer.png"], // optionally include diagram screenshot
      description: `
📊 **Profile Management System – Entity-Relationship (ER) Diagram**

This system manages user profiles, including education, experience, skills, languages, and shareable profile links. The ER diagram illustrates the database schema, primary and foreign keys, and relationships between entities.

---

🔹 **Entities and Attributes**

**1. users**
- **Primary Key**: user_id  
- **Attributes**: membership_id, email, status  
- Stores core user information.

**2. educations**
- **Primary Key**: education_id  
- **Foreign Key**: user_id → users.user_id  
- **Attributes**: degree  
- Stores educational qualifications for each user.

**3. experiences**
- **Primary Key**: experience_id  
- **Foreign Key**: user_id → users.user_id  
- **Attributes**: company_name  
- Stores professional work experiences.

**4. skills**
- **Primary Key**: skill_id  
- **Foreign Key**: user_id → users.user_id  
- **Attributes**: skill_name  
- Stores multiple skills for each user.

**5. languages**
- **Primary Key**: language_id  
- **Foreign Key**: user_id → users.user_id  
- **Attributes**: language_name  
- Stores languages known by the user.

**6. share_links**
- **Primary Key**: link_id  
- **Foreign Key**: user_id → users.user_id  
- **Attributes**: token, expiry_date  
- Represents temporary profile share links.

**7. view_logs**
- **Primary Key**: log_id  
- **Foreign Key**: link_id → share_links.link_id  
- **Attributes**: viewed_at  
- Tracks each view of a shared profile link.

---

🔹 **Relationships**
- **users → educations / experiences / skills / languages / share_links**: One-to-many; a user can have multiple entries in each table.  
- **share_links → view_logs**: One-to-many; each share link can have multiple view logs.

---

🔹 **System Highlights**
- Clearly structured relational database for managing user profiles and associated data.  
- Supports multiple skills, experiences, and education entries per user.  
- Enables secure, token-based share links with view tracking.  
- Ensures data integrity through primary and foreign key constraints.

---

🔹 **Tech Stack**
- Database: PostgreSQL / MySQL  
- Backend: Python, Django / FastAPI  
- Architecture: REST APIs  
- Security: Token-based link validation, read-only profile access  

---

This ER diagram demonstrates a **scalable and relational database design** for a professional profile management system, enabling secure sharing, detailed user data tracking, and efficient query handling.
`
    },
    55: {
      title: "AI Healthcare Assistant – Activity Diagram",
      image: ["/assets/SystemDesign/healthcareact.png"],
      description: `
      🧠 **AI Healthcare Assistant – Activity Diagram**

      Designed an activity diagram to represent the complete user interaction flow within an AI-powered healthcare assistant system. This diagram visualizes how users navigate through multiple healthcare features such as symptom checking, chatbot interaction, medicine finder, knowledge graph visualization, and educational video search.

      ---

      🔹 Activity Diagram Overview

      @startuml
      start
      :User Selects Feature;

      if (Feature Selected?) then (YouTube)
        :Search YouTube Videos;
        :Display Videos;
      elseif (Medicine Finder)
        :Input Medicine & Location;
        :Show Pharmacy Options;
      elseif (Symptom Checker)
        :Input Symptoms;
        :Validate Symptoms;
        :Get Symptom Results;
      elseif (Chatbot)
        :Input Query;
        :Process with KnowledgeGraph & Groq API;
        :Get Chat Response;
      elseif (Knowledge Graph)
        :Input Query;
        :Generate Knowledge Graph;
        :Display Knowledge Graph;
      endif

      end
      @enduml

      This diagram clearly shows decision points and execution paths based on the selected feature.

      ---

      🔹 Features Represented:
      - Multiple healthcare feature selection
      - Conditional branching based on user choice
      - Clear start and end flow
      - Parallel support for AI, data visualization, and search features

      ---

      🔹 System Highlights:
      - User-centric flow design
      - Modular feature execution
      - Scalable for adding new healthcare modules
      - Clear visualization for system understanding

      ---

      🔹 Business Value:
      - Improves user experience with intuitive navigation
      - Simplifies complex healthcare workflows
      - Helps developers and stakeholders understand feature interactions

      ---

      🔹 Tech Stack:
      - Diagram: PlantUML
      - Backend Logic: Python, FastAPI / Django
      - AI Processing: Groq API
      - Architecture: Modular AI-based system

      This activity diagram demonstrates strong understanding of **workflow modeling, feature orchestration, and user-centric system design**.
      `
    },
    56: {
      title: "AI Healthcare Assistant – Data Flow Diagram",
      image: ["/assets/SystemDesign/healthcaredata.png"],
      description: `
      📊 **AI Healthcare Assistant – Data Flow Diagram**

      Designed a Data Flow Diagram (DFD) to illustrate how data moves between users, administrators, system components, databases, and external APIs in an AI-powered healthcare assistant system.

      ---

      🔹 Data Flow Diagram Overview

      @startuml
      actor User
      actor Administrator

      rectangle "Healthcare Assistant System" as HAS
      rectangle "Groq API" as Groq
      rectangle "YouTube API" as YT
      rectangle "Knowledge Graph" as KG
      rectangle "Disease Dataset" as DD
      rectangle "Medicine Finder" as MF

      User --> HAS : Symptoms / Queries
      Administrator --> HAS : News Updates

      HAS --> Groq : AI Requests
      Groq --> HAS : AI Responses

      HAS --> YT : Video Requests
      YT --> HAS : Video Data

      HAS --> KG : Medical Queries
      KG --> HAS : Knowledge Data

      HAS --> DD : Disease Info Requests
      DD --> HAS : Disease Data

      HAS --> MF : Medicine Queries
      MF --> HAS : Pharmacy Data

      HAS --> User : Reports / Videos / Graphs
      @enduml

      ---

      🔹 Data Sources & Components:
      - User Inputs (Symptoms, Queries)
      - Disease Datasets
      - Knowledge Graph
      - External APIs (Groq, YouTube)
      - Medicine Finder Service

      ---

      🔹 System Design Highlights:
      - Centralized healthcare assistant system
      - Clean separation of external and internal data sources
      - Secure and controlled data flow
      - Real-time AI responses

      ---

      🔹 Business Value:
      - Ensures accurate healthcare insights
      - Improves system reliability
      - Enables real-time decision-making
      - Supports scalable data integrations

      ---

      🔹 Tech Stack:
      - Backend: Python, FastAPI
      - AI Engine: Groq API
      - External Services: YouTube API
      - Architecture: Data-driven microservices

      This DFD demonstrates expertise in **data modeling, AI-driven system integration, and scalable healthcare architecture design**.
      `
    },
    57: {
      title: "AI Healthcare Assistant – Sequence Diagram",
      image: ["/assets/SystemDesign/healthseq1.png"],
      description: `
      🔁 **AI Healthcare Assistant – Sequence Diagram**

      Designed a sequence diagram to showcase the step-by-step interaction between users, the healthcare assistant system, AI services, and external APIs during healthcare operations.

      ---

      🔹 Sequence Diagram Overview

      @startuml
      actor User
      participant HealthcareSystem
      participant SymptomChecker
      participant Chatbot
      participant KnowledgeGraph
      participant GroqAPI
      participant YouTubeAPI
      participant MedicineFinder

      User -> HealthcareSystem : Send Request
      HealthcareSystem -> SymptomChecker : Check Symptoms
      SymptomChecker -> KnowledgeGraph : Query Data
      KnowledgeGraph --> SymptomChecker : Return Data
      SymptomChecker -> GroqAPI : AI Analysis
      GroqAPI --> SymptomChecker : AI Response
      SymptomChecker --> HealthcareSystem : Results

      HealthcareSystem -> Chatbot : Chat Query
      Chatbot -> GroqAPI : AI Processing
      GroqAPI --> Chatbot : Response
      Chatbot --> HealthcareSystem : Chat Reply

      HealthcareSystem -> YouTubeAPI : Fetch Videos
      YouTubeAPI --> HealthcareSystem : Video Data

      HealthcareSystem -> MedicineFinder : Check Medicine
      MedicineFinder --> HealthcareSystem : Pharmacy Info

      HealthcareSystem --> User : Final Response
      @enduml

      ---

      🔹 Interaction Highlights:
      - Sequential AI request handling
      - Integration of multiple services
      - Real-time responses
      - Centralized system coordination

      ---

      🔹 Business Value:
      - Efficient request processing
      - Accurate healthcare insights
      - Seamless multi-service integration
      - Improved system transparency

      ---

      🔹 Tech Stack:
      - Backend: Python, FastAPI
      - AI: Groq API
      - External APIs: YouTube API
      - Architecture: Service-oriented

      This sequence diagram reflects strong knowledge of **API orchestration, AI workflows, and real-time system interactions**.
      `
    },

    101: {
      title: "JWT Authentication & Refresh Tokens",
      image: ["/assets/RealConcepts/jwt1.png", "/assets/RealConcepts/jwt2.jpg"],
      description: `
🔐 Secure Authentication System (JWT + Refresh Tokens)
Designed and implemented a real-world authentication system used in modern web applications to ensure secure, scalable, and seamless user login experiences.
🔹 What I Built
  Implemented JWT-based authentication using Access Tokens & Refresh Tokens
  Enabled secure user sessions without frequent re-login
  Built for scalability and performance in multi-user environments
🔹 How It Works (Simple Flow)
  User logs in → receives a short-lived access token
  Access token secures all protected APIs
  When the token expires, the system automatically refreshes it
  User continues working without interruption
  ✔ Smooth user experience
  ✔ No session timeout frustration
🔹 Key Engineering & Security Practices
  Stored refresh tokens in HttpOnly cookies to prevent XSS attacks
  Implemented token rotation to enhance session security
  Blocked token reuse after logout
  Limited access token lifespan to reduce security risk
  Used industry-standard JWT (HS256) signing
🔹 Backend Responsibilities Handled
  API authentication & authorization
  Custom middleware for protected routes
  Token generation, validation, and refresh logic
  Secure logout and session invalidation
  Error handling for unauthorized access
🔹 Why This Matters for Business
  ⚡ Faster API responses (stateless authentication)
  📈 Scales easily with growing users
  🔐 Strong security without affecting UX
  📱 Works seamlessly for web & mobile apps
🔹 Tech Stack
  Backend: Python, Django
  Auth: JWT, Refresh Tokens
  Security: HttpOnly Cookies, Token Rotation
  Architecture: REST APIs  
`
    },
    102: {
      title: "Payment Integration (Razorpay / Stripe)",
      image: ["/assets/RealConcepts/pay1.png", "/assets/RealConcepts/pay2.png", "/assets/RealConcepts/pay3.png", "/assets/RealConcepts/pay4.png", "/assets/RealConcepts/pay5.png"],
      description: `
💳 Payment Gateway Integration (Razorpay)

Implemented a production-ready online payment system using Razorpay, enabling secure and reliable transactions within the application.

🔹 What I Built

End-to-end payment flow from order creation to payment confirmation

Integrated Razorpay Checkout for seamless user payments

Handled real-time payment status updates on the backend

🔹 End-to-End Payment Flow

Order Creation API

Backend dynamically creates payment orders with amount, currency, receipt ID, and expiry time

Frontend Checkout Integration

Razorpay Checkout opens for users

Supports UPI, Cards, and Net Banking

Secure Payment Verification

Backend verifies Payment ID, Order ID, and Signature

Payment marked successful only after server-side validation

✔ Prevents tampered or fake payment confirmations

🔹 Payment Status Management

Automatically tracked and stored payment states:

✅ Success

❌ Failed

⏳ Pending

🔄 Refunded

Status updates persisted in the database for auditing and reporting

🔹 Webhooks Implementation

Used Razorpay webhooks to handle:

Payment confirmation (async verification)

Refund status updates

Failed or abandoned payments

✔ Ensures system reliability even if frontend callbacks fail

🔹 Backend Responsibilities Handled

Secure API design for order creation

Payment signature verification logic

Webhook event handling

Transaction logging and error handling

Database consistency for financial records

🔹 Why This Matters (Business Value)

🔐 Secure and fraud-resistant payment handling

⚡ Real-time transaction updates

📈 Scalable for high transaction volumes

💼 Production-level financial workflow experience

🔹 Tech Stack

Backend: Python, Django / FastAPI
Payment Gateway: Razorpay
Database: PostgreSQL / MySQL
Security: Signature Verification, Webhooks
Architecture: REST APIs 
`
    },

    103: {
      title: "Email & OTP Verification",
      image: ["/assets/RealConcepts/ema1.png", "/assets/RealConcepts/ema2.png", "/assets/RealConcepts/ema3.png", "/assets/RealConcepts/ema4.png"],
      description: `
✉️ Email Verification System (Secure Verification Link via SMTP)

Implemented a secure email verification workflow using SMTP, allowing users to activate their accounts through a time-bound verification link.

🔹 What I Built
    Email-based account verification link system
    Secure backend validation before activating user accounts
    Reliable email delivery using SMTP

🔹 Verification Flow
    User registers → backend generates a signed verification token
    Verification link is sent to the user’s email via SMTP
    User clicks the link → backend validates token & expiry
    Account is marked as verified / activated

✔ No OTP handling
✔ Simple and user-friendly verification

🔹 Email Sending (SMTP)

Configured SMTP email backend for production-style delivery

Used custom HTML email templates

Handled email failures and resend logic

🔹 Security Measures Implemented

Time-limited verification links

Token-based verification (signed & tamper-proof)

Single-use verification links

Prevented link reuse after successful activation

Rate-limited resend verification emails

🔹 Use Cases Covered

New user email verification

Account activation after signup

Email ownership validation

Resend verification link functionality

🔹 Backend Responsibilities

Token generation & validation

Email verification API endpoints

Account activation logic

Error handling for expired or invalid links

🔹 Tech Stack

Backend: Python, Django / FastAPI
Email: SMTP
Security: Signed Tokens, Expiry Validation
Templates: HTML Email Templates  
`
    },

    104: {
      title: "Redis Caching",
      image: ["/assets/RealConcepts/catche1.png", "/assets/RealConcepts/catche2.png"],
      description: `
⚡ Performance Optimization Using Redis & File-Based Caching

Implemented high-performance caching using local Redis and file-based caching to significantly reduce API response times and database load in a real project.

🔹 Measurable Impact

Reduced API response time from ~1.2 seconds to ~70 milliseconds

Improved overall application responsiveness

Minimized repeated database queries

🔹 What I Cached

Heavy and repetitive database queries

User profile and session-related data

Dashboard and analytics statistics

Frequently accessed API responses

🔹 Caching Strategy

Used Redis (local setup) for fast, in-memory caching

Applied file-based caching for fallback and static data

Defined TTLs based on data type:

⏱️ Short expiry (~30 seconds) for frequently changing data

⏳ Longer expiry (~1 hour) for relatively static data

Implemented manual cache invalidation on data updates

🔹 Backend Responsibilities

Identified performance bottlenecks using response timing

Integrated Redis into backend APIs

Designed cache keys and expiration policies

Handled cache invalidation to maintain data consistency

🔹 Why This Matters in Real Systems

🚀 Prevents database overload during high traffic

💰 Reduces infrastructure and server costs

📈 Supports thousands of concurrent API requests

⚡ Delivers faster user experience

🔹 Tech Stack

Backend: Python, Django / FastAPI
Caching: Redis (Local), File-Based Cache
Use Case: API optimization, DB load reduction  
`
    },

    105: {
      title: "Role-Based Access Control (RBAC)",
      image: ["/assets/RealConcepts/admin1.png", "/assets/RealConcepts/admin2.png", "/assets/RealConcepts/admin3.png"],
      description: `
🛂 Role-Based Access Control (Admin vs User)

Implemented a role-based access control system to separate Admin and Normal User access within the application, ensuring secure and restricted access to administrative features.

🔹 What I Implemented

Defined Admin and User roles

Restricted Admin Dashboard access to authorized users only

Ensured normal users cannot access admin-specific APIs or pages

🔹 Access Control Logic

Backend middleware validates user role on every protected request

Admin-only APIs are blocked for non-admin users

Frontend routes are conditionally rendered based on user role

✔ Prevents unauthorized access
✔ Protects sensitive admin features

🔹 Real Application Use Case

Admin dashboard accessible only to admins

Normal users can access standard application features

Attempted access to admin routes returns authorization errors

🔹 Backend Responsibilities

Role validation logic in authentication middleware

Permission checks before executing admin APIs

Proper error responses for unauthorized access

🔹 Tech Stack

Backend: Python, Django / FastAPI
Auth: JWT-based authentication
Access Control: Role-based authorization
`
    },

    106: {
      title: "Pagination & Filtering",
      image: ["/assets/RealConcepts/pag1.png", "/assets/RealConcepts/pag2.png", "/assets/RealConcepts/pag3.png", "/assets/RealConcepts/pag4.png"],
      description: `
📄 Server-Side Pagination & Filtering

Implemented server-side pagination using a standard pagination library to efficiently handle large API datasets (10,000+ records) and improve response performance.

🔹 What I Implemented

Paginated API responses to avoid loading large datasets at once

Used a pagination library to manage page size and navigation

Added filtering parameters to retrieve only required data

🔹 Pagination Implementation

Handled pagination using query parameters:

?page=1&page_size=10


Returned structured paginated responses including:

Total records / pages

Next and previous page indicators

Optimized API performance for large datasets

🔹 Filtering Capabilities

Implemented dynamic filtering based on:

Search keywords

Status

Date range

Category

Role

Combined pagination and filtering for efficient data retrieval

🔹 Backend Responsibilities

Integrated pagination library into API endpoints

Managed query parameters safely

Ensured consistent API response structure

Handled edge cases (empty results, invalid page numbers)

🔹 Why This Matters in Real Systems

⚡ Faster API responses

📉 Reduced server memory usage

📈 Scales well with growing data

🧭 Improved frontend data navigation

🔹 Tech Stack
Backend: Python, Django / FastAPI
Data Handling: Pagination Library
Use Case: Large dataset API optimization

`
    },

    107: {
      title: "API Security & Abuse Protection",
      image: ["/assets/RealConcepts/rate1.png", "/assets/RealConcepts/rate2.png", "/assets/RealConcepts/rate3.png"],
      description: `
🛡️ API Security & Abuse Protection

Implemented backend API security and request throttling to protect the application from unauthorized access, bots, and abusive traffic, following real-world backend security practices.

🔹 What I Implemented

Secured APIs using authentication middleware

Blocked unauthorized and suspicious requests

Applied rate limiting to prevent bot attacks and API abuse

🔹 Core Security Measures

Input validation and sanitization

Protection against SQL injection

Strict CORS configuration

Enforced secure request handling

Authentication checks on protected endpoints

🔹 Rate Limiting & Bot Protection

Limited requests for unauthenticated users

Higher request limits for authenticated users

Automatically blocked IPs or clients showing bot-like behavior

Prevented brute-force and spam API calls

🔹 Real-World Use Cases

Protect login and public APIs from abuse

Prevent excessive or automated API calls

Secure sensitive endpoints from unauthorized users

🔹 Backend Responsibilities

Integrated rate-limiting logic in API layer

Differentiated limits for public vs authenticated requests

Returned proper HTTP responses (401, 403, 429)

Logged blocked requests for monitoring

🔹 Tech Stack

Backend: Python, Django / FastAPI
Security: Auth Middleware, Rate Limiting
Protection: Bot & Abuse Prevention 

`
    },

    108: {
      title: "Logging & Monitoring",
      image: ["/assets/RealConcepts/log1.png"],
      description: `
📊 Logging & Monitoring System

Implemented a centralized logging and monitoring setup to track application activity, detect failures early, and support debugging in real-world scenarios.

🔹 What I Implemented

Added structured logging across critical backend workflows

Tracked system behavior, user actions, and failures

Ensured logs are available for both development and production analysis

🔹 Events Logged

Authentication attempts (login / logout)

Payment-related events

Application and server errors

Admin actions and sensitive operations

API response time and performance metrics

🔹 Log Storage & Handling

File-based logs for persistent storage

Database logs for audit and tracking purposes

Console logs for real-time debugging during development

🔹 Monitoring & Alerts

Set up alerts for critical failures and errors

Enabled faster issue detection and resolution

Helped identify performance bottlenecks and abnormal behavior

🔹 Backend Responsibilities

Designed log structure and severity levels

Integrated logging across services and APIs

Handled error logging and exception tracking

Ensured sensitive data is excluded from logs

🔹 Tech Stack

Backend: Python, Django / FastAPI
Logging: File Logs, DB Logs, Console Logs
Monitoring: Error Alerts, Performance Tracking

`
    },

    109: {
      title: "Deployment Concepts",
      image: ["/assets/RealConcepts/deploy2.png", "/assets/RealConcepts/deploy1.jpg"],
      description: `
🚀 Application Deployment & Production Setup

Deployed backend applications using Docker, Render, and AWS EC2, following production-ready deployment practices to ensure reliability, security, and scalability.

🔹 Deployment Platforms Used

☁️ Render – Deployed backend APIs for cloud hosting

🌎 AWS EC2 – Hosted application on a production Linux server

🐳 Docker – Containerized application for consistent local and server environments

🔹 Deployment Responsibilities

Configured applications for production environments

Managed environment-specific settings

Ensured smooth application startup and stability

🔹 Production Configuration Implemented

Environment variables for secrets and credentials

CORS configuration for secure API access

HTTPS-enabled communication

Application server setup using Gunicorn

Reverse proxy configuration using Nginx

🔹 Why This Matters in Real Systems

🚀 Consistent deployments across environments

🔐 Secure handling of sensitive configuration

📈 Scalable setup for future growth

🧩 Reduced deployment-related issues

🔹 Tech Stack

Backend: Python, Django REST / FastAPI
Deployment: Docker, Render, AWS EC2
Server: Gunicorn, Nginx
Security: HTTPS, Environment Variables 
`
    },

    110: {
      title: "Search Optimization (Debounced Search)",
      image: ["/assets/RealConcepts/react1.png", "/assets/RealConcepts/react2.png"],
      description: `
🔍 Debounced Search Optimization (Movie Search Feature)

Implemented debounced search functionality in an IMDb-style movie review application to optimize API usage and improve overall user experience.

🔹 What I Implemented

Added debounce logic to the movie search input

Prevented unnecessary API calls while the user is typing

Ensured only the final search query triggers the API request

🔹 Performance Improvement

Reduced API calls from ~10 requests/second to 1 request

Lowered backend load during high-frequency user input

Improved frontend responsiveness and smoothness

🔹 How It Works

User typing triggers a debounce timer

System waits 300ms after the last keystroke

Only the final input value is sent to the API

🔹 Real-World Impact

⚡ Faster search experience

📉 Reduced server and API costs

🚀 Scales better with multiple concurrent users

🎬 Smooth movie search similar to real IMDb behavior

🔹 Tech Stack

Frontend: React / JavaScript
Optimization: Debounce Technique
Use Case: Movie search & review system
`
    },

    111: {
      title: "React State Management",
      image: ["/assets/RealConcepts/state1.png"],
      description: `
⚛️ React State Management (Production-Ready)

Implemented scalable state management in React applications to handle global UI state, data flow, and persistent user experience across the app.

🔹 What I Implemented

Used Context API for lightweight global state

Built custom hooks to encapsulate reusable logic

Implemented Redux Toolkit for complex and shared application state

Persisted critical data using LocalStorage

🔹 State Managed Across the App

User authentication & session state

Search and filter selections

Theme mode (light / dark)

Payment and transaction status

Admin and dashboard data

🔹 Architecture Benefits

Clean separation of concerns

Predictable and centralized state updates

Reduced prop drilling

Improved maintainability and scalability

🔹 Real-World Impact

🔄 Consistent UI behavior across pages

⚡ Faster state updates and smoother UX

🧩 Easy to extend features without breaking existing logic

💾 User preferences persist across page reloads

🔹 Tech Stack

Frontend: React
State Management: Context API, Redux Toolkit
Utilities: Custom Hooks, LocalStorage
`
    }

  };
  const project = projectData[id];
  return (
    <div className="project-details">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <h1>{project.title}</h1>
      <div className="image-slider">
        <button className="nav-btn left" onClick={prevImage}>❮</button>
        <img
          src={project.image[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="details-image"
        />
        <button className="nav-btn right" onClick={nextImage}>❯</button>
      </div>
      <div className="dots">
        {project.image.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <pre className="details-description">{project.description}</pre>
    </div>
  );
}
export default ProjectDetails;
