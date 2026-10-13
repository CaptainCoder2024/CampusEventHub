# CampusEventHub - University Event Management Platform

CampusEventHub is a modern full-stack web application designed to connect university students, student clubs, and campus administrators. The platform streamlines campus life by enabling event discovery, attendee registration, attendance verification, and campus community discussions.

---

## 🌟 Key Features

- **Role-Based Access Control (RBAC):**
  - **Student / Participant:** Explore upcoming campus workshops, hackathons, sports, and cultural festivals; register with 1-click; track personal event participation history and activity points.
  - **Club / Event Organizer:** Host campus events, review student registration lists, approve attendees, and confirm event participation.
  - **System Admin:** Moderate submitted events, manage user permissions, approve organizer requests, and lock/unlock accounts.
- **Interactive Community Feed:** Share takeaways, photos, and insights after participating in campus events with comments and likes.
- **Event Moderation Workflow:** Multi-stage lifecycle (`pending` ➔ `approved` / `rejected`) ensuring only verified campus activities are publicly listed.
- **API Documentation:** Interactive OpenAPI/Swagger documentation integrated directly at `/api-docs`.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Radix UI, Lucide Icons, Sonner.
- **Backend:** Node.js, Express.js, JSON Web Tokens (JWT), Joi validation, Swagger-JSDoc.
- **Database:** MongoDB Atlas (Mongoose ODM).

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas connection URI

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev