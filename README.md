<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/fdnd-agency/visual-thinking">
    <img src="https://visualthinking.school/images/visual-thinking-hbo-logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Visual Thinking</h3>

  <p align="center">
    A website for the 'Visual Thinking in het HBO' project
    <br />
    <a href="https://visualthinking.agency.fdnd.nl"><strong>Release Candidate live link »</strong></a>
    <br />
    <a href="https://visualthinking.school/"><strong>Main live link »</strong></a>
    <br />
    <br />
    <a href="https://github.com/orgs/fdnd-agency/projects/7/views/3">Backlog</a>
    ·
    <a href="https://github.com/fdnd-agency/visual-thinking/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/fdnd-agency/visual-thinking?tab=readme-ov-file#getting-started">Run locally</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
<<<<<<< HEAD
![Schermafbeelding 2025-01-22 143012](https://github.com/user-attachments/assets/8d685648-7539-4955-858c-a23bd77eccdc)
=======

![Page screenshot](https://github.com/user-attachments/assets/f7977b15-b28b-4f85-ae8f-d94299fcb297)
>>>>>>> parent of 9b98ea6 (Update README.md (changed screenshot))

A website made for Visual Thinking in het HBO: a platform housing articles and methods created by Charley Muhren to bring visual thinking into the classroom. For students and teachers alike.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Svelte](https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00)](https://svelte.dev/)
* [![Hygraph CMS](https://img.shields.io/badge/Hygraph_CMS-101B42?style=for-the-badge&logo=graphql&logoColor=ffffff)](https://hygraph.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Create an account on Hygraph, and get your endpoint URL & permanent auth token
2. Clone the repo
   ```sh
   git clone https://github.com/fdnd-agency/visual-thinking.git
   ```
3. Create your `.env` file using `example.env` as a guide
4. Install NPM packages
   ```sh
   npm install
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
6. Run the SvelteKit local development server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- IMPORTANT SCRIPTS -->
## Scripts
The project has a couple standard NPM scripts to assist you when developing.

### Dev
```sh
   npm run dev
```

Run this script to start a local SvelteKit development server. This assists you when developing the server using modern features such as Hot Module Reload. By default the development server will be accessible in the browser at `http://localhost:5174/`

### Build
```sh
   npm run build
```

Running this script will build your project. This tells SvelteKit to take the code and components you created and compile it, turning it into optimised HTML, CSS and JavaScript which your browser will understand. The result of this build process can be found in the `/build` directory. 

If you're hosting your project on a website like Netlify or Vercel, you don't have to worry about this script, as the hosting service will do this for you.

### Preview
```sh
   npm run preview
```

Much like the dev command, this script hosts your website locally. The difference is that the preview command will host the latest output in your `/build` directory. This can be used to debug and test your compiled website. By default this preview will be accessible in the browser at `https://localhost:5174/`

<!-- TEAM MEMBERS -->
## Team Members

- Inez · <i>Developer</i> · <a href="https://github.com/Einanas"><strong>Github »</strong></a>
- Anna-Kyra Strik · <i>Developer</i> · <a href="https://github.com/Anna-Kyra"><strong>Github »</strong></a>
- Robin van der Heijden · <i>Developer</i> · <a href="https://github.com/Robin1224"><strong>Github »</strong></a>


<!-- LICENSE -->
## License

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [SvelteKit documentation](https://svelte.dev/docs/kit/introduction)
* [Hygraph documentation](https://hygraph.com/docs)
* [Figma prototype by CMD students Ivar, Eliza, Marco & Trisjan](https://www.figma.com/proto/BcmZb4clafkTX1UM1GN3F2/Prototype-v3-Visual-Thinking-in-het-HBO?node-id=21%3A995&starting-point-node-id=21%3A995&scaling=scale-down)

<p align="right">(<a href="#readme-top">back to top</a>)</p>