import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View();

async function generatePage() {
  try {
    // console.log("generating page...");
    const users = await model.getUsers();
    const mainUser = users[0];
    const friends = users
      .slice(1)
      .map((user) => `${user.name.first} ${user.name.last}`);

    view.renderMainUser({
      picture: mainUser.picture.large,
      name: `${mainUser.name.first} ${mainUser.name.last}`,
      location: `${mainUser.location.city}, ${mainUser.location.state}`,
    });
    const qoute = await model.getKanyeQuote();
    view.renderQuote(qoute);

    view.renderFriends(friends);
  } catch (err) {
    console.error("Error generating page:", err);
  }
}

document.getElementById("generate-btn").addEventListener("click", generatePage);
