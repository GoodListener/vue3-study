module.exports = {
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\.ts$': 'babel-jest',
  },
}
