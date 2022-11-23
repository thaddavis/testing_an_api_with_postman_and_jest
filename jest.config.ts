import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
  watchPlugins: ["./jest.plugin"],
};

export default config;
