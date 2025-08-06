import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View();

async function generatePage() {
  try {
    const [users, quote, pokemon, text] = await Promise.all([
      model.getUsers(),
      model.getKanyeQuote(),
      model.getPokemon(),
      model.getText(),
    ]);

    // USERS
    if (!users) {
      view.renderError("main-user", "⚠️ Could not load user data.");
      view.renderError("friends-list", "⚠️ Could not load friend list.");
    } else {
      const mainUser = users[0];
      const friends = users
        .slice(1)
        .map((u) => `${u.name.first} ${u.name.last}`);
      view.renderMainUser({
        picture: mainUser.picture.large,
        name: `${mainUser.name.first} ${mainUser.name.last}`,
        location: `${mainUser.location.city}, ${mainUser.location.state}`,
      });
      view.renderFriends(friends);
    }

    // QUOTE
    if (!quote) {
      view.renderError("quote", "⚠️ Could not load quote.");
    } else {
      view.renderQuote(quote);
    }

    // POKEMON
    if (!pokemon) {
      view.renderError("pokemon", "⚠️ Could not load Pokémon.");
    } else {
      view.renderPokemon(pokemon);
    }

    // ABOUT ME
    if (!text) {
      view.renderError("about-me", "⚠️ Could not load 'About Me' section.");
    } else {
      view.renderAboutMe(text);
    }
  } catch (err) {
    console.error("Critical error in generatePage:", err);
    view.renderError(
      "main-user",
      "⚠️ Something went wrong while loading the page."
    );
  } finally {
    document.getElementById("page-content").classList.remove("hidden");
  }
}

document.getElementById("generate-btn").addEventListener("click", generatePage);
