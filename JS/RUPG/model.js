export default class model {
  async getUsers() {
    try {
      //   console.log("fetching users...");

      const res = await fetch("https://randomuser.me/api/?results=7");
      const data = await res.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching random users:", error);
    }
  }

  async getKanyeQuote() {}

  async getPokemon() {}
  async getText() {}
}
