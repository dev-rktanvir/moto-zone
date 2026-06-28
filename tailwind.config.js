/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./**/*.html",
        "./**/*.js"
    ],

    theme: {
        extend: {
            colors: {
                primary: "#E76F51",
                heading: "#000000",
                text: "#6C6C6C",
            },

            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },

    plugins: [require("daisyui")],

    daisyui: {
        themes: [
            "light",
            "dark",
        ],
    },
};