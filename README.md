# Zoom Clone - MERN Stack Video Conferencing App

A full-stack video conferencing application built with the MERN stack (MongoDB, Express, React, Node.js) and WebRTC/Socket.io for real-time communication.

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
git clone <your-repository-url>
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

The frontend will start on \`http://localhost:3000\` (or the next available port), and the backend will listen on \`http://localhost:8000\`.
