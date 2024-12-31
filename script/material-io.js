document.addEventListener("DOMContentLoaded", function () {
  // Create and append link elements for Material Icons
  const linkIcons = document.createElement("link");
  linkIcons.rel = "stylesheet";
  linkIcons.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
  document.head.appendChild(linkIcons);

  // Create and append link element for Font Awesome
  const linkFA = document.createElement("link");
  linkFA.rel = "stylesheet";
  linkFA.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
  document.head.appendChild(linkFA);

  // Create and append link element for Material Components Web
  const linkCSS = document.createElement("link");
  linkCSS.rel = "stylesheet";
  linkCSS.href = "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css";
  document.head.appendChild(linkCSS);

  // Create and append script element for Material UI
  const scriptUI = document.createElement("script");
  scriptUI.src = "https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js";
  document.body.appendChild(scriptUI);
});
