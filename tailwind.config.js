/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js,md}"],
    theme: {
        extend: {
            animation: {
                      marquee: 'marquee 25s linear infinite',
                      'marquee-reverse': 'marquee 25s linear infinite reverse',
                      'marquee-horizontal': 'marqueeHorizontal 40s linear infinite',
                  },
            keyframes: {
                      marquee: {
                          from: { transform: 'translateY(0)' },
                          to: { transform: 'translateY(calc(-50% - var(--gap)/2))' },
                      },
                      marqueeHorizontal: {
                          from: { transform: 'translateX(0)' },
                          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
                      },
                  },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}