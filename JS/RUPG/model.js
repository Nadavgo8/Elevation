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

  async getPokemon() {}
  async getText() {}
}
