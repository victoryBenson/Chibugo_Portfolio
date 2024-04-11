/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //...
  // daisyui: {
  //   themes: [
  //     "light",
  //     "dark",
  //     "cupcake",
  //     "bumblebee",
  //     "emerald",
  //     "corporate",
  //     "synthwave",
  //     "retro",
  //     "cyberpunk",
  //     "valentine",
  //     "halloween",
  //     "garden",
  //     "forest",
  //     "aqua",
  //     "lofi",
  //     "pastel",
  //     "fantasy",
  //     "wireframe",
  //     "black",
  //     "luxury",
  //     "dracula",
  //     "cmyk",
  //     "autumn",
  //     "business",
  //     "acid",
  //     "lemonade",
  //     "night",
  //     "coffee",
  //     "winter",
  //   ],
  // },
  theme: {
    colors: {
      'primary': '#E44E5F',
      'primary-focus': '#632C3B',
      'primary-content': '#2D1A1C',
      'secondary': '#E7E5E4',
      'white': '#ffffff',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#1f2937',
      'blue': '#314198'
    },
  }
  //...
  // plugins: [require("daisyui")],
}