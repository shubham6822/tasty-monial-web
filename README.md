# Testimonial Management Platform

## 🚀 Overview

This is a **Testimonial Management Platform** that allows users to **collect, manage, and display testimonials** from their clients. Users can install an embeddable component via a library to showcase testimonials on their websites easily.

## ✨ Features

- **User Authentication** (Sign Up/Login via Google, Email/Password)
- **Dashboard** for managing testimonials
- **Testimonial Collection Form** (Public form link for clients to submit testimonials)
- **Embeddable Testimonial Widget** (Customizable component)
- **API for Fetching Testimonials**
- **Customization Options** (Themes, colors, layouts)
- **Payment Integration** (Stripe for premium plans)
- **Dark Mode Support**
- **Mobile Responsive UI**

## 🛠 Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js (Express/Nest.js)
- **Database**: PostgreSQL / MongoDB
- **Authentication**: NextAuth.js (OAuth, Email/Password)
- **Storage**: AWS S3 / Cloudinary
- **Payments**: Stripe

## 🔧 Installation & Setup

````

**Run the development server**

```bash
npm run dev
````

## 📦 Embeddable Widget Usage

Users can install the widget via NPM:

```bash
npm install @tasty-monial
```

Then, integrate it into their project:

```jsx
import Testimonial from "@tasty-monial";

function App() {
  return (
    <div>
      <h1>Client Testimonials</h1>
      <Testimonial apiKey="your-api-key" layout="grid" />
    </div>
  );
}
export default App;
```

## 🛡 Security & Best Practices

- **Data validation** for testimonials
- **Rate limiting** for API requests
- **Secure authentication** via NextAuth.js
- **Environment variables** for sensitive data

## 📜 License

This project is licensed under the MIT License.

## 📬 Contact

For questions or suggestions, reach out via [sharmashubham6822@gmail.com](mailto:sharmashubham6822@gmail.com).
