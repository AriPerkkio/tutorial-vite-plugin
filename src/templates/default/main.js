import "./style.css";

const ID = "vite-plugin-content";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello Vite Plugin tutorial!</h1>
    <p>Loaded Vite plugins: ${window.TUTORIAL_LOADED_VITE_PLUGINS || "none"}</p>
    <pre id="${ID}"></pre>
  </div>
`;

import("./index.js")
  .then((mod) => {
    document.getElementById(ID).textContent = JSON.stringify(
      mod.content,
      null,
      2
    );
  })
  .catch((error) => {
    const element = document.getElementById(ID);
    const message = `Failed to load index.js: "${error instanceof Error ? error.message : String(error)}" ❌`;
    element.textContent = message;
    element.classList.add("error");
  });
