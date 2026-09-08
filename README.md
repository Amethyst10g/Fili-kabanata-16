# Kabanata 16 — Website

Simpleng website (walang build tools, purong HTML/CSS/JS) para sa pag-aaral ng Kabanata 16.

## Mga file
- `index.html` — nilalaman ng site (Panimula, Talasalitaan, Mga Tauhan, Buod, Aral)
- `style.css` — disenyo
- `script.js` — mobile menu at pag-highlight ng aktibong seksyon sa navigation

## Paano i-publish sa GitHub Pages (libre)

1. Gumawa ng bagong repository sa GitHub (halimbawa: `kabanata-16`).
2. I-upload ang tatlong file (`index.html`, `style.css`, `script.js`) sa root ng repository.
   - Sa GitHub web: **Add file → Upload files**, i-drag ang mga file, tapos **Commit changes**.
3. Pumunta sa **Settings → Pages** ng repository.
4. Sa ilalim ng **Build and deployment → Source**, piliin **Deploy from a branch**.
5. Piliin ang branch na `main` at folder na `/ (root)`, tapos **Save**.
6. Maghintay ng 1–2 minuto. Lalabas ang link ng iyong site sa parehong page, karaniwang:
   `https://<iyong-github-username>.github.io/<pangalan-ng-repo>/`

## Pagpuno ng nilalaman

Ang mga sumusunod na bahagi ay may placeholder text (`[Ilagay dito...]`) na dapat mong palitan sa `index.html` gamit ang aktwal na nilalaman ng kabanata:
- Panimula — pamagat ng akda, may-akda, konteksto
- Mga Tauhan — pangalan at gampanin ng bawat tauhan (kopyahin ang `.character-card` block kung marami pa)
- Buod ng Kabanata
- Aral

Ang Talasalitaan ay puno na batay sa mga salitang ibinigay mo.
