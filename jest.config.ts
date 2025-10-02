/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
    preset: "ts-jest",
    globalSetup: "./test/setup.ts",
    // Automatically clear mock calls, instances, contexts and results before every test.
    // Equivalent to calling jest.clearAllMocks() before each test. This does not remove any mock implementation that may have been provided.
    // https://jestjs.io/docs/configuration#clearmocks-boolean
    clearMocks: true
};

export default config;
