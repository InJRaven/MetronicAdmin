const plugin = require('tailwindcss/plugin');

const boxShadowPlugin = plugin(function ({ addUtilities, theme }) {
  const shadows = theme('boxShadow');
  const utilities = {};

  for (const group in shadows) {
    for (const type in shadows[group]) {
      utilities[`.shadow-${group}-${type}`] = { boxShadow: shadows[group][type] };
    }
  }

  addUtilities(utilities, ['responsive', 'hover']);
});

module.exports = boxShadowPlugin;