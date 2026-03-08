# Ariful Islam — Academic Research Website

Personal academic website for Ariful Islam, PhD Researcher in Systems and Information Engineering at the University of Virginia. Built with plain HTML + Tailwind CSS (Play CDN), deployable directly on GitHub Pages with zero build tools.

**Live site:** `https://arifulislamuva.github.io/personal_website/` *(update after deployment)*

---

## File Structure

```
personal_website/
├── index.html            # Home page (bio, interests, recent pubs)
├── research.html         # Research themes & methodologies
├── publications.html     # Full publications list with filter
├── projects.html         # Research project showcases
├── blog.html             # Blog posts & research notes
├── teaching.html         # Teaching, mentoring, academic service
├── cv.html               # Academic CV (HTML + PDF download)
│
├── assets/
│   ├── css/
│   │   └── custom.css    # Custom styles (typography, animations)
│   ├── js/
│   │   └── main.js       # Dark mode, nav, publication filter
│   ├── images/
│   │   └── profile.jpg   # ← Add your photo here
│   └── cv/
│       └── arifulislam_cv.pdf  # ← Add your CV PDF here
│
└── README.md
```

---

## Quick Start (Local Preview)

No build step needed. Just open `index.html` in your browser, or serve it locally:

```bash
# Option 1: Python
python -m http.server 8000
# Then visit http://localhost:8000

# Option 2: Node.js
npx serve .

# Option 3: VS Code
# Install "Live Server" extension, right-click index.html → Open with Live Server
```

---

## GitHub Pages Deployment

1. Push this repository to GitHub:
   ```bash
   git init   # (already done if you cloned)
   git add .
   git commit -m "Initial commit: academic website"
   git remote add origin https://github.com/arifulislamuva/arifulislamuva.github.io.git
   git push -u origin main
   ```

2. Go to your repository → **Settings** → **Pages**

3. Under **Source**, select `main` branch and `/ (root)` folder

4. Click **Save** — your site will be live at `https://arifulislamuva.github.io/` within a few minutes.

> **Tip:** If you name the repo `arifulislamuva.github.io` it becomes your root GitHub Pages site. Otherwise it will be at `https://arifulislamuva.github.io/personal_website/`.

---

## How to Update Content

### Add or Update a Publication

Open `publications.html` and copy this template inside the correct year section:

```html
<!-- Add inside the appropriate year's <div class="space-y-7"> -->
<div class="pub-entry" data-pub-type="conference">
  <!-- type options: conference | journal | workshop | preprint -->
  <div class="flex flex-wrap items-center gap-2 mb-2">
    <span class="tag bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs">Conference</span>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">VENUE YEAR</span>
  </div>
  <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-1.5 leading-snug">
    Paper Title
  </h3>
  <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
    <span class="font-medium text-gray-700 dark:text-gray-300">Ariful Islam</span>,
    Co-Author A, Co-Author B
  </p>
  <div class="flex flex-wrap gap-2">
    <a href="PATH_TO_PDF" class="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-600 transition-colors">PDF</a>
    <a href="GITHUB_URL"  class="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-600 transition-colors">Code</a>
  </div>
</div>
```

To add a **new year section**, copy the year block pattern:
```html
<div data-year-group>
  <h2 class="text-lg font-semibold text-gray-400 dark:text-gray-500 mb-6 flex items-center gap-3">
    2026
    <span class="flex-1 h-px bg-gray-200 dark:bg-gray-800"></span>
  </h2>
  <div class="space-y-7 mb-10">
    <!-- paste publication entries here -->
  </div>
</div>
```

### Add a Research Project

Open `projects.html` and duplicate one of the existing project blocks. Each project uses a 2-column grid for description + visual diagram.

### Add a Blog Post

Open `blog.html` and add a new card inside the `.grid.sm:grid-cols-2` div:

```html
<div class="blog-card card-hover rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-wrap gap-2 mb-3">
    <span class="tag bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs">Category</span>
  </div>
  <h3 class="blog-title text-base font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
    Post Title
  </h3>
  <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
    Short excerpt...
  </p>
  <div class="flex items-center justify-between text-xs text-gray-400">
    <span>Month DD, YYYY · X min read</span>
    <a href="posts/your-post.html" class="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Read →</a>
  </div>
</div>
```

### Update Social Links

All pages share the same nav and footer. Do a find-and-replace across all `.html` files:

| Placeholder | Replace with |
|---|---|
| `https://github.com/arifulislamuva` | Your actual GitHub URL |
| `https://linkedin.com/in/arifulislamuva` | Your LinkedIn URL |
| `https://scholar.google.com/citations?user=PLACEHOLDER` | Your Scholar URL |
| `arifulislam@virginia.edu` | Your email |

### Replace Profile Photo

1. Add your photo to `assets/images/profile.jpg`
2. In `index.html`, replace the avatar placeholder `<div>` block with:
   ```html
   <img src="assets/images/profile.jpg" alt="Ariful Islam"
        class="w-36 h-36 rounded-2xl object-cover shadow-lg" />
   ```
   (See the comment in `index.html` for the exact location.)

### Add Your CV PDF

Place your CV PDF at `assets/cv/arifulislam_cv.pdf`. The download button on `cv.html` will automatically work.

---

## Dark Mode

Dark mode is automatic based on the user's OS preference. It can also be toggled manually via the moon/sun button in the navigation. The preference is saved in `localStorage`.

To default to light mode regardless of OS preference, remove the FOUC-prevention script from the `<head>` of each HTML page.

---

## Customization

### Colors

The site uses **Indigo** as its primary accent. To change:
1. Search and replace `indigo` with another Tailwind color (e.g., `blue`, `violet`, `emerald`) across all HTML files.
2. Update the gradient in `custom.css`:
   ```css
   .gradient-text {
     background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
   }
   ```

### Fonts

The site uses **Inter** (Google Fonts). To change:
1. Update the `<link>` tag in each HTML `<head>`
2. Update the `font-family` in `custom.css`

---

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| [Tailwind CSS (Play CDN)](https://tailwindcss.com/docs/installation/play-cdn) | Utility-first styling, dark mode |
| Vanilla JavaScript | Dark mode toggle, mobile menu, publication filter |
| Google Fonts (Inter) | Typography |
| Inline SVG | Icons and diagrams |

No Node.js, no npm, no build step. Works out of the box on GitHub Pages.

---

## License

Content © 2025 Ariful Islam. Code structure is MIT licensed — feel free to use this template for your own academic website.
