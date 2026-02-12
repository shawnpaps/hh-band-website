# Band EPK Website – Build Specification

## Goal
Build a clean, fast, mobile-first Electronic Press Kit (EPK) website for a music band.
The site should present all essential booking, press, and industry information in a
professional, skimmable layout that can be reviewed in 2–3 minutes.

Primary audiences:
- Venue bookers
- Festival organizers
- Promoters
- Press / media
- Labels & industry contacts

---

## General Requirements
- Mobile-first, responsive design
- Dark-mode friendly (preferred)
- Fast load time (optimize images, minimal JS)
- Clean typography with strong hierarchy
- Easy to update content (JSON or markdown-driven content preferred)
- No login required
- SEO-friendly (basic metadata)

---


## Page Structure

### 1. Hero Section
Purpose: Immediate identity + vibe

Includes:
- Band name (H1)
- Genre / short tagline (1 sentence)
- Location (city/state)
- Primary CTA buttons:
  - “Listen”
  - “Watch Live”
  - “Contact / Booking”

Optional:
- Background image or subtle video loop
- Accent animation (very minimal)

---

### 2. Band Bio
Purpose: Tell the story quickly

Include:
- Short bio (75–100 words)
- Expandable long bio (200–300 words)
- Written in third person
- Toggle or accordion for long bio

---

### 3. Music Section
Purpose: Immediate listening access

Include:
- 2–4 featured tracks
- Embedded players (Spotify / Apple Music / SoundCloud)
- Optional download links
- Explicit content labels if applicable

Layout:
- Grid or vertical list
- Track title + release year

---

### 4. Video Section
Purpose: Prove live performance & visuals

Include:
- Embedded YouTube / Vimeo videos
- Priority order:
  1. Live performance video
  2. Official music video
  3. Optional rehearsal or behind-the-scenes clip

Constraints:
- Videos under 4 minutes
- Lazy-loaded embeds

---

### 5. Photos / Press Images
Purpose: Provide media-ready visuals

Include:
- Press photos (studio or staged)
- Live performance photos
- Lightbox or modal viewing
- Download links for hi-res versions

Requirements:
- Clearly label:
  - Press Photos
  - Live Photos
- Provide image credits if needed

---

### 6. Notable Achievements / Press
Purpose: Social proof

Include:
- Festivals played
- Tours / support slots
- Select press quotes
- Awards or recognitions
- Playlist placements or radio spins
- Streaming stats (only if meaningful)

Layout:
- Bullet list or cards
- Logos optional but not required

---

### 7. Live Performance Info
Purpose: Help promoters book faster

Include:
- Typical draw range (honest numbers)
- Best-performing cities
- Notable past venues
- Touring availability (regions + dates if applicable)

Optional:
- Map or city list

---

### 8. Tech Rider & Stage Plot
Purpose: Professional readiness

Include:
- Download links for:
  - Tech rider (PDF)
  - Stage plot (PDF or image)
- Brief summary text explaining setup size

---

### 9. Contact & Booking
Purpose: Immediate action

Include:
- Booking contact name
- Booking email (clickable)
- Management / label info (if applicable)
- Social media links:
  - Instagram
  - TikTok
  - X / Twitter
  - Facebook
  - YouTube

Design:
- Highly visible
- Sticky CTA on mobile (optional)

---

### 10. Footer
Include:
- Copyright
- City / country
- Optional short tagline
- Minimal links (no clutter)

---

## UX Notes
- No walls of text
- Clear section separation
- Scroll-friendly
- Keyboard accessible
- Avoid autoplay audio

---

## Content Management (Optional but Preferred)
- Store content in structured data:
  - `bio.json`
  - `music.json`
  - `videos.json`
  - `photos.json`
  - `press.json`
  - `live.json`
- Site should render dynamically from content files

---

## Nice-to-Have Enhancements
- “Download Full EPK (PDF)” button
- Press-only download section
- Analytics (privacy-friendly)
- OpenGraph previews for sharing

---

## Non-Goals
- No merch store
- No fan mailing list signup
- No blog
- No user accounts

---

## Success Criteria
- Page loads under 2 seconds on mobile
- All critical info accessible within 2 scrolls
- Booking contact visible without searching
- Professional, genre-appropriate aesthetic
