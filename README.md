# NextGen 🎬 - Movie Streaming Platform

NextGen is a modern and visually engaging movie streaming platform designed to deliver a cinematic experience through a powerful, performant, and scalable tech stack.

## 🚀 Tech Stack

- **Next.js**: App Router-based file structure for fast, SEO-friendly, full-stack development.
- **TypeScript**: Type-safe development experience.
- **Tailwind CSS**: Utility-first CSS framework for consistent and responsive design.
- **shadcn/ui**: Beautiful and accessible components built with Radix and Tailwind.
- **Framer Motion**: Smooth and rich animation handling.
- **React Hook Form**: Lightweight form library for managing complex forms effortlessly.

## 📁 Project Structure Overview

```
app/
├─ _components/              # Reusable UI components
│  ├─ auth/                  # Auth-related UI components
│  └─ Home/                  # Home page animations and inputs
│     ├─ AppearingAnimation.tsx
│     └─ InputField.tsx
│
├─ (auth)/                   # App route groups (parallel route handling)
│  ├─ forgot-password/
│  ├─ reset-password/
│  ├─ signin/
│  ├─ signup/
│  └─ layout.tsx            # Layout for all auth routes
│
├─ api/auth/[...nextauth]/   # NextAuth API route handler
│
├─ layout.tsx                # Root layout for the app
├─ page.tsx                  # Home page of the app
├─ globals.css               # Global styles
└─ favicon.ico
```

## ✨ Features (In Progress / Planned)

- User Authentication via **NextAuth.js**
- Fully animated UI for seamless user experience
- Reusable, accessible input components and animations
- Sign-in / Sign-up with password reset flows
- Movie list, search, filter, and streaming page (coming soon)

## 📦 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nextgen-movie-platform.git
   cd nextgen-movie-platform
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🔐 Authentication Setup

This project uses **NextAuth.js** for secure authentication.
Ensure you add environment variables for providers (like GitHub, Google, or Credentials) in a `.env.local` file.

```
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

## 🧠 Author

**Gokul Krishnan**
A full-stack developer passionate about building immersive UIs and scalable web apps.

---

> Feel free to contribute, star the project ⭐, and follow for updates!
