# Credit Agricote website

Multi-page static site (HTML + CSS + a little JS). No build step.

Pages: `index.html`, `about.html`, `services.html`, `loans.html`, `tools.html` (EMI + SIP calculators), `contact.html`.

Deploy with GitHub Pages: Settings > Pages > Deploy from branch > `main` / root.

## Adding photos

Photo slots show a tinted placeholder until you add a file with the matching name to `assets/img/` (JPG). They fill in automatically, no code change needed:

| File | Used on |
|---|---|
| `home-about.jpg` (4:5) | Home, about section |
| `about-team.jpg` (5:4) | About |
| `about-office.jpg` (4:3) | About |
| `service-loans.jpg` (4:3) | Services |
| `service-insurance.jpg` (4:3) | Services |
| `service-mutual-funds.jpg` (4:3) | Services |
| `service-portfolio.jpg` (4:3) | Services |
| `loans-hero.jpg` (4:3) | Loans |
| `contact.jpg` (4:3) | Contact |

Already included: `assets/logo.png`, `assets/img/advisor.jpg` (home hero), `assets/img/services-poster.jpg` (services page).

## Before launch

- Add registration details (e.g. AMFI ARN, IRDAI / RBI-related registrations as applicable), office address and email to the footer / contact page.
- Add a privacy policy page.
- The contact form opens WhatsApp (+91 79775 40128) with the details pre-filled; connect a form backend if you want email delivery.
