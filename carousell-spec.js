var accounts = require('./accounts.json');
var carousell = require('./carousell.json');

describe('Carousell Helper to Like Page', function () {

  beforeEach(function () {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
  });

  Object.keys(accounts).forEach(function (account) {
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

      var genericLikeButton = element(
        by.js(function () {
          return document.querySelector('#likeButton') || null;
        })
      );

      browser.isElementPresent(genericLikeButton).then(function () {
        var likeButton = element(
          by.js(function () {
            return document.querySelector('#likeButton:not(.pdt-buy-box-like-button-success)') || null;
          })
        );
        likeButton.click();

      });
      browser.sleep(200);
    });
  });
});
