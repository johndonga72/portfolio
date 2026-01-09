import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.css";
import { useState } from "react";
function ProjectDetails() {
  const navigate = useNavigate();
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
  const projectData = {
    1: {
      title: "Unified Healthcare Platform",
      image: [
        "/assets/PrimaryProjects/healthcare-overview.png",
        "/assets/PrimaryProjects/healthcare-symptom-checker.png",
        "/assets/PrimaryProjects/healthcare-hospital-search.png"
      ],
      description: `
🏥 Unified Healthcare Platform – AI-Powered Medical Assistance System

The **Unified Healthcare Platform** is an AI-driven healthcare application designed to provide users with **reliable medical insights**, **symptom analysis**, and **hospital discovery** using modern AI technologies.

This project focuses on combining **GPT-based reasoning** with **Knowledge Graphs** to deliver accurate, contextual, and explainable healthcare information.

---

🔹 Project Objective

• Help users understand symptoms before visiting a hospital  
• Provide AI-based disease insights  
• Recommend nearby hospitals and medical resources  
• Improve accessibility to healthcare information  

---

🔹 Core Features Implemented

🧠 **AI Symptom Checker**  
Users can enter symptoms and receive:
• Possible conditions  
• AI-generated explanations  
• Context-aware medical guidance  

📚 **Disease Insights Engine**  
• Uses Knowledge Graphs for structured medical data  
• GPT enhances explanations with natural language reasoning  

📺 **Health Video Recommendations**  
• Suggests relevant YouTube medical videos  
• Improves user understanding with visual explanations  

📍 **Nearby Hospital Finder**  
• Location-based hospital search  
• Integrated with map-based queries  

📄 **PDF Report Generation**  
• Generates downloadable reports of user queries  
• Useful for doctor consultations  

💊 **Online Pharmacy Integration**  
• Redirects users to pharmacy platforms  
• Simplifies medicine access  

🧠 **Mental Health Support**  
• Provides helpline references  
• Supports basic mental wellness guidance  

---

🔹 System Architecture Overview

Frontend handles:
• User inputs  
• AI responses display  
• Report downloads  

Backend manages:
• GPT API communication  
• Knowledge Graph queries  
• Medical data processing  

This separation ensures **scalability and clean architecture**.

---

🔹 Learning Outcomes

✅ Real-world usage of GPT APIs  
✅ Knowledge Graph integration (Neo4j concepts)  
✅ AI + structured data combination  
✅ Healthcare domain understanding  
✅ Clean UI-to-AI data flow  
✅ Building explainable AI systems  

---

🔹 Tech Stack Used

Frontend: HTML, CSS, JavaScript, Bootstrap  
Backend: Flask  
AI: GPT API  
Knowledge Graph: Neo4j  
Additional Tools: PDF generation, Map APIs  

---

📌 Why This Project Matters

This project demonstrates my ability to:
• Build AI-powered applications  
• Work with real-world healthcare problems  
• Integrate multiple technologies into one system  
• Design scalable, user-focused solutions  

It reflects **practical AI engineering**, not just theoretical knowledge.
`
    },
    2: {
      title: "Smart Online Course Registration Portal (SOCRP)",
      image: [
        "/assets/PrimaryProjects/socrp-overview.png",
        "/assets/PrimaryProjects/socrp-dashboard.png",
        "/assets/PrimaryProjects/socrp-profile-sharing.png"
      ],
      description: `
🎓 Smart Online Course Registration Portal (SOCRP)

The **Smart Online Course Registration Portal (SOCRP)** is a full-stack web application built to automate **student registration**, **profile verification**, and **course enrollment** with secure authentication and admin control.

This system replaces manual enrollment workflows with a **digital, scalable, and transparent platform** for students, admins, and employers.

---

🔹 Project Objective

• Automate student registration and account verification  
• Simplify course enrollment and profile management  
• Enable admins to manage users efficiently  
• Allow secure profile sharing with controlled access  
• Support online payments for premium courses  

---

🔹 Core Features Implemented

👤 **User Registration & Verification**  
• Auto-generated Membership ID (e.g., SOCRP-2025-00001)  
• Email verification before account activation  
• Secure JWT-based authentication  

📄 **Profile Management System**  
• Editable personal, education, and experience details  
• Resume upload with preview and download support  
• Profile data stored securely in PostgreSQL  

🛠️ **Admin Dashboard**  
• View all registered users  
• Block / unblock accounts  
• Monitor active, inactive, and pending users  
• Dashboard-level analytics  

🔗 **Profile Sharing with Expiry**  
• Generate temporary shareable profile links  
• Expiry options: 1 day, 2 days, 7 days  
• Employers can view profile and download resumes  

💳 **Payment Integration**  
• Secure payment gateway integration  
• Enables access to premium courses  
• Tracks payment status reliably  

---

🔹 System Architecture Overview

Frontend handles:
• UI rendering and routing  
• User interaction and form validation  
• Profile sharing and dashboard views  

Backend manages:
• Authentication and authorization  
• CRUD operations for users and profiles  
• Email verification and token handling  

Database ensures:
• Reliable storage of users, courses, and profiles  
• Fast and structured data access  

---

🔹 Learning Outcomes

✅ Real-world JWT authentication flow  
✅ Role-based access handling  
✅ Secure email verification system  
✅ Admin dashboard design principles  
✅ Profile sharing with expiry logic  
✅ Full-stack data flow understanding  

---

🔹 Tech Stack Used

Frontend: React.js, Normal CSS  
Backend: Django REST Framework  
Database: PostgreSQL  
Authentication: JWT, Email Verification  
API Testing: Postman  
Deployment: Vercel (Frontend), Render (Backend)  

---

📌 Why This Project Matters

This project demonstrates my ability to:
• Build **production-ready full-stack systems**  
• Implement real authentication & authorization  
• Design admin-level workflows  
• Handle payments and secure data  
• Create scalable, maintainable applications  

It reflects **industry-level backend + frontend integration**, not just CRUD functionality.
`
    },
    3: {
      title: "Movie Explorer App",
      image: [
        "/assets/PrimaryProjects/movie-search.png",
        "/assets/PrimaryProjects/movie-details.png",
        "/assets/PrimaryProjects/movie-responsive.png"
      ],
      description: `
🎬 Movie Explorer App

The **Movie Explorer App** is a frontend-focused React application that allows users to **search, browse, and explore movie details** using the OMDb API.  
This project helped me understand **API integration, routing, and UI state handling** in real-world React applications.

---

🔹 Project Objective

• Build a clean movie search experience using a public API  
• Practice API consumption and async data handling  
• Implement dynamic routing for movie detail pages  
• Create a responsive UI without using frameworks  

---

🔹 Core Features Implemented

🔍 **Movie Search Functionality**  
• Search movies by title using OMDb API  
• Dynamic API requests with Axios  
• Displays real-time results  

🎞️ **Movie Details View**  
• Dedicated details page for each movie  
• Displays poster, title, year, genre, rating, and plot  
• Implemented using React Router DOM  

📱 **Responsive User Interface**  
• Mobile-friendly layout  
• Pure CSS styling without UI libraries  
• Clean and simple design  

⚡ **Optimized Frontend Flow**  
• Loading state while fetching data  
• Error handling for invalid searches  
• Conditional rendering based on API response  

---

🔹 Application Flow

1️⃣ User searches for a movie  
2️⃣ Frontend sends request to OMDb API  
3️⃣ Results displayed dynamically  
4️⃣ Clicking a movie opens a detailed view  
5️⃣ Routing handled fully on frontend  

---

🔹 Learning Outcomes

✅ Working with third-party APIs  
✅ Managing async data using Axios  
✅ Client-side routing using React Router  
✅ Component-based UI architecture  
✅ Responsive design using pure CSS  

---

🔹 Tech Stack Used

Frontend: React.js (Vite)  
API Integration: OMDb API  
HTTP Client: Axios  
Routing: React Router DOM  
Styling: Pure CSS  

---

📌 Why This Project Matters

This project demonstrates my ability to:
• Build API-driven frontend applications  
• Handle real-world data fetching scenarios  
• Structure scalable React components  
• Create responsive layouts without frameworks  

It reflects **strong frontend fundamentals** and real API usage.
`
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
    },
    21: {

      title: "YouTube UI Clone (HTML & CSS)",
      image: ["/assets/miniprojects/youtube1.jpg", "/assets/miniprojects/youtube2.jpg"],
      description: `
🎥 YouTube UI Clone – Frontend Layout Practice Project

This project focuses on recreating the **YouTube user interface** using only **HTML and CSS**, with no JavaScript or frameworks.  
The goal was to understand **real-world UI layout structure** and improve CSS styling skills.

---

🔹 What I Built

• Header section with logo, search bar, and icons  
• Sidebar navigation similar to YouTube  
• Video grid layout with thumbnails  
• Channel info, views, and video metadata  
• Responsive layout for different screen sizes  

---

🔹 Key Learnings

🧩 Structuring large layouts using semantic HTML  
🎨 Advanced CSS styling and spacing techniques  
📐 Flexbox & Grid for responsive layouts  
📱 Mobile-friendly UI adjustments using media queries  

---

🔹 Why This Project Matters

✅ Strengthens core frontend fundamentals  
✅ Improves real-world UI replication skills  
✅ Builds confidence before moving to JavaScript & React  
✅ Demonstrates strong CSS layout knowledge  

---

🔹 Tech Stack Used

Frontend: HTML5, CSS3  
Layout: Flexbox, CSS Grid  
Design Focus: Responsiveness & UI consistency  

---

📌 Note:
This is a **static UI project** created purely for learning and design practice purposes.
`
    },
    22: {
      title: "APJ Abdul Kalam Tribute Page",
      image: ["/assets/miniprojects/apj1.jpg", "/assets/miniprojects/apj2.jpg"],
      description: `
🇮🇳 APJ Abdul Kalam Tribute Page – HTML & CSS Practice Project

This project is a **tribute web page** dedicated to **Dr. A. P. J. Abdul Kalam**, created using **pure HTML and CSS**.  
The objective was to combine **web design skills** with **content presentation** to tell an inspiring real-life story.

---

🔹 What I Designed

• Structured biography section  
• Timeline of life events and achievements  
• Inspirational quotes section  
• Image and content alignment  
• Clean and readable layout  

---

🔹 Key Learnings

🧱 Semantic HTML for meaningful content structure  
🎨 CSS styling for typography and spacing  
📐 Proper alignment using Flexbox  
🖋️ Presenting long-form content clearly  
📱 Basic responsive adjustments  

---

🔹 Why This Project Is Important

✅ Improved understanding of content-based layouts  
✅ Strengthened CSS fundamentals  
✅ Learned to present information in a story format  
✅ Good practice for blog-style and informational websites  

---

🔹 Tech Stack Used

Frontend: HTML5, CSS3  
Layout: Flexbox  
Focus Areas: Typography, Content flow, UI readability  

---

📌 Note:
This project was created as a **learning exercise** to practice static webpage design and content structuring.
`
    },
    23: {
      title: "Admin Panel User Interface",
      image: ["/assets/miniprojects/admin1.jpg", "/assets/miniprojects/admin2.jpg", "/assets/miniprojects/admin3.jpg", "/assets/miniprojects/admin4.jpg"],
      description: `
  🛠️ Admin Panel User Interface – React + Tailwind CSS

  This project focuses on building a **modern and responsive admin dashboard UI** using **React (Vite)** and **Tailwind CSS**.  
  The primary goal was to strengthen my **Tailwind utility-first styling skills** and learn how real admin panels are structured.

  ---

  🔹 UI Sections Implemented

  • Sidebar navigation with active states  
  • Top navbar with user actions  
  • Dashboard cards (stats / overview)  
  • Table layout for users or records  
  • Responsive layout for mobile & desktop  

  ---

  🔹 Key Learnings

  🎯 Utility-first styling with Tailwind CSS  
  🧩 Reusable React components  
  📐 Responsive layouts using Flexbox & Grid  
  🎨 Consistent design system using Tailwind classes  
  ⚡ Fast development using Vite setup  

  ---

  🔹 Why This Project Matters

  ✅ Admin panels are used in almost every real application  
  ✅ Demonstrates frontend structure & layout skills  
  ✅ Shows practical Tailwind CSS knowledge  
  ✅ Helpful for SaaS, CRM, ERP, and dashboard systems  

  ---

  🔹 Tech Stack Used

  Frontend: React.js (Vite)  
  Styling: Tailwind CSS  
  Layout: Flexbox, CSS Grid  
  Tools: VS Code, Git  

  ---

  📌 Note:
  This is a **UI-focused project** created to practice dashboard layouts and Tailwind CSS patterns.
  `
    },
    24: {
      title: "Personal Portfolio Website",
      image: ["/assets/miniprojects/portfolio1.jpg", "/assets/miniprojects/portfolio2.jpg", "/assets/miniprojects/portfolio3.jpg"],
      description: `
🌐 Personal Portfolio Website – Project Overview

This project is my **personal portfolio website**, created to present my skills, projects, and practical experience in a clean and professional way.  
It reflects my learning journey and showcases both **frontend development** and **UI design practices**.

---

🔹 What I Built

• Home section with personal introduction  
• Skills section highlighting technical stack  
• Projects & mini projects listing  
• Blog-style real concepts explanation  
• Contact section for easy communication  

---

🔹 What I Learned from This Project

⚛️ Building reusable components using React  
🎨 Styling layouts efficiently using Tailwind CSS  
📐 Combining Tailwind with custom CSS when required  
📱 Making the website fully responsive  
🧭 Structuring a real-world frontend project  

---

🔹 Why This Project Is Important

✅ Acts as an online resume  
✅ Shows real React + Tailwind usage  
✅ Demonstrates responsive UI skills  
✅ Easy to scale with blogs and dashboards  

---

🔹 Tech Stack Used

Frontend: React.js (Vite)  
Styling: Tailwind CSS, Custom CSS  
Routing: React Router  
Tools: VS Code, Git  

---

🔹 Deployment Ready

The project is configured for deployment using:
• Vercel  
• Netlify  

Production builds are optimized for performance.

---

📌 Note:
This portfolio will keep evolving as I add more projects, system designs, and real-world concepts.
`
    },
    25: {
      title: "React Counter App",
      image: ["/assets/miniprojects/counter.jpg"],
      description: `
🔢 React Counter App – Project Overview

The **React Counter App** is a beginner-friendly project created to understand how React handles **state**, **events**, and **component re-rendering**.  
This project helped me build a strong foundation in React core concepts.

---

🔹 What I Implemented

• Increment counter value  
• Decrement counter value  
• Reset counter to initial state  
• Button-based event handling  
• Clean and simple UI  

---

🔹 Key React Concepts Practiced

⚛️ useState Hook for state management  
🔁 Component re-rendering on state updates  
🖱️ Handling click events  
🧩 Component structure and JSX  
🎨 Basic CSS styling for UI  

---

🔹 Learning Outcomes

✅ Clear understanding of React state flow  
✅ Learned how UI updates automatically on state change  
✅ Improved confidence with React hooks  
✅ Foundation for building more complex apps  

---

🔹 Why This Project Matters

Even though it is a simple app, it demonstrates:
• Core React fundamentals  
• Event-driven UI behavior  
• Clean component-based design  

This project acts as a **stepping stone** toward larger React applications.

---

🔹 Tech Stack Used

Frontend: React.js  
Language: JavaScript  
Styling: CSS  
Tools: VS Code  

---

📌 Note:
This project helped me transition from static UI to **dynamic, interactive applications** using React.
`
    },
    26: {
      title: "Walmart Sales Analysis",
      image: ["/assets/miniprojects/walmart1.jpg", "/assets/miniprojects/walmart2.jpg"],
      description: `
📊 Walmart Sales Analysis – Project Overview

The **Walmart Sales Analysis** project focuses on analyzing real-world retail sales data using **MySQL** to extract meaningful business insights.  
This project strengthened my understanding of **SQL querying, data aggregation, and analytical thinking**.

---

🔹 Dataset Overview

The dataset contains:
• Branch information  
• Product categories  
• Sales amount and quantity  
• Customer type and payment method  
• Date and time of purchase  

---

🔹 Analysis Performed

✔️ Identified **top-selling products**  
✔️ Analyzed **daily, monthly, and yearly revenue trends**  
✔️ Compared **branch-wise performance**  
✔️ Studied **customer purchasing behavior**  
✔️ Evaluated **payment method usage**  

---

🔹 SQL Concepts Used

🗄️ SELECT, WHERE, ORDER BY  
📊 GROUP BY, HAVING  
📈 Aggregate functions (SUM, COUNT, AVG)  
🔗 JOIN operations  
⏱️ Date & time functions  
📑 Subqueries  

---

🔹 Key Insights Generated

• Highest revenue-generating branch  
• Most profitable product categories  
• Peak sales hours and days  
• Customer types contributing maximum revenue  

---

🔹 Learning Outcomes

✅ Improved SQL query optimization  
✅ Strong understanding of business-oriented data analysis  
✅ Ability to translate raw data into insights  
✅ Hands-on experience with real retail data  

---

🔹 Why This Project Is Important

This project demonstrates my ability to:
• Work with real datasets  
• Perform structured data analysis  
• Answer business-driven questions using SQL  

---

🔹 Tech Stack Used

Database: MySQL  
Language: SQL  
Tools: MySQL Workbench  

---

📌 Note:
This project improved my confidence in **data-driven decision making** using SQL.
`
    },
    27: {
      title: "Employee Management Backend (GraphQL API)",
      image: ["/assets/miniprojects/graphql1.png", "/assets/miniprojects/graphq2.png"],
      description: `
👨‍💼 Employee Management Backend – GraphQL API

This project is a **backend-only system** built using **Django + GraphQL** to manage employee records efficiently.  
The main goal was to understand **GraphQL in real-world backend development** and compare it with REST APIs.

---

🔹 Project Overview

The system allows:
• Creating employee records  
• Reading employee details  
• Updating employee information  
• Deleting employees  

All operations are handled through **GraphQL queries and mutations** instead of traditional REST endpoints.

---

🔹 Core Features Implemented

✔️ Employee CRUD operations using GraphQL  
✔️ Schema-based API design  
✔️ Querying only required fields  
✔️ Filtering employees by role, department, or status  
✔️ Pagination for large employee datasets  
✔️ Secure authentication using JWT  

---

🔹 GraphQL Concepts Practiced

🧩 GraphQL Schema & Types  
🧠 Queries & Mutations  
📥 Input Types for validation  
📄 Nested queries  
🔍 Filtering & pagination  
🛡️ Authorization at resolver level  

---

🔹 Authentication & Security

🔐 Implemented **JWT-based authentication**:
• Login mutation generates access token  
• Protected employee mutations  
• Token validation on each request  

Ensures only authorized users can modify employee data.

---

🔹 Why GraphQL Instead of REST?

🚀 Fetch only required data (no over-fetching)  
⚡ Single endpoint for all operations  
📈 Better frontend-backend communication  
🔄 Flexible query structure  

This project helped me clearly understand **when GraphQL is better than REST**.

---

🔹 Learning Outcomes

✅ Deep understanding of GraphQL architecture  
✅ Writing efficient resolvers  
✅ Handling pagination & filtering in GraphQL  
✅ Securing APIs with JWT  
✅ Backend scalability concepts  

---

🔹 Tech Stack Used

Backend: Django  
API Layer: GraphQL (Graphene-Django)  
Authentication: JWT  
Database: SQLite / PostgreSQL  
Tools: GraphQL Playground, Postman  

---

📌 Note:
This project strengthened my backend skills and prepared me for **production-level GraphQL APIs**.
`
    },
    28: {
      title: "Inventory Management System (FastAPI)",
      image: [
        "/assets/MiniProjects/fastapi-inventory-crud.png",
        "/assets/MiniProjects/fastapi-inventory-swagger.png",
        "/assets/MiniProjects/fastapi-inventory-react.png"
      ],
      description: `
📦 Inventory Management System – FastAPI CRUD Project

This project is a **full-stack practice application** built to understand how **FastAPI works in real backend development** and how it integrates smoothly with a React frontend.

The main focus was implementing **clean CRUD operations**, API design, and frontend-backend communication.

---

🔹 Project Overview

The system manages basic inventory items such as:
• Product name  
• Quantity  
• Price  
• Category  

Users can:
✔️ Add new inventory items  
✔️ View all products  
✔️ Update existing product details  
✔️ Delete inventory records  

---

🔹 Backend Implementation (FastAPI)

⚡ FastAPI was used because of its:
• High performance  
• Automatic API documentation  
• Clean and modern syntax  

Key backend features:
✔️ RESTful CRUD APIs  
✔️ Pydantic models for request validation  
✔️ Automatic Swagger UI ('/ docs')  
✔️ Proper HTTP status codes  
✔️ Modular route structure  

---

🔹 API Documentation (Swagger UI)

One of the best learning points:
📘 FastAPI auto-generates interactive API docs.

Using Swagger UI, I was able to:
• Test APIs directly in browser  
• Validate request/response structure  
• Debug endpoints faster  

This helped me understand **professional API workflows**.

---

🔹 Frontend Implementation (React)

🖥️ React was used to:
• Display inventory list  
• Handle form submissions  
• Send API requests using fetch/axios  
• Update UI dynamically after CRUD operations  

Styled using **normal CSS** to keep the project simple and focused on logic.

---

🔹 Data Flow Architecture

React UI  
⬇️ API Requests  
FastAPI Backend  
⬇️  
Database (In-memory / SQLite)

This project helped me understand **real frontend-backend data flow** clearly.

---

🔹 Learning Outcomes

✅ Hands-on experience with FastAPI  
✅ REST API design principles  
✅ Request validation using Pydantic  
✅ Swagger documentation usage  
✅ React + API integration  
✅ CRUD logic and error handling  

---

🔹 Tech Stack Used

Backend: FastAPI  
Frontend: React.js  
Styling: CSS  
API Style: REST  
Docs: Swagger UI (Auto-generated)  

---

📌 Note:
This project gave me confidence to build **scalable FastAPI backends** and prepared me for larger API-driven systems.
`
    },
    11: {

      title: "Loyalty Points & Reward Optimization",
      description: `
      🎯 Loyalty Points and Reward Optimization – Data Analysis Case Study

      This project simulates a loyalty rewards system for a betting platform, focusing on user activity analysis and reward optimization through data-driven decision making.

      🔍 Problem Statement

      The goal of this analysis was to:
      • Calculate loyalty points for users based on their activity  
      • Convert loyalty points into monetary rewards using multiple formulas  
      • Identify the top-performing users with the highest loyalty points  
      • Compare different reward calculation formulas  
      • Determine the most effective and fair reward distribution strategy  

      📊 Analysis Workflow (Sequence-Based)

      1️⃣ Collected and structured user activity data  
      2️⃣ Calculated loyalty points using predefined rules  
      3️⃣ Applied multiple reward conversion formulas  
      4️⃣ Ranked users based on loyalty scores  
      5️⃣ Visualized results for comparison and insights  
      6️⃣ Evaluated formulas to select the optimal reward model  

      📈 Key Insights

      • Identified top users contributing maximum platform engagement  
      • Highlighted differences between reward formulas  
      • Demonstrated how data analysis improves fairness and profitability  
      • Showed real-world application of analytical decision making  

      🛠️ Technologies Used

      Python – Core programming  
      Pandas – Data manipulation and analysis  
      NumPy – Numerical computations  
      Matplotlib / Seaborn – Data visualization and comparison  
      `,
      image: ["/assets/RealConcepts/loyalty-analysis.png"],
    },
    12: {
      title: "Hospital Appointment & Doctor Availability System",
      description: `
    🏥 Hospital Management – Appointment Booking Case Study

    This project focuses on designing a simple hospital management system that helps patients check doctor availability and book appointments efficiently.

    🔍 What the System Covers
    • Doctor availability tracking  
    • Patient appointment booking flow  
    • Basic user authentication for patients  
    • Organized data handling for doctors and appointments  

    📩 Notification Concept
    • Email notifications for appointment confirmation  
    • Serverless email setup for scalable alerts  

    📐 System Design Learning
    • Clean backend architecture using MVC pattern  
    • Database modeling for doctors, patients, and appointments  
    • Separation of frontend, backend, and notification services  

    🛠️ Technologies Referenced
    Backend: Django  
    Database: PostgreSQL  
    Auth: Session-based authentication  
    Email Service: Serverless Framework (concept-based)  

    📘 Key Takeaway
    This project helped me understand real-world hospital workflows, backend design thinking, and how scalable notification systems are integrated in production applications.
    `,
      image: ["/assets/RealConcepts/hospital-system.png"],
    },

  };
  const project = projectData[id];
  return (
    <div className="project-details">
      <button
        className="back-btn"
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/");
          }
        }}
      >
        ← Back
      </button>

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
