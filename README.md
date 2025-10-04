# Onset Festival Website

A responsive website for the Onset Festival, built with Next.js and Tailwind CSS. The festival fosters connection and community through music, art, nature, and performance.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, modern design with serif typography using Merriweather font
- **Full-Screen Video Hero**: Autoplay video background on the homepage
- **Navigation**: Fixed navigation bar with mobile-responsive menu
- **Multiple Pages**: About, Artists, Performers, and Contact pages
- **Contact Form**: Interactive contact form with multiple inquiry types
- **Performance Optimized**: Built with Next.js for optimal performance

## Pages

### Homepage
- Full-screen video hero section (autoplay, muted, loop, playsInline)
- Two centered paragraphs describing the festival's mission and values
- Responsive design that looks great on all devices

### About
- Header image section
- Detailed information about the festival's story and values
- Information about profit sharing with artists and charitable donations

### Artists
- Header image section
- Grid layout for featured artists
- Placeholder cards for artist information

### Performers
- Header image section
- Categorized performer sections (Dance, Theater, Circus & Acrobatics)
- Detailed performer information

### Contact
- Header image section
- Contact information for different inquiry types
- Interactive contact form with validation

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Font**: Merriweather (Google Fonts)
- **Deployment**: Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd festival-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Media Assets

The website requires the following media files in the `public/` directory:

- `f&s growing video.mp4` - Homepage video background
- `about.jpg` - About page header image
- `artists.jpg` - Artists page header image
- `performers.jpg` - Performers page header image
- `contact.jpg` - Contact page header image

Currently, the website uses placeholder gradients. To use actual media files:

1. Add the media files to the `public/` directory
2. Uncomment the `<img>` and `<video>` tags in the respective page components
3. Remove or comment out the placeholder gradient divs

## Customization

### Colors
The website uses a purple and blue color scheme. You can customize colors by modifying the Tailwind classes throughout the components.

### Typography
The website uses Merriweather font family. You can change this by:
1. Updating the font import in `src/app/layout.tsx`
2. Modifying the font classes in the components

### Content
All content is easily editable in the respective page components:
- `src/app/page.tsx` - Homepage content
- `src/app/about/page.tsx` - About page content
- `src/app/artists/page.tsx` - Artists page content
- `src/app/performers/page.tsx` - Performers page content
- `src/app/contact/page.tsx` - Contact page content

## Deployment

The website is ready for deployment on Vercel:

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy automatically

## Project Structure

```
festival-website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── artists/
│   │   │   └── page.tsx
│   │   ├── performers/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       └── Footer.tsx
├── public/
│   └── README.md (media assets documentation)
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Onset Festival.

## Support

For support or questions about the website, please contact the development team or refer to the contact information on the website.
