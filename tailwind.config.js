/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "healtick-darkgreen": "#285430",
                "healtick-green": "#5F8D4E",
                "healtick-lightgreen": "#A4BE7B",
                "healtick-cream": "#E5D9B6",
            },
        },
    },
    plugins: [],
}
