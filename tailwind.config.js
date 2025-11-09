const blowfishConfig = require('./themes/blowfish/tailwind.config.js');
const colors = require('tailwindcss/colors');

module.exports = {
  ...blowfishConfig,
  content: [
    ...blowfishConfig.content,
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
  ],
  theme: {
    ...blowfishConfig.theme,
    colors: {
      ...blowfishConfig.theme.colors,
      // Add standard Tailwind colors
      slate: colors.slate,
      gray: colors.gray,
      purple: colors.purple,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      yellow: colors.yellow,
      'everse_sky_light': '#EFF8FC',
      'everse_sky_medium': '#D8EDF8',
      'everse_sky': '#3EA3DC',
      'everse_sky_dark': '#194158'
    },
    extend: {
      ...blowfishConfig.theme.extend,
    },
  },
};