module.exports = {
  content: [
            "./src/index.js",
            "./src/App.js",
            "./src/layouts/Navbar.js",
            "./src/pages/Home/index.js",
            "./src/pages/Destination/index.js",
            "./src/pages/Destination/Destination.js",
            "./src/pages/Crew/index.js",
            "./src/pages/Crew/Crew.js",
            "./src/pages/Technology/index.js",
            "./src/pages/Technology/Technology.js",
          ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('./assets/home/background-home-desktop.jpg')",
        'mobile-bg': "url('./assets/home/background-home-mobile.jpg')",
        'crew-desktop':"url('./assets/crew/background-crew-desktop.jpg')",
        'crew-mobile':"url('./assets/crew/background-crew-mobile.jpg')",
        'technology-desktop':"url('./assets/technology/background-technology-desktop.jpg')",
        'technology-mobile':"url('./assets/technology/background-technology-mobile.jpg')",
        'destination-desktop':"url('./assets/destination/background-destination-desktop.jpg')",
        'destination-mobile':"url('./assets/destination/background-destination-mobile.jpg')",
      }
    },
  },
  plugins: [],
}
