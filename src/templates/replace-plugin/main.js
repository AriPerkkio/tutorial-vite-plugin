import "./style.css";

const ID = "tutorial-target";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello Vite Plugin tutorial!</h1>
    <p>Loaded Vite plugins: ${window.TUTORIAL_LOADED_VITE_PLUGINS || "none"}</p>
    <div id="${ID}"></div>
  </div>
`;

globalThis.mountHTML = function mountHTML(html) {
  const target = document.getElementById(ID);
  target.innerHTML = html;
};

await import("./tutorial-example.js");
