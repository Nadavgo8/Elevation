import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View();

async function generatePage() {}

document.getElementById("generate-btn").addEventListener("click", generatePage);
