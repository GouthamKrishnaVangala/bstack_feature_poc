
exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: "local",
    //
    // Override default path ('/wd/hub') for chromedriver service.
    // path: "/wd/hub",
    // port: 4444,
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: ["./test/features/*.feature"],
    // Patterns to exclude.
    exclude: [
      // "./test/features/IDE-scrolling-firefox.feature"
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 2,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [
        { browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
             '--no-sandbox',
                 'headless',
             '--disable-gpu',
              ],
        },
      },
      { browserName: 'firefox',
      'moz:firefoxOptions': {
          args: ['-headless'],
        },
      },
      /* {
        browserName: 'MicrosoftEdge',
    } */
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: "warn",
    // in debug mode passes --inspect
    //execArgv: execArgv,
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner, @wdio/lambda-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/applitools-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    //bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    // baseUrl: "",
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    //host: 'hub-cloud.browserstack.com',
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: [
      ['selenium-standalone', {
          logPath: 'logs',
          installArgs: {
              drivers: {
                  chrome: { version: '84.0.4147.30' },
                  firefox: { version: '0.27.0' }
              }
          },
          args: {
              drivers: {
                  chrome: { version: '84.0.4147.30' },
                  firefox: { version: '0.27.0' }
              }
          },
      }]
  ],
    // services: ["edgedriver"],
    //  services: ["browserstack"],
    //services: ["chromedriver", "geckodriver"],
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: "cucumber",
    //
    cucumberOpts: {
        backtrace: false,
        dryRun: false,
        failFast: false,
        format: ["pretty"],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: "",
        timeout: 90000,
        ignoreUndefinedDefinitions: false,
        /* requireModule: [
          // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
          "tsconfig-paths/register",
          () => {
            require("ts-node").register({ files: true });
          }
        ],  */
        require: ["./build/stepDefinitions/*.steps.js"] // <string[]> (file/dir) require files before executing features
    },
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    reporters: ["spec",  [ 'cucumberjs-json', {
      jsonFolder: 'reports/',
      language: 'en',
  },
],
    ], 
    afterFeature: function () {
      console.log(browser.requestedCapabilities.browserName);
      if(browser.requestedCapabilities.browserName == "chrome"){
        const logTypes = browser.getLogTypes();
        /* logTypes.forEach(logType => console.log(logType, browser.getLogs(logType))); */
          var logs = browser.getLogs(logTypes[0]);
          console.log(logs);
      }
    }
};
