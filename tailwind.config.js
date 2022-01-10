module.exports = {
  content: [
            "./src/index.js",
            "./src/App.js",
            "./src/layouts/Navbar.js",
            "./src/pages/Home/index.js"
          ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('./assets/home/background-home-desktop.jpg')",
        'mobile-bg': "url('./assets/home/background-home-mobile.jpg')",
      }
    },
  },
  plugins: [],
}
