/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('../images/bg_header.jpg')",
        "nuage-img": "url('../images/bg_nuage.jpg')",
        "photo-img": "url('../images/bg_appareil_photo.jpg')",
        "new-img": "url('../images/bg_newsletter.jpg')",
      },
    },
  },

  plugins: [],
};
