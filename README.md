# AntonioEugenelo.github.io

https://antonioeugenelo.github.io

Personal academic website. Plain HTML and CSS, no build step: GitHub Pages
serves the files exactly as they are.

```
index.html          About, fields, current work, teaching, contact
research.html       Papers, abstracts, citations, policy work, writing
cv.html             HTML CV, with a link to the PDF
404.html            Not-found page
robots.txt          Crawler rules (see Preview mode)
assets/css/style.css
assets/js/site.js   Abstract / citation toggles and BibTeX copy
assets/img/         Favicon, portrait.jpg (light) and portrait-dark.jpg (dark theme)
assets/files/       Antonio_Eugenelo_CV.pdf
```

## Publishing on GitHub Pages

The repository is `AntonioEugenelo.github.io`; GitHub Pages serves the
`main` branch from the root (**Settings → Pages → Deploy from a branch →
`main` / `(root)`**). Any push to `main` updates the live site within a
minute or two.

```
git add -A
git commit -m "Describe the change"
git push
```

## Preview mode (current state)

The site is reachable by anyone with the link but asks search engines to stay
away:

- every page carries `<meta name="robots" content="noindex, nofollow">`
  (marked `PREVIEW` in the source);
- `robots.txt` keeps crawlers out of `assets/files/`, because the CV PDF
  cannot carry a noindex tag.

GitHub Pages has no password protection, so this is "unlisted", not private.

### Going public

1. Delete the line marked `PREVIEW` in `index.html`, `research.html`,
   `cv.html` and `404.html`.
2. Delete the `Disallow:` line in `robots.txt`.
3. Commit and push. Optionally submit the site in Google Search Console
   to speed up indexing.

### Custom domain (optional)

To serve the site from a domain you own (for example `eugenelo.it` or
`antonio.eugenelo.it`), add it under **Settings → Pages → Custom domain**, then
at your DNS provider create a `CNAME` record pointing the subdomain to
`antonioeugenelo.github.io` (or, for the bare domain, `A` records to GitHub's
Pages IPs). Tick *Enforce HTTPS* once the certificate is issued.

## Everyday edits

- **Update the CV**: replace `assets/files/Antonio_Eugenelo_CV.pdf`, keeping
  the file name, and update `cv.html` to match.
- **Add a paper**: copy an `<article class="paper">` block in `research.html`.
  Each toggle button's `aria-controls` must match the `id` of its panel.
- **Change the portrait**: replace `assets/img/portrait.jpg` (4:5, 640×800 px)
  and its dark-theme version `portrait-dark.jpg` (same photo on a charcoal
  backdrop, `#22211e`).
- **"Last updated"** lives in the footer of each page.

To preview locally, open `index.html` in a browser, or run
`python -m http.server` in this folder and visit `http://localhost:8000`.
