module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // seus plugins aqui...
      'react-native-reanimated/plugin', // 👈 tem que ser o último!
    ],
  };
};