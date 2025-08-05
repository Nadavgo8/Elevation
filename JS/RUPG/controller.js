// import Model from "./model.js";
// import View from "./view.js";

// const model = new Model();
// const view = new View();

// async function generatePage() {
//   try {
//     const users = await model.getUsers();
//     const mainUser = users[0];
//     const friends = users
//       .slice(1)
//       .map((user) => `${user.name.first} ${user.name.last}`);

//     view.renderMainUser({
//       picture: mainUser.picture.large,
//       name: `${mainUser.name.first} ${mainUser.name.last}`,
//       location: `${mainUser.location.city}, ${mainUser.location.state}`,
//     });

//     const qoute = await model.getKanyeQuote();
//     view.renderQuote(qoute);

//     const pokemon = await model.getPokemon();
//     view.renderPokemon(pokemon);

//     const aboutText = await model.getText();
//     view.renderAboutMe(aboutText);

//     view.renderFriends(friends);
//   } catch (err) {
//     console.error("Error generating page:", err);
//   }
// }

// document.getElementById("generate-btn").addEventListener("click", generatePage);

import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View();

async function generatePage() {
  // USERS
  try {
    const users = await model.getUsers();
    if (!users) throw new Error("No users returned");

    const mainUser = users[0];
    const friends = users
      .slice(1)
      .map((user) => `${user.name.first} ${user.name.last}`);

    view.renderMainUser({
      picture: mainUser.picture.large,
      name: `${mainUser.name.first} ${mainUser.name.last}`,
      location: `${mainUser.location.city}, ${mainUser.location.state}`,
    });

    view.renderFriends(friends);
  } catch (err) {
    view.renderError("main-user", "⚠️ Could not load user data.");
    view.renderError("friends-list", "⚠️ Could not load friend list.");
    console.error("User section error:", err);
  }

  // QUOTE
  try {
    const quote = await model.getKanyeQuote();
    if (!quote) throw new Error("No quote returned");
    view.renderQuote(quote);
  } catch (err) {
    view.renderError("quote", "⚠️ Could not load quote.");
    console.error("Quote error:", err);
  }

  // POKEMON
  try {
    const pokemon = await model.getPokemon();
    if (!pokemon) throw new Error("No Pokémon returned");
    view.renderPokemon(pokemon);
  } catch (err) {
    view.renderError("pokemon", "⚠️ Could not load Pokémon.");
    console.error("Pokemon error:", err);
  }

  // ABOUT ME
  try {
    const text = await model.getText();
    if (!text) throw new Error("No text returned");
    view.renderAboutMe(text);
  } catch (err) {
    view.renderError("about-me", "⚠️ Could not load 'About Me' section.");
    console.error("About Me error:", err);
  }
}

document.getElementById("generate-btn").addEventListener("click", generatePage);
