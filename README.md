# 💬 VibeTalk

VibeTalk is a **real-time chat application** built with the **MERN stack**, offering a seamless and secure messaging experience.  
It features **custom JWT authentication**, **live user presence**, **typing notifications**, and a **beautiful responsive UI** powered by **React + Tailwind CSS + DaisyUI**.

---

## 🚀 Features & Highlights

### 🔐 Authentication
- Custom **JWT-based authentication** (no third-party auth)
- Secure password hashing with bcrypt
- Welcome emails on signup (via Resend)

### ⚡ Real-Time Chat
- **Instant messaging** powered by **Socket.io**
- **Online/Offline indicators**
- **Typing and notification sounds** (toggleable)
- **Image sharing** using **Cloudinary**

### 🧰 Backend
- REST API with **Node.js & Express**
- **MongoDB** for persistent data storage
- **API rate limiting** with **Arcjet**
- Error handling and validation middleware

### 🎨 Frontend
- Built with **React.js**
- Styled using **Tailwind CSS** and **DaisyUI**
- **Zustand** for state management
- Responsive and modern UI/UX design

### ⚙️ DevOps & Workflow
- Git & GitHub workflow (**branches**, **pull requests**, **merges**)
- **Easy deployment** (free-tier friendly with Sevalla or similar)
- Environment variables managed securely via `.env`

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React, Tailwind CSS, DaisyUI, Zustand |
| Backend | Node.js, Express |
| Database | MongoDB |
| Real-Time | Socket.io |
| Auth | JWT |
| Cloud | Cloudinary, Resend |
| Security | Arcjet (Rate Limiting) |

---

## 🧑‍💻 Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/VibeTalk.git
cd VibeTalk
