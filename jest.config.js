module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '((\\.|/)(test|spec))\\.(jsx?|tsx?)$', // テスト対象ファイルの指定
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: { '^@/(.+)': '<rootDir>/src/$1' }, // @/はsrc/のalias
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // 拡張
  transform: { '\\.(js|ts|tsx)?$': 'babel-jest' },
};
