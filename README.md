# Hussain Qazi - INFR3120U Assignment 2

This is my personal portfolio for Web and Scripting Programming. It introduces my Networking and IT Security studies at Ontario Tech University, my artwork, and my interest in content creation.

## Running locally

In the project folder, run:

```text
npm install
npm start
```

Open http://localhost:3000. Keep the terminal running and press Ctrl+C to stop.

## Main features

My homepage scrolls through Home, About Me, Projects, and Contact Me using anchor navigation. The separate `/`, `/about`, `/projects`, and `/contact` GET routes each render an EJS view through `routes/index.js`.

The project retains the Express Generator structure, Node.js, ExpressJS, shared EJS layout, header, and footer. Assets are organized inside `public`. Bootstrap provides responsive layouts and mobile navigation; Font Awesome provides social icons.

My gallery contains Still Life Drawing, Minar-e-Pakistan, Sunset Reflection Painting, and Bird and Moon Pencil Drawing. Content Creation describes my short-form Instagram content for university students and links to [@jus_tsain](https://www.instagram.com/jus_tsain/).

The contact form uses HTML5 validation and displays confirmation. It is a demonstration: it does not send emails or save messages. My email, GitHub, and LinkedIn links are included.

## References and acknowledgments

The project draws on these professor-provided materials:

- `Assignment2_ExpressJS Portfolio.pdf`: requirements and rubric.
- `WebProject.zip`: Express structure and routes.
- [Edolor/express-portfolio-basic](https://github.com/Edolor/express-portfolio-basic), supplied as `express-portfolio-basic-master.zip`: EJS layout, partials, and contact handling.
- `MEAN Stack Development.pptx`: Node.js, Express, and EJS.
- Week 1-4 PDFs and code archives: HTML, CSS, responsiveness, and forms; `Week2.pdf` covers validation.
- `Javascript.zip` and Connolly/Hoar Chapter 9 slides: conditionals and validation.

Bootstrap is by the Bootstrap Authors; Font Awesome is by Fonticons, Inc. Their license notices remain intact. Express, EJS, and express-ejs-layouts are third-party dependencies.

AI assistance was used for implementation, writing, revisions, and testing. This is not entirely unaided work, and no AI-use percentage is claimed.
