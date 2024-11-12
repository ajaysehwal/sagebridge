module.exports = {
    globDirectory: "dist/",
    globPatterns: [
      "**/*.{html,js,css,png,jpg,jpeg,svg,ico}"
    ],
    swDest: "dist/service-worker.js",
    ignoreURLParametersMatching: [
      /^utm_/,
      /^fbclid$/
    ]
  };
  