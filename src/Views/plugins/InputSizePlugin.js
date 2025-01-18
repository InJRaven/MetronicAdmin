const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, theme }) {
  const inputSizes = theme("input"); // Lấy giá trị từ theme.input

  const inputStyles = Object.keys(inputSizes).reduce((acc, size) => {
    acc[`.input-${size}`] = {
      paddingTop: inputSizes[size].py,
      paddingBottom: inputSizes[size].py,
      paddingLeft: inputSizes[size].px,
      paddingRight: inputSizes[size].px,
    };
    return acc;
  }, {});

  addComponents(inputStyles);
});
