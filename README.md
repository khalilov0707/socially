# SociallyAI - Next-Gen LinkedIn Automation Tool

This is the landing page for SociallyAI, a revolutionary LinkedIn automation tool that provides AI-driven autonomy for content creation, posting, and engagement.

## Features

- Modern, responsive design built with Next.js and Tailwind CSS
- Interactive components with animations using Framer Motion
- Fully optimized for all screen sizes
- Engaging user experience with smooth transitions and effects

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/socially-ai-website.git
cd socially-ai-website
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── HeroSection.jsx # Hero section
│   │   └── ...             # Other components
│   ├── globals.css         # Global styles
│   ├── layout.jsx          # Root layout
│   └── page.jsx            # Main page
├── public/                 # Static assets
├── .gitignore
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation
```

## Customization

### Changing Colors

Edit the `tailwind.config.js` file to modify the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: '#0077B5', // LinkedIn blue for primary
      secondary: '#00A0DC', // LinkedIn lighter blue
      accent: '#5C3BFE', // Custom purple accent
      dark: '#283E4A', // LinkedIn dark background
      light: '#F3F2EF', // LinkedIn light background
    },
    // ...
  }
}
```

### Adding New Sections

1. Create a new component in the `app/components/` directory
2. Import and add the component to `app/page.jsx`

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other static site hosting:

```bash
npm run build
# or
yarn build
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer) - Intersection Observer API 