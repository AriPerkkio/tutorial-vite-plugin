import "./style.css";

const ID = "vite-plugin-content";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello Vite Plugin tutorial!</h1>
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
    const message = `Failed to load index.js: "${error instanceof Error ? error.message : String(error)}"`;
    document.getElementById(ID).textContent = message;
  });
