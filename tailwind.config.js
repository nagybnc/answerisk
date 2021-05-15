const colors = require('tailwindcss/colors')
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
          colors: {
            teal: colors.teal,
            'answerix-light-blue-50': 'rgb(196	215	232)',
            'answerix-light-blue-100': 'rgb(169	208	235)',
            'answerix-white': 'rgb(241	244	251)',
            'answerix-dark-blue-800': 'rgb(69	107	190)',
            'answerix-emerald-500': 'rgb(105	202	181)',
          }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
