module.exports = {
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src'],
  globalSetup: '<rootDir>/__tests__/setupEnv.js',
  moduleFileExtensions: ['js', 'jsx'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/mocks/.*',
    '/__tests__/setup.js',
    '/__tests__/snapshot.js',
    '/__tests__/setupEnv.js',
  ],
  coverageReporters: ['lcov', 'text-summary'],
  moduleNameMapper: {
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@consts/(.*)': '<rootDir>/src/consts/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@endpoints/(.*)': '<rootDir>/src/endpoints/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/fileMock.js',
  },
};
