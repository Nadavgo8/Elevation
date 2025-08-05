export default class model {
  async getUsers() {
    try {
      const res = await fetch("https://randomuser.me/api/?results=7");
      const data = await res.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching random users:", error);
    }
  }

  async getKanyeQuote() {
    try {
      const res = await fetch("https://api.kanye.rest");
      const data = await res.json();
      return data.quote;
    } catch (error) {
      console.error("Error fetching qoute:", error);
    }
  }

  async getPokemon() {
    try {
      const id = Math.floor(Math.random() * 1025) + 1;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      return {
        name: data.name,
        image: data.sprites.front_default,
      };
    } catch (error) {
      console.error("Error fetching random Pokemon:", error);
    }
  }
  async getText() {
    try {
      const res = await fetch(
        `https://baconipsum.com/api/?type=meat-and-filler`
      );
      const data = await res.json();
      return data[0];
    } catch (error) {
      console.error("Error fetching text:", error);
    }
  }
}
