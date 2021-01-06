Given(/^we visit "([^"]*)"$/, function(url) {
 browser.configure().window().maximize();
 browser.get("https://the-internet.herokuapp.com");
});
Given(/^visit "([^"]*)"$/, function(url) {
 $("#content > ul > li:nth-child(21) > a").click();
});
Given(/^we put this credentials"([^"]*)" and password"([^"]*)"$/, function(arg1, arg2) {
 $("#username").sendKeys("john.nobody");
 $("#password").sendKeys("foo123");
});
Given(/^click on button "([^"]*)"$/, function(arg1) {
 $(".fa-sign-in").click();
});
Then(/^we receive a message containing an "([^"]*)"$/, function(arg1) {
 expect("Your username is invalid");
});
Then(/^we the login screen appears again$/, function() {
expect("https://the-internet.herokuapp.com/login");
});

Given(/^we put the good credentials$/, function() {
 $("#username").sendKeys("tomsmith");
 $("#password").sendKeys("SuperSecretPassword!");
});

Then(/^we click and we reach the home page with a welcome "([^"]*)"$/, function(arg1) {
 $(".fa-sign-in").click();
});
Then(/^we click on botton "([^"]*)" we reach the home with a Logout message$/, function(arg1) {
  $(".radius").click();
  expect(" You logged out of the secure area!");
});



