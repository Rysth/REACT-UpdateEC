/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('flowbite/plugin')],
}
