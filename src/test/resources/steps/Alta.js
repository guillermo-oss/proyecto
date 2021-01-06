Given(/^we visit the "([^"]*)"$/, function(url) {
 browser.configure().window().maximize();
 browser.get("https://the-internet.herokuapp.com/add_remove_elements/");
});
Given(/^click on button Add element$/, function() {
 $("button").click();
});
Given(/^click on button Delete$/, function() {
$(".added-manually").click();
});
