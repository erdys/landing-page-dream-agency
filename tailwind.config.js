/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./*.{html,js}"],
    darkMode: false,
    theme: {
        borderWidth: {
            DEFAULT: "1px",
            0: "0",
            10: "10px"
        },
        borderRadius: {
            lg: "10px"
        },
        boxShadow: {
            lg: "0 0 7px 1px rgba(0, 0, 0, 0.08)",
            xl: "0 0 9px 2px rgba(0, 0, 0, 0.05)",
            img: "0 1px 4px 0 rgba(0, 0, 0, 0.25)"
        },
        extend: {
            fontFamily: {
                primary: ["Hind Vadodara"],
                secondary: ["Playfair Display"]
            },
            colors: {
                primary: "#331B3B",
                secondary: "#331B3BA8",
                yellow: "#FDC021",
                grey: "#331B3BA8",
                grey: "#343434",
                lemon: "rgba(254, 200, 400, 0.20)",
                blue: "rgba(236, 247, 255, 100)",
                peach: "rgba(255, 222, 212, 0.30)"
            },
            backgroundImage: {
                ellipse1: "url('/public/image/ellipse_1.png')",
                shape1: "url('/public/image/shape_1.png')"
            },
            width: {
                300: "300px"
            },
            translate: {
                full: "100%"
            }
        }
    },
    plugins: []
};
