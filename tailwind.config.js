// tailwind.config.js

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 3s infinite ease-in-out',
      },
      keyframes: {
        shimmer: {
          '0%': { 
            backgroundPosition: '-200% 0',
            opacity: '0.8'
          },
          '50%': {
            backgroundPosition: '0% 0',
            opacity: '1'
          },
          '100%': { 
            backgroundPosition: '200% 0',
            opacity: '0.8'
          },
        },
      },
      backgroundSize: {
        '200%': '200% 100%',
      },
    },
  },
  plugins: [],
};

