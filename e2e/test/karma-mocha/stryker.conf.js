module.exports = function (config) {
  config.set({
    mutate: ['src/*.js'],
    testRunner: 'karma',
    reporters: ['json', 'clear-text', 'html', 'event-recorder'],
    karma: {
      config: {
        frameworks: ['mocha', 'chai'],
        files: ['src/*.js', 'test/*.js']
      }
    },
    timeoutMS: 60000,
    concurrency: 2,
    coverageAnalysis: 'perTest',
    plugins: ['@stryker-mutator/karma-runner']
  });
};
