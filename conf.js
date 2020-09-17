var HtmlReporter=require('protractor-beautiful-reporter');
exports.config = {
    jasmineNodeOpts: {defaultTimeoutInterval: 90000},
    directConnect:true,
    specs: ['spec.js'],
    capabilities: {
      'browserName': 'firefox'
    },
    onPrepare:function(){
      jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory:'Report/',
        preserveDirectory: false
      }).getJasmine2Reporter());
      browser.driver.manage().window().maximize();
      }
  };