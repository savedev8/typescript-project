/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    // All imported modules in your tests should be mocked automatically
    // automock: false,

    // Stop running tests after `n` failures
    // bail: 0,

    // The directory where Jest should store its cached dependency information
    // cacheDirectory: "/tmp/jest_rs",

    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],
    moduleDirectories: [
        'node_modules',
    ],

    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../',
};
