module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['lcov', 'text-summary'],
  moduleNameMapper: {
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@consts/(.*)': '<rootDir>/src/consts/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/fileMock.ts',
  },
};
