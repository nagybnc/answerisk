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
            'answerix-teal-500': 'rgb(114	199	190)',
            'answerix-gray-100': 'rgb(241	243	247)',
            'answerix-cyan-300': 'rgb(125	192	217)',
          },
          height: {
            card: '450px'
          },
          boxShadow: {
            'inner-top': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 8px 6px -7px rgba(0,0,0,0.3)',
          },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
