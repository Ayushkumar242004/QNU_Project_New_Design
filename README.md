# QNU Project – New Design

![Project Architecture](https://img.shields.io/badge/stack-React%20%2B%20Django-blue) 
![License](https://img.shields.io/badge/license-MIT-green)

This project consists of a frontend (React) and backend (Django) application. Follow the steps below to run the project locally on your machine.

## 📦 Prerequisites

Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/) (v16+) & npm
- [Python](https://www.python.org/downloads/) (3.10+)
- [Git](https://git-scm.com/)
- Virtual environment tools (venv or virtualenv)

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Ayushkumar242004/QNU_Project_New_Design.git
cd QNU_Project_New_Design
```

### 📂 Frontend Setup
Navigate to the frontend directory:

```bash
cd frontend
```

 Install dependencies (use --force to resolve potential conflicts):

```bash
npm install --force
npm install dayjs --force
npm install marked --force
```

 Start the development server:

```bash
npm start
```

 The frontend will automatically open in your browser at http://localhost:3000.

### ⚙️ Backend Setup

Navigate to the backend directory:
```bash
cd ../backend/myproject
```

Set up virtual environment:

Windows:
```bash
python -m venv venv
venv\Scripts\activate
```
macOS/Linux:
```bash
python -m venv venv
source venv/bin/activate
```

Install dependencies:
```bash
pip install -r requirements.txt
pip install django  # Only if Django isn't installed already
```
Run the Django development server:
```bash
python manage.py runserver
```

✅ Accessing the Application
Once both servers are running:

Frontend: http://localhost:3000

Backend API: http://localhost:8000 (primarily accessed via frontend)

### 📝 Notes
Keep both servers running while working with the application

The frontend will proxy API requests to the backend automatically

For production deployment, additional configuration is required

If you encounter issues, check the console output in both terminals