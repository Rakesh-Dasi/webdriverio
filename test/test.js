var assert = require('assert');
var request = require('request');

describe('webdriver.io page', function(){
	it('should have the right title', function(){
		browser.url('/');
		var title = browser.getTitle();
		assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
	});

	describe('Api Page', function () {

	it('should have a link to it from the homepage', function (){
		browser.url('/');
		var hasApiLink = browser.isExisting('=API');
		assert(hasApiLink);
		//browser.isExisting('a[href="/api.html"]');

	});

	it('should take you to the API page', function (){
		browser.url('/');
		browser.click('=API');
		var title = browser.getTitle();
		assert.equal(title, 'WebdriverIO - API Docs');

		//To pause for 2 sec
		browser.pause(2000);
	});

	it('should filter search results', function (){
		browser.url('/api.html');
		
		browser.setValue('input[name="search"]','debug');
		//To capture the screenshot on code failure
		browser.saveScreenshot('api-with-result.png');
		console.log("It will capture screenshot")
		console.log("To learn how to integrate code with Jenkins and run on the server")
        console.log("To Learn how to create a branch in git hub")

	});
});
});