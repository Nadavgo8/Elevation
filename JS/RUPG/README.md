# 🎲 Random User Page Generator

A fun, responsive single-page web app that generates a random user profile using data from multiple public APIs. It displays a user photo, location, Kanye West quote, favorite Pokémon, an "About Me" paragraph, and a list of friends — all generated dynamically on button click.

---

## ✨ Features

- ✅ Generates a new random user profile
- 🎤 Displays a Kanye West quote
- 🧢 Shows a random Pokémon and its image
- 📝 Includes an "About Me" paragraph using Bacon Ipsum
- 👥 Lists six random friends with their names
- 🚫 Handles errors gracefully in the UI
- 💡 Uses `Promise.all()` for fast parallel data loading
- 📱 Fully responsive layout and clean styling with CSS variables

---

## 🧪 Technologies Used

- HTML5 & CSS3
  - CSS custom properties
  - Flexbox-based layout
- JavaScript (ES6+)
  - Modules (`import`/`export`)
  - Async/Await
  - `Promise.all()` for parallel API calls
- Public APIs:
  - [RandomUser API](https://randomuser.me/)
  - [Kanye REST API](https://api.kanye.rest/)
  - [PokéAPI](https://pokeapi.co/)
  - [Bacon Ipsum](https://baconipsum.com/)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/random-user-page-generator.git
cd random-user-page-generator
```

### 2. Open the project in your browser

Just open the `index.html` file in any modern browser — no server or setup required.

> 💡 This is a 100% client-side project.

---

## 🗂️ Project Structure

```
📁 random-user-page-generator/
├── index.html         # Main HTML file
├── style.css          # Global styles and layout
├── controller.js      # Main logic (event handling + rendering)
├── model.js           # API fetches
├── view.js            # DOM rendering helpers
└── README.md          # You're reading it!
```

---

## 🧠 How It Works

- On clicking the **"Generate User"** button:
  - All 4 APIs are called in parallel using `Promise.all()`
  - Each section (user, quote, Pokémon, text) renders if data is available
  - If any API fails, that section shows a friendly error message
  - The entire page is initially hidden and revealed only after content is ready

---


## 📍 Live Demo

> Coming soon... or deploy easily using GitHub Pages:
>
> 1. Push your code to a GitHub repo  
> 2. Go to **Settings > Pages > Source: `/main` branch > `/root`**  
> 3. Done!

---


## 📄 License

This project is licensed under the MIT License — feel free to use it for learning or fun!
