document.addEventListener("DOMContentLoaded", function() {
    // Create and append link elements
    const linkIcons = document.createElement("link");
    linkIcons.rel = "stylesheet";
    linkIcons.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    document.head.appendChild(linkIcons);

    const linkCSS = document.createElement("link");
    linkCSS.rel = "stylesheet";
    linkCSS.href = "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css";
    document.head.appendChild(linkCSS);

    // Create and append script element for Material UI
    const scriptUI = document.createElement("script");
    scriptUI.src = "https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js";
    document.body.appendChild(scriptUI);
});
