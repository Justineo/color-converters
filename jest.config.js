module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/test/**/(*.)+spec.(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
