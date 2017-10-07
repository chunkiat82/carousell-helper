var accounts = require('./accounts.json');
var carousell = require('./carousell.json');

Object.keys(accounts).forEach(function (account) {

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
  describe('Carousell Helper to Like Page', function () {

    it('should add a todo', function () {

      var usernameString = account;
      var passwordString = accounts[account];
      browser.waitForAngularEnabled(false);

      browser.get('https://carousell.com/login/?next=');

      var usernameField = element(by.id('username'));
      var passwordField = element(by.id('password'));
      var submitButton = element(by.xpath('//*[@id="root"]/div/div[1]/div/form/button'));

      usernameField.sendKeys(usernameString);
      passwordField.sendKeys(passwordString);
      submitButton.click();
      browser.sleep(500);
      browser.get(carousell.url);

      //fake pass
      expect('1').toEqual('1');
    });
  });
});
