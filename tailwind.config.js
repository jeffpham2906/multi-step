/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "pm-marine-blue": "hsl(213, 96%, 18%)",
        "pm-purplish-blue": "hsl(243, 100%, 62%)",
        "pm-pastel-blue": "hsl(228, 100%, 84%)",
        "pm-light-blue": "hsl(206, 94%, 87%)",
        "pm-strawberry-red": "hsl(354, 84%, 57%)",
        "nt-cool-gray": "hsl(231, 11%, 63%)",
        "nt-light-gray": "hsl(229, 24%, 87%)",
        "nt-magnolia": "hsl(217, 100%, 97%)",
        "nt-alabaster": "hsl(231, 100%, 99%)",
        "nt-white": "hsl(0, 0%, 100%)"
      },
      backgroundImage: {
        "sidebar": "url('/images/bg-sidebar-desktop.svg')",
        "sb-mobile": "url('/images/bg-sidebar-mobile.svg')"
      },
      screens: {
        'lg': { 'max': '1023px' },
        'md': { 'max': '767px' },
        'sm': { 'max': "639px" }
      }
    },
  },
  plugins: [],
}

