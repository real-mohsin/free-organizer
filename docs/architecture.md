# Free Organizer Architecture

## Overview

Free Organizer is an open-source web application designed to help freelancers manage their business from a single platform.

Instead of using multiple tools for clients, projects, payments, invoices, reports, and analytics, Free Organizer combines everything into one simple and lightweight application.

---

## Technology Stack

### Frontend

- React
- TypeScript
- Zustand
- React Router
- Recharts
- Custom CSS (No UI Framework)

### Backend (Planned)

- Node.js
- Express
- MongoDB
- JWT Authentication

---

## Project Goals

- Lightweight
- Fast
- Open Source
- Easy to Contribute
- Easy to Self Host
- Scalable Architecture

---

## Frontend Structure

src/

- assets/
- components/
- constants/
- contexts/
- hooks/
- layouts/
- pages/
- routes/
- services/
- store/
- styles/
- types/
- utils/

---

## Data Flow

User Action

↓

Component

↓

Service

↓

API (Future)

↓

Backend

↓

Database

↓

Response

↓

UI Update

---

## State Management

Zustand is used for global state management.

Examples:

- Authentication
- User Settings
- Theme
- Notifications

Most page-specific state should remain local to components.

---

## API Integration

During UI development, services will use mock data.

Once the backend is completed, mock services will be replaced with API requests without changing UI components.

---

## Future Architecture

- REST API
- Role-Based Access Control
- Docker Support
- Swagger Documentation
- GitHub Actions
- AI Integrations