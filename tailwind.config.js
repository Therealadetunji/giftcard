/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "logo": "#0C7E7E",
      "list": "#6B6B6B",
      "white": "#FFFFFF",
      "dark": "#061818",
      "paragraph": "#6B6B6B",
      "border": "#F2F9FD",
      "bold": "#000E1F",
      "arrow": "#F2F9FD"
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      bolder: '800',
    }, 
    fontSize: {
      "fs-logo": "24px",
      "nav-lists": "18px",
      "fs-button": "16px",
      "fs-hero": "53px",
      "fs-paragraph": "20px",
      "fs-brand": "48px",
      "fs-feature": "28px",
      "fs-heading": "38px",
      "fs-paragraph2": "22px",
      "fs-footer": "12px",
      "fs-footer2": "14px"
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
    },
  },
  plugins: [require("daisyui")],
}

