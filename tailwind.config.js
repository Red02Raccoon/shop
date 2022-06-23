/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        plugin(({ addComponents, theme, addUtilities }) => {
            addUtilities({
                '.flex-center-between': {
                    display: 'flex',
                    alignitems: 'center',
                    justifyContent: 'space-between',
                },
            });
        }),
    ],
};
