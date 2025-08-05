export default class View {
  renderMainUser({ picture, name, location }) {
    const div = document.getElementById("main-user");
    div.innerHTML = `
      <div>
        <img src="${picture}" alt="User Picture"/>
        <div>
          <h2>${name}</h2>
          <p>${location}</p>
        </div>
      </div>
    `;
  }

  renderQuote(quote) {
    const div = document.getElementById("quote");
    div.innerHTML = `
      <div>
            ${quote}
      </div>`;
  }

  renderPokemon({ name, image }) {
    const div = document.getElementById("pokemon");
    div.innerHTML = `
    <div>
      <img src="${image}" alt="${name}"/>
      <p>Favorite Pokémon:${name}</p>
    </div>
  `;
  }

  renderAboutMe(text) {
    const div = document.getElementById("about-me");
    div.innerHTML = `
      <div>
            ${text}
      </div>`;
  }

  renderFriends(friends) {
    const div = document.getElementById("friends-list");
    div.innerHTML = `
      <h3>Friends</h3>
      <ul>
        ${friends.map((friend) => `<li>${friend}</li>`).join("")}
      </ul>
    `;
  }
  renderError(sectionId, message) {
    const div = document.getElementById(sectionId);
    if (div) {
      div.innerHTML = `<p> ${message}</p>`;
    }
  }
}

