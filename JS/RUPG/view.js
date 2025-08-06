// export default class View {
//   renderMainUser({ picture, name, location }) {
//     const div = document.getElementById("main-user");
//     div.innerHTML = `
//       <div>
//         <img src="${picture}" alt="User Picture"/>
//         <div>
//           <h2>${name}</h2>
//           <p>${location}</p>
//         </div>
//       </div>
//     `;
//   }

//   renderQuote(quote) {
//     const div = document.getElementById("quote");
//     div.innerHTML = `
//       <div>
//             ${quote}
//       </div>`;
//   }

//   renderPokemon({ name, image }) {
//     const div = document.getElementById("pokemon");
//     div.innerHTML = `
//     <div>
//       <img src="${image}" alt="${name}"/>
//       <p>Favorite Pokémon:${name}</p>
//     </div>
//   `;
//   }

//   renderAboutMe(text) {
//     const div = document.getElementById("about-me");
//     div.innerHTML = `
//       <div>
//             ${text}
//       </div>`;
//   }

//   renderFriends(friends) {
//     const div = document.getElementById("friends-list");
//     div.innerHTML = `
//       <h3>Friends</h3>
//       <ul>
//         ${friends.map((friend) => `<li>${friend}</li>`).join("")}
//       </ul>
//     `;
//   }
//   renderError(sectionId, message) {
//     const div = document.getElementById(sectionId);
//     if (div) {
//       div.innerHTML = `<p> ${message}</p>`;
//     }
//   }
// }

export default class View {
  renderMainUser({ picture, name, location }) {
    const div = document.getElementById("main-user");
    div.innerHTML = `
      <img class="user-card__image" src="${picture}" alt="User Picture" />
      <div class="user-card__info">
        <h2>${name}</h2>
        <p>${location}</p>
      </div>
    `;
  }

  renderQuote(quote) {
    const div = document.getElementById("quote");
    div.innerHTML = `
      <p class="quote__text">"${quote}"</p>
    `;
  }

  renderPokemon({ name, image }) {
    const div = document.getElementById("pokemon");
    div.innerHTML = `
      <img class="pokemon__image" src="${image}" alt="${name}" />
      <p>Favorite Pokémon: <span class="pokemon__name">${name}</span></p>
    `;
  }

  renderAboutMe(text) {
    const div = document.getElementById("about-me");
    div.innerHTML = `
      <p class="about__text">${text}</p>
    `;
  }

  renderFriends(friends) {
    const div = document.getElementById("friends-list");
    div.innerHTML = `
      <h3>Friends</h3>
      <ul class="friends__list">
        ${friends.map((friend) => `<li>${friend}</li>`).join("")}
      </ul>
    `;
  }

  renderError(sectionId, message) {
    const div = document.getElementById(sectionId);
    if (div) {
      div.innerHTML = `<p class="error-message">${message}</p>`;
    }
  }
}
