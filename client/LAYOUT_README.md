# RootLayout Documentation

## Overview
The `RootLayout.astro` component is a complete layout for the Homesick Highway band website, featuring a responsive drawer-style navbar built with DaisyUI components.

## Features

### 1. Drawer Navigation
- **Mobile-friendly hamburger menu** that slides in from the left
- Full navigation menu with emoji icons for better UX
- Navigation links include:
  - 🏠 Home
  - 👥 About
  - 🎸 Shows
  - 🎵 Music
  - 👕 Merch
  - 📧 Contact

### 2. Top Navigation Bar
- **Sticky navbar** that stays at the top while scrolling
- **Brand logo/name** on the left
- **Social media icons** in the center-right (Instagram, TikTok, Facebook)
- **"Text Us" CTA button** prominently displayed on the right
- Responsive design that adapts to mobile and desktop

### 3. Footer
- Centered footer with navigation links
- Social media icons duplicated for easy access
- Copyright information with dynamic year

### 4. Social Media Integration
Social media links are configured for:
- **Instagram**: https://www.instagram.com/homesickhighway
- **TikTok**: https://www.tiktok.com/@homesickhighway
- **Facebook**: https://www.facebook.com/homesickhighway

> **Note**: Update these URLs with your actual social media handles!

### 5. Text Message CTA
The "Text Us" button uses the SMS protocol:
```html
<a href="sms:+1234567890">Text Us</a>
```

> **Important**: Replace `+1234567890` with your actual band's phone number!

## Technologies Used

- **Astro**: Static site framework
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library for Tailwind CSS
- **React**: For interactive components (if needed)

## Theme Configuration

The layout uses DaisyUI's dark theme by default:
```html
<html lang="en" data-theme="dark">
```

You can change this to any of the available DaisyUI themes in `tailwind.config.mjs`:
- light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula

## Usage

To use the RootLayout in any page:

```astro
---
import RootLayout from "../layouts/RootLayout.astro";
---

<RootLayout
  title="Your Page Title"
  description="Your page description for SEO"
>
  <!-- Your page content goes here -->
  <div class="container mx-auto px-4 py-8">
    <h1>Welcome!</h1>
  </div>
</RootLayout>
```

## Props

The RootLayout accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Homesick Highway" | Page title for SEO and browser tab |
| `description` | string | "Official band website" | Meta description for SEO |

## Customization

### Changing Colors
Edit the DaisyUI theme in `tailwind.config.mjs` or use custom Tailwind classes.

### Adding Navigation Links
Update the menu items in both:
1. The drawer sidebar (lines ~115-125)
2. The footer (lines ~78-84)

### Updating Social Media
Replace the placeholder URLs with your actual social media links throughout the file.

### Modifying the CTA Button
Update the phone number in the `href="sms:+1234567890"` attributes (appears multiple times).

## Responsive Design

- **Mobile**: Hamburger menu with drawer, social icons hidden, compact "Text Us" button
- **Tablet**: Same as mobile with more spacing
- **Desktop**: Full navbar with visible social icons and full "Text Us" button text

## File Structure

```
client/
├── src/
│   ├── layouts/
│   │   └── RootLayout.astro     # Main layout component
│   ├── pages/
│   │   └── index.astro          # Homepage using RootLayout
│   └── styles/
│       └── global.css           # Tailwind imports
├── tailwind.config.mjs          # Tailwind + DaisyUI config
└── package.json
```

## Development

To start the development server:
```bash
pnpm run dev
```

To build for production:
```bash
pnpm run build
```

To preview the production build:
```bash
pnpm run preview
```

## Next Steps

1. **Update social media URLs** with your actual handles
2. **Update phone number** for the "Text Us" CTA
3. **Create additional pages** (about, shows, music, merch, contact)
4. **Add actual content** and images
5. **Customize the theme** and colors to match your band's aesthetic
6. **Add SEO meta tags** for better search engine visibility
7. **Integrate with a CMS** if you need dynamic content management

## Support

For DaisyUI documentation: https://daisyui.com/
For Astro documentation: https://docs.astro.build/
For Tailwind CSS documentation: https://tailwindcss.com/