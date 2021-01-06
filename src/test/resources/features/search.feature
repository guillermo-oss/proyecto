# language: en
# ------------------------------------------------------------------------------
Feature: Login_Logout

  Background: 
    Given we visit "website"

  Scenario: bad credentials
    Given visit "website"
    And we put this credentials"" and password""
    And click on button "Login"
    Then we receive a message containing an "alert"
    And we the login screen appears again

  Scenario: Good credential, we reach the home page
    Given visit "website"
    And we put the good credentials
    And we click and we reach the home page with a welcome "message"
    Then we click on botton "Logout" we reach the home with a Logout message
