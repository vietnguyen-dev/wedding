# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static wedding website for Viet & Vera's wedding (October 10, 2025, San Francisco, CA). No build system, no package manager, no framework — pure HTML, CSS, and JavaScript.

## Running Locally

Open `index.html` directly in a browser, or serve with any HTTP server:

```bash
python -m http.server
```

## Architecture

Single-page site (`index.html`) with one JS file (`index.js`) and one CSS file (`index.css`). No bundler or compilation step.

**Dependencies (CDN only):**
- Bootstrap 5.3.8
- Google Fonts: Cormorant Garamond (headings), Montserrat (body)

**Page sections (in order):** Hero → Our Story → Wedding Day → Party → FAQ → RSVP

**JavaScript (`index.js`):**
- Mobile hamburger menu toggle with 768px breakpoint
- RSVP form validation (enables submit when name + phone + attendee count are filled)
- Form submission currently logs to console; redirect to `thanks.html` is commented out

**Styling (`index.css`):**
- Dark theme: `#0a0a0a` background, `#2563eb` blue accent, `#ffffff` text
- Responsive breakpoints at 768px and 1024px
