/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: "Kumbh Sans",
    },
    colors: {
      VeryDarkBlue: "hsl(220, 13%, 13%)",
      DarkGrayishBlue: "hsl(219, 9%, 45%)",
      GrayishBlue: "hsl(220, 14%, 75%)",
      LightGrayishblue: "hsl(223, 64%, 98%)",
      Orange: "hsl(26, 100%, 55%)",
      PaleOrange: "hsl(25, 100%, 94%)",
      White: "hsl(0, 0%, 100%)",
    },
    extend: {
      width: {
        100: "22rem",
        128: "28rem",
      },
      height: {
        100: "22rem",
        128: "28rem",
        150: "40rem"
      },
      fontSize: {
        lit: "0.6rem",
      },
      boxShadow: {
        "3xl": "0 35px 60px -28px hsl(220, 13%, 13%) ",
      },
      spacing: {
        '3px': '30rem',
      }
    },
  },
  plugins: [],
};
