/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '767px'},

      'md': {'min': '768px', 'max': '1279px'},

      'lg': {'min': '1280px'},

    }
  },
  plugins: [],
  corePlugins: {
      preflight: false,
    }
}