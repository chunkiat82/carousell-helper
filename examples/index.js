var casperJS = require('casper');

function run() {

    var casper = casperJS.create();
    var url = casper.cli.options.url;
    var username = casper.cli.options.username;
    var password = casper.cli.options.password;
    casper.start();

    casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36');

    casper.thenOpen('https://carousell.com/login/?next=' + url, function () {
        this.fillSelectors('form.login-form', {
            'input[name="username"]': username,
            'input[name="pass"]': password,
        }, true);
    });
    casper.wait(3000, function () {
        this.echo(this.getCurrentUrl());
        this.echo(this.getHTML('#likeButton'));
        // this.click('#likeButton:not(.pdt-buy-box-like-button-success)');
        this.click('#likeButton');
        casper.wait(2000, function () {
            this.echo(this.getHTML('#likeButton'));
        });
    });

    casper.run();
} 
run();