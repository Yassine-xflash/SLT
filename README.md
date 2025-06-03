# STLverse Official Website

<p align="center">
  <img src="/public/7652dd10-6e4a-4dbd-ad7b-769f5f3650cf-removebg-preview-1.png" alt="STLverse Logo" width="200"/>
</p>

## STLverse: Crafting Digital Experiences, Building Future Visions.

Welcome to the official website for **STLverse Company**! This project embodies our commitment to digital innovation and showcases our expertise in transforming visions into reality using cutting-edge technologies.

## Overview / About The Project

**STLverse Company** is a dynamic Moroccan technology partner dedicated to helping businesses, startups, and institutions design, build, and scale intelligent, user-centric digital solutions. We specialize in turning ambitious ideas into impactful products with speed and efficiency.

Our mission: To drive digital transformation through innovative technologies and tailored development, enabling our partners to build, grow, and thrive in a connected, performance-driven world.

This website serves as the primary online presence for STLverse. It's designed to introduce our company, showcase our range of services, highlight our expertise across various digital domains, and provide insights into our approach to technology and innovation, all centered around our core goal: **"Empowering Your Vision with Digital Innovation."**

## ✨ Features

*   **Fully Responsive Design:** Tailored user experiences for Desktop, Tablet, and Mobile devices, leveraging dedicated component views.
*   **Comprehensive Service Showcase:** Detailed sections on our expertise including:
    *   Custom Web & Mobile Development
    *   AI & Automation (Machine Learning, Generative AI)
    *   MVP & Startup Support
    *   Cloud, Edge & Embedded Systems
    *   Extended Reality (XR)
*   **Visual Identity Presentation:** Clear display of STLverse's branding, including color schemes and typography.
*   **Modern UI/UX:** Built with cutting-edge technologies to ensure a smooth, engaging, and intuitive user experience.
*   **Company Information:** Sections detailing our mission, team, and FAQs.
*   **Interactive Elements:** Engaging user interactions powered by Radix UI and custom components.

## 🚀 Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (using the App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (with PostCSS)
*   **UI Library:** [React](https://reactjs.org/)
*   **Component Primitives:** [Radix UI](https://www.radix-ui.com/) (for accessible, unstyled components like Accordion, Navigation Menu, Scroll Area, Separator)
*   **Icons:** [Lucide Icons](https://lucide.dev/)
*   **Fonts:** Google Fonts via `@next/font` (Open Sans, Piazzolla, Inter, Montserrat, Outfit)

## 📁 Project Structure

An overview of the key directories:

*   `./app/`: Core Next.js App Router pages (like `page.tsx`), layouts (`layout.tsx`), and global styles (`globals.css`).
*   `./src/screens/`: Houses main screen components.
    *   `Box/Box.tsx`: The central component orchestrating the homepage content and its various sections.
    *   `Box/sections/`: Contains specific large-scale sections of the homepage, including dedicated views for different screen sizes (e.g., `HomepageDesktopByAnima.tsx`).
*   `./src/components/ui/`: Reusable UI elements such as Buttons, Cards, Accordions, etc., many adapted from Shadcn/UI patterns.
*   `./src/lib/`: Utility functions, like `cn.ts` for class name construction.
*   `./public/`: Static assets such as images, logos, and SVGs.

## 🚦 Getting Started

Follow these steps to get the project up and running on your local machine.

**Prerequisites:**

*   Node.js (Latest LTS version recommended)
*   npm or yarn

**Installation:**

1.  Clone the repository:
    ```bash
    git clone https://github.com/STLverse/STLverse-website.git
    ```
    *(Note: Replace with the actual repository URL if different)*
2.  Navigate to the project directory:
    ```bash
    cd STLverse-website
    ```
3.  Install dependencies:
    ```bash
    npm install
    # OR
    yarn install
    ```

**Running the Development Server:**

*   Execute:
    ```bash
    npm run dev
    # OR
    yarn dev
    ```
*   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**Building for Production:**

*   Execute:
    ```bash
    npm run build
    ```
*   This will create an optimized production build in the `.next` directory.

**Running in Production Mode (after build):**

```bash
npm run start
# OR
yarn start
```

## 🎨 Styling & Responsiveness

*   **Styling:** The project uses Tailwind CSS for utility-first styling. Global styles and Tailwind directives are defined in `app/globals.css`. Custom CSS variables for theming (colors, radius) are also present in `app/globals.css`, supporting light and dark modes.
*   **Responsiveness:**
    *   The website is designed to be 100% responsive across mobile, tablet, and desktop devices.
    *   The primary approach involves rendering distinct component trees for different breakpoints, controlled by Tailwind CSS responsive classes:
        *   `src/screens/Box/sections/HomepageDesktopByAnima.tsx` (visible on `lg` screens and up via `hidden lg:block`)
        *   `src/screens/Box/sections/HomepageTabletByAnima.tsx` (visible on `md` screens, hidden on `lg` and up via `hidden md:block lg:hidden`)
        *   `src/screens/Box/sections/HomepagePhoneFinalByAnima.tsx` (visible on screens smaller than `md` via `block md:hidden`)
    *   Individual components also utilize Tailwind's responsive prefixes (e.g., `md:text-lg`, `lg:grid-cols-3`) for fine-grained layout adjustments.

## 🖼️ Key Components (Examples)

*   **`app/page.tsx`:**
    *   Role: The main entry point for the homepage within the Next.js App Router. It directly renders the primary content orchestrator, `<Box />`.
*   **`src/screens/Box/Box.tsx`:**
    *   Role: The central component that aggregates and displays all major sections of the homepage, including the responsive views (Desktop, Tablet, Mobile) and other shared content blocks like visual identity showcases.
*   **`src/components/ui/button.tsx`:**
    *   Role: A versatile, reusable button component with various visual styles and sizes, built using `class-variance-authority` and Radix UI's Slot for composition. Marked as a `'use client'` component.
*   **`app/layout.tsx`:**
    *   Role: The root layout for the application. It defines the main `<html>` and `<body>` structure, imports global CSS (`app/globals.css`), and configures global fonts using `@next/font`.

## 🤝 Contributing

Currently, this project is developed and maintained internally by the STLverse team. We are not actively seeking external contributions at this moment. However, if you have suggestions or feedback, please feel free to reach out to us.

## 📜 License

Copyright © 2024 STLverse Company. All Rights Reserved.

*(A formal LICENSE.md file may be added in the future if the project is made open source).*

## 📞 Contact STLverse / Learn More

*   **Email:** `hello@sltverse.com`
*   **Location:** Casablanca, Morocco
*   **Stay Connected (Placeholder Links - Update with actual URLs):**
    *   LinkedIn: `https://www.linkedin.com/company/sltverse` (Example URL)
    *   Twitter: `https://twitter.com/STLverse` (Example URL)
    *   GitHub: `https://github.com/STLverse` (Example URL)

---

This README provides a comprehensive overview of the STLverse official website project. We are excited about its potential and ongoing development!
