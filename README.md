# Zoom Clone - MERN Stack Video Conferencing App

A full-stack video conferencing application built with the MERN stack (MongoDB, Express, React, Node.js) and WebRTC/Socket.io for real-time communication.

**Live Demo:** [https://project-3bu5x.vercel.app/](https://project-3bu5x.vercel.app/)

## Features

- **User Authentication:** Secure Sign Up and Log In functionality.
- **Real-time Video Calling:** Seamless P2P video conferencing using WebRTC.
- **Instant Messaging:** Built-in chat feature using Socket.io.
- **Responsive UI:** Clean and modern interface built with React and Material-UI.

## Tech Stack

- **Frontend:** React.js, Material-UI (MUI), Axios, Socket.io-client
- **Backend:** Node.js, Express.js, Mongoose, Socket.io
- **Database:** MongoDB Atlas

## Local Setup Instructions

### 1. Prerequisites
- Node.js (v18 or v20 recommended)
- MongoDB Atlas Account (for database connection)

### 2. Clone the Repository
\`\`\`bash
git clone https://github.com/Abhijeet1102/Zoom.git
cd Zoom
\`\`\`

### 3. Install Dependencies
Open two terminals, one for frontend and one for backend.

**Backend:**
\`\`\`bash
cd backend
npm install
\`\`\`

**Frontend:**
\`\`\`bash
cd frontend
npm install
\`\`\`

### 4. Environment Variables
Create a \`.env\` file in the \`backend\` directory and add your MongoDB connection string:
\`\`\`env
MONGO_URI=your_mongodb_connection_string
\`\`\`

### 5. Run the Application

**Start Backend Server (Port 8000):**
\`\`\`bash
cd backend
npm run dev
\`\`\`

**Start Frontend Server (Port 3000/3001):**
\`\`\`bash
cd frontend
npm start
\`\`\`

The frontend will start on \`http://localhost:3000\`, and the backend will listen on \`http://localhost:8000\`.

## Deployment Guide

### Deploying the Backend (Render)
1. Create a New Web Service on Render.
2. Select the repository and set the **Root Directory** to `backend`.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Add an Environment Variable: `MONGO_URI` with your MongoDB connection string.
6. Deploy and copy the live backend URL.

### Deploying the Frontend (Vercel)
1. Create a New Project on Vercel and import the repository.
2. In Project Settings > Build & Deployment, set the **Root Directory** to `frontend`.
3. In Project Settings > Environments, add the following variables:
   - `REACT_APP_BACKEND_URL`: `your_render_backend_url`
   - `CI`: `false` (to prevent warnings from failing the build)
4. Redeploy the project.
