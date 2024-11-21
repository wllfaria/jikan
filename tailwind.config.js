/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            flex: {
                2: "2 2 0%",
            },
            colors: {
                primary: {
                    300: "#3D2673",
                    400: "#5A26D9",
                    500: "#7B52E0",
                    600: "#9C7DE8",
                    700: "#BDA8F0",
                },
                accent: {
                    800: "#DDDCE5",
                    700: "#F6F5FE",
                    300: "#8A8AAB",
                },
            },
        },
    },
    plugins: [],
};
