module.exports = {
  setupFiles: ["<rootDir>/src/__tests__/config/setup.js"],
  collectCoverageFrom: ["<rootDir>/src/**.*.{js,jsx}"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
    ".*": "<rootDir>/node_modules/babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules", "src"],
  modulePathIgnorePatterns: ["<rootDir>/src/__tests__/config/"]
};
