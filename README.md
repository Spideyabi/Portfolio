# B.Tech Portfolio - Bairagoni Abhi Charan

A responsive, high-performance portfolio website showcasing my journey as a Full Stack Developer. Built with modern web technologies to ensure a seamless and visually appealing user experience.

## Technologies Used
- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure
- `src/components`: Reusable UI components (Hero, Skills, Projects, Contact)
- `src/App.jsx`: Main application layout

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Getting Started

Follow these steps to set up and run the project locally.

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd My-Portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

4.  **Build for production**:
    To create a production-ready build, run:
    ```bash
    npm run build
    ```
    To preview the production build locally:
    ```bash
    npm run preview
    ```

## Deployment on Vercel

The easiest way to deploy this Next.js/Vite application is to use [Vercel](https://vercel.com/).

### Option 1: Vercel CLI (Recommended for quick deployment)

1.  **Install Vercel CLI**:
    ```bash
    npm i -g vercel
    ```

2.  **Deploy**:
    Run the following command from the root of your project:
    ```bash
    vercel
    ```
    Follow the prompts to set up your project.

3.  **Deploy to Production**:
    ```bash
    vercel --prod
    ```

### Option 2: Vercel Dashboard (Git Integration)

1.  Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2.  Log in to [Vercel](https://vercel.com/).
3.  Click **"Add New..."** and select **"Project"**.
4.  Import your Git repository.
5.  Vercel will automatically detect that you are using **Vite**. The default build settings should be correct:
    - **Framework Preset**: Vite
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
    - **Install Command**: `npm install`
6.  Click **"Deploy"**.

Your application will be live in a few moments!

## Linting

To check for code quality issues, run:
```bash
npm run lint
```
