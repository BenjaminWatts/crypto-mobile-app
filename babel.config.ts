module.exports = function (api: any) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', "@babel/preset-env", "@babel/preset-react"],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      ["@babel/plugin-transform-private-methods", { "loose": true }],
      ["@babel/plugin-transform-private-property-in-object", { "loose": true }],
      ["@babel/plugin-transform-class-properties", { "loose": true }],
    ],
  };
};
