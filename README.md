# NoteVault

A full-stack note management application that enables users to securely create, organize, and manage personal notes.

Built with Node.js, Express.js, PostgreSQL, and JWT authentication.

Live Application: [https://your-frontend-url](https://yukay2907.github.io/NoteVault-Frontend/)

Backend API: https://notevault-wzmt.onrender.com

---

## Highlights

* JWT-based user authentication
* Secure password hashing with bcrypt
* Create, view, update, and delete notes
* PostgreSQL database integration
* User-specific note management
* Responsive frontend built with HTML, CSS, and JavaScript
* Full-stack application deployed on Render and Neon

---

## Overview

NoteVault is a personal note management platform designed to help users store and organize their notes in a secure environment.

Each user has an individual workspace where notes can be created, updated, and managed independently. Authentication is handled using JSON Web Tokens (JWT), while passwords are securely hashed using bcrypt before being stored in the database.

The project was built to strengthen full-stack development skills, covering frontend development, backend API design, authentication, database management, and deployment.

---

## Screenshots

### Landing Page

<img width="1919" height="890" alt="image" src="https://github.com/user-attachments/assets/275611d2-6d0f-42c2-9697-9cd9bfbbff17" />

### Authentication

<img width="1917" height="898" alt="image" src="https://github.com/user-attachments/assets/cf9e69af-0cab-4bfc-ae4b-5c33c5481aa1" />


### Dashboard

<img width="1913" height="898" alt="image" src="https://github.com/user-attachments/assets/9370d180-650b-414e-ab40-e08e61d24c1f" />


---

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### Authentication

* JWT (JSON Web Tokens)
* bcrypt

### Deployment

* Render
* Neon PostgreSQL

---

## Application Flow

1. User registers an account.
2. Password is hashed before storage.
3. User signs in using valid credentials.
4. Server generates a JWT token.
5. Token is stored in local storage.
6. Protected routes validate the token before processing requests.
7. Users can create, update, and manage their own notes.

---

## Installation

### Backend

```bash
git clone https://github.com/yukay2907/NoteVault-Backend.git
cd NoteVault-Backend
npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

Start the server:

```bash
npm start
```

### Frontend

```bash
git clone https://github.com/yukay2907/NoteVault-Frontend.git
```

Update the API URL in the frontend configuration and run using Live Server.
