/** @type {import('tailwindcss').Config} */
export default { darkMode:'class', content: ['./index.html','./src/**/*.{ts,tsx}'], theme: { extend: { colors: { navy:'#071F4B', ink:'#04132F', green:'#13851C', gold:'#F4CC10', mist:'#F7F9FC' }, fontFamily:{sans:['Inter','sans-serif'],display:['Inter','sans-serif']}, boxShadow:{premium:'0 24px 60px -24px rgba(7,31,75,.25)'} } }, plugins: [] };
