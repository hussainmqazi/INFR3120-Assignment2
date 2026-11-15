# Hussain Qazi - INFR3120U Assignment 2

A four-page personal portfolio for a Networking and IT Security student at Ontario Tech University. The site uses Express, EJS, Bootstrap, Font Awesome, and locally stored artwork.

## Run locally

Run `npm install` if dependencies are missing, then `npm start`. Open `http://localhost:3000`. Stop with Ctrl+C.

## Pages

- `/`: a short introduction beside the Sunset Reflection Painting.
- `/about`: education and technical/creative interests beside the still-life drawing.
- `/projects`: five numbered projects: Still Life Drawing - Pear and Apple, Minar-e-Pakistan, Sunset Reflection Painting, Bird and Moon Pencil Drawing, and Instagram Content Creation.
- `/contact`: contact details and a demonstration form. HTML5 required/email validation runs in the browser. POST `/contact` checks missing/empty values and renders confirmation. It does not send email or store messages. Direct requests can bypass browser email checks; this is not a production contact service.

Contact details are populated: hussainmqazi@gmail.com, GitHub hussainmqazi, LinkedIn hussain-qazi-165327376, and Instagram @jus_tsain. No networking project or profile placeholders remain.

## Structure and behaviour

- `bin/www`: original Express Generator server entry point, default port 3000.
- `app.js`: EJS/layout setup, static assets, main router, and error handling.
- `routes/index.js`: four GET routes and the demonstration POST route.
- `views/layout.ejs`: shared document containing the rendered page and header/footer includes.
- `views/partials/header.ejs` and `footer.ejs`: shared navigation and social links.
- `views/pages/`: `home.ejs`, `about.ejs`, `projects.ejs`, and `contact.ejs`.
- `views/error.ejs`: Generator error view, rendered inside the shared layout.
- `public/stylesheets/`: local Bootstrap, Font Awesome, and custom `style.css`.
- `public/javascripts/bootstrap.bundle.min.js`: Bootstrap mobile navigation behaviour. No custom client JavaScript.
- `public/webfonts/`: Font Awesome icon fonts.
- `public/images/`: `still-life.jpg`, `minar-pakistan.jpg`, `sunset-painting.jpg`, and `birdsandmoon.jpg`.

The design uses Arial, white content, dark green accents, simple artwork borders, and a desktop sidebar. The artwork rows alternate image/text sides using floats and clear elements. Media queries stack them on phones and retain the Bootstrap mobile menu. Portrait images use simple width rules with Bootstrap's responsive image class, preserving their proportions.

## Code sources and acknowledgments

- Professor-provided `express-portfolio-basic-master.zip` (course AWS deployment reference): `app.js` demonstrates `express-ejs-layouts` setup; `views/layout.ejs` demonstrates `<%- body %>` and partial includes; `views/partials/_header.ejs` and `_footer.ejs` demonstrate the shared navigation/footer and Bootstrap collapse; `controllers/index.js` demonstrates GET routes, `res.render`, and a contact POST handler. These structures are adapted here, with routes kept in `routes/index.js` as required. Its contact view also demonstrates `required` and email fields. The reference was supplied as professor-provided; individual author details were not supplied.
- Professor-provided `WebProject.zip`: Express Generator structure, router callbacks, EJS title values, Bootstrap and Font Awesome integration. Existing Generator code and dependencies are retained.
- `MEAN Stack Development.pptx`: slides 88 and 90 demonstrate HTTP methods and `req.body`; slides 101-105 demonstrate EJS configuration and rendering.
- `Week1.pdf`: basic HTML, CSS selectors, typography, colours, and spacing. `Week3.pdf`: responsive layouts and media queries. `Week2.pdf`, pages 29-30: HTML `required` and `type="email"` validation.
- `ConnollyHoar_3rdEd_Chapter 9 (1).pptx`, slides 52-53: form validation and null/empty field checks. The contact handler uses these checks on the server as well as browser validation.
- Bootstrap and Font Awesome: existing locally installed assets. Their license/copyright notices are preserved in the original vendor files. No external theme or template design is used.
- Implementation and explanation were prepared with AI assistance in this Codex session using the supplied course references. This is not a claim of unaided authorship.

The portfolio's text and visual styling are original to this project; the course example's personal content and design were not copied. The assignment PDF guides the local website structure. MongoDB, AWS operations, Git operations, hosting, and submission preparation are outside this implementation.

## Accessibility and source-trace note

The contact form retains `aria-describedby` and `role="status"` / `role="alert"`. These connect the form to its explanation and identify feedback for assistive technology. Exact demonstrations were not located in the supplied teaching examples; they are retained accessibility additions, not claimed as lecture examples. Labels, navigation accessibility attributes, and visible Bootstrap keyboard focus styles are also preserved.

Cleanup replaced custom `max-height`, `outline`, and `!important` rules with basic width/selectors or Bootstrap's existing behaviour. The EJS/layout, routing, float/clear, media-query, and HTML5 form patterns remain based on the acknowledged course references. Colours, dimensions, writing, and layout arrangement are original adaptations, not a claim that every line appears verbatim in a reference.

## Local checks

- Visit all four routes and follow desktop/mobile navigation links.
- Test phone, tablet, and desktop widths; confirm no horizontal scrolling.
- Confirm all four artwork images display and open at full size.
- Confirm Bootstrap CSS/JavaScript and Font Awesome icons load locally.
- Try empty fields, an invalid email, and valid form values. Check the demonstration confirmation.
- Confirm GitHub, LinkedIn, Instagram, and email links use the supplied addresses.
- Confirm unknown routes show the shared error page; `/users` is no longer registered.

No Git operations, deployment, hosting configuration, or submission preparation are part of this cleanup.
