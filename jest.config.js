module.exports = {
  roots: ['<rootDir>/'],
  testRegex: '((\\.|/)(test|spec))\\.(jsx?|tsx?)$', // テスト対象ファイルの指定
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: { '^@/(.+)': '<rootDir>/src/$1' }, // @/はsrc/のalias
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // 拡張
  transform: { '\\.(js|ts|tsx)?$': 'babel-jest' },
  coverageDirectory: './coverage/',
  collectCoverageFrom: [
    '<rootDir>/specs/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};
