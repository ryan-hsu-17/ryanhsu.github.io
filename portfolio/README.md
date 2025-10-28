# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS featuring a custom color palette.

## Features

- Single-page application with smooth scrolling navigation
- Responsive design for all screen sizes
- Custom color palette (Davy's Gray, Black, Jet, Tiffany Blue, Non Photo Blue)
- Sections:
  - Home/Hero
  - About
  - Experience
  - Education
  - Projects
  - Photography Gallery
  - Resume/Download

## Getting Started

### Development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 1. Personal Information

Update the following files with your information:

**src/components/Hero.jsx**
- Replace "Your Name" with your actual name
- Update the tagline and description

**src/components/About.jsx**
- Update "Who I Am" and "What I Do" sections
- Modify the skills array with your actual skills

**src/components/Experience.jsx**
- Replace the experiences array with your work history
- Update job titles, companies, periods, and achievements

**src/components/Education.jsx**
- Update the education array with your degrees
- Modify the certifications array

**src/components/Projects.jsx**
- Replace the projects array with your actual projects
- Update GitHub and demo links
- Replace emoji placeholders with actual project images

**src/components/Photography.jsx**
- Replace placeholder photos with your actual photography
- Update categories if needed
- Change contact email

**src/components/Resume.jsx**
- Update contact links (GitHub, LinkedIn, Email)
- Modify the quick summary stats

**src/App.jsx (Footer)**
- Update copyright name

### 2. Resume File

Replace the placeholder resume file:
```bash
# Place your actual resume.pdf in the public folder
cp /path/to/your/resume.pdf public/resume.pdf
```

### 3. Photography Images

To add your photography:

1. Place your images in `public/photos/` or `src/assets/photos/`
2. Update the photos array in `src/components/Photography.jsx`:

```javascript
const photos = [
  {
    id: 1,
    category: 'portrait',
    title: 'Portrait 1',
    description: 'Description',
    image: '/photos/portrait1.jpg' // or import from assets
  },
  // ... more photos
];
```

3. Update the image display in the component:

```javascript
<img src={photo.image} alt={photo.title} className="w-full h-full object-cover" />
```

### 4. Color Customization

The color palette is defined in `tailwind.config.js`. You can modify any color:

- `davy_gray`: Main gray tones
- `black`: Dark backgrounds
- `jet`: Dark gray tones
- `tiffany_blue`: Primary accent color
- `non_photo_blue`: Light accent color

Each color has shades from 100-900 for various UI elements.

### 5. Social Links

Update social media links in:
- `src/components/Resume.jsx` (GitHub, LinkedIn, Email)
- `src/components/Photography.jsx` (Contact email)

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Color Palette** - Unique brand colors

## Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # Your resume file
├── src/
│   ├── components/
│   │   ├── Navigation.jsx  # Top navigation bar
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # About section
│   │   ├── Experience.jsx  # Work experience
│   │   ├── Education.jsx   # Education & certifications
│   │   ├── Projects.jsx    # Project showcase
│   │   ├── Photography.jsx # Photography gallery
│   │   └── Resume.jsx      # Resume download section
│   ├── App.jsx             # Main app component
│   └── index.css           # Tailwind imports
├── tailwind.config.js      # Tailwind configuration
└── package.json
```

## Deployment

This site can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
See [Vite's deployment guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

## License

This project is open source and available for personal use.
