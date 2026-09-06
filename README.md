# 🌍 WanderLust

**WanderLust** is a full-stack travel listing web application that allows users to explore travel destinations and manage property listings. The project is built with Node.js, Express.js, MongoDB, EJS, and Bootstrap.

The application follows an MVC-style architecture to keep the routes, business logic, database models, and views organized.

## ✨ Features

* 🔐 User authentication
* 🏠 Create travel/property listings
* ✏️ Edit existing listings
* 🗑️ Delete listings
* 📄 View detailed listing information
* 🖼️ Support for listing images
* 📱 Responsive user interface
* 💾 MongoDB database integration
* ⚡ Server-side rendering using EJS
* 🛡️ Middleware-based authentication and authorization

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Other Tools

* Git & GitHub
* Cloudinary for image management

## 🏗️ Project Architecture

The project follows an **MVC (Model–View–Controller)** architecture.

```text
WanderLust/
│
├── controllers/       # Application/business logic
│
├── init/              # Database initialization / seed data
│
├── models/            # Mongoose database models
│
├── public/             # CSS, JavaScript and static assets
│
├── routes/             # Application routes
│
├── utils/              # Utility functions and error handling
│
├── views/              # EJS templates
│
├── cloudConfig.js      # Cloudinary configuration
├── middleware.js       # Custom middleware
├── schema.js           # Validation schemas
├── app.js              # Main application entry point
├── package.json        # Project dependencies and scripts
└── .gitignore
```

## 🔄 Application Flow

```text
User
  │
  ▼
EJS / Bootstrap Frontend
  │
  ▼
Express.js Routes
  │
  ▼
Controllers
  │
  ▼
Mongoose Models
  │
  ▼
MongoDB
```

This structure separates the application's presentation layer, routing, business logic, and database operations.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* MongoDB
* Git

### 1. Clone the repository

```bash
git clone https://github.com/dahagamsreeshanth/WanderLust.git
```

Navigate into the project:

```bash
cd WanderLust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory.

Add the environment variables required by the application, for example:

```env
MONGO_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
```

**Do not commit your `.env` file to GitHub.**

### 4. Start the application

```bash
node app.js
```

For development with Nodemon:

```bash
nodemon app.js
```

The application will be available at:

```text
http://localhost:8080
```

> The port may vary depending on the configuration in `app.js`.

### Home Page

![Home Page] 
<img width="1536" height="780" alt="image" src="https://github.com/user-attachments/assets/696588a5-03f6-46db-9b34-5fb309ee3329" />

### Listings Details
<img width="1532" height="771" alt="Screenshot 2026-09-06 203929" src="https://github.com/user-attachments/assets/961d2265-4d69-4b1b-945a-da23656f0ca3" />

## Login 
<img width="1536" height="776" alt="Screenshot 2026-09-06 204045" src="https://github.com/user-attachments/assets/1278b18d-355f-4f39-bff3-ba6cac33aca7" />


## 📚 What I Learned

Building WanderLust helped me gain practical experience with:

* Building full-stack web applications
* Node.js and Express.js
* MongoDB and Mongoose
* CRUD operations
* MVC architecture
* RESTful routing
* EJS server-side rendering
* Authentication and authorization
* Middleware
* Form validation
* Image upload and cloud storage
* Error handling
* Responsive UI development with Bootstrap
* Git and GitHub

Live Demo : [https://wanderlust-0fro.onrender.com/listings]

## 🔮 Future Improvements

Some features that can be added in future versions:

* 🔍 Advanced search and filtering
* ⭐ Improved rating and review system
* ❤️ Wishlist functionality
* 📅 Booking and reservation system
* 💳 Online payment integration
* 🗺️ Interactive maps
* 👤 User profile management
* 📊 User dashboard
* 📱 Further mobile UI improvements

## 👨‍💻 Author

**Sree Shanth Dahagam**

Computer Science Student
Interested in Full-Stack Development, Backend Development, and AI

https://github.com/dahagamsreeshanth

---

⭐ If you found this project interesting, consider giving the repository a star.
