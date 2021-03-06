#Author: GHRAB Saif EDDINE

Feature: Cocktail Ordering

  As Romeo, I want to offer a drink to Juliette so that we can discuss together (and maybe more).

  Scenario: Creating an empty order
    Given Romeo who wants to buy a drink
    When  an order is declared for Juliette
    Then  there is 0 cocktails in the order

  Scenario: Creating another new empty order
    Given Tom who wants to buy a drink
    When  an order is declared for Jerry
    Then  there is 0 cocktails in the order

  Scenario:  Sending a message with an order
    Given Romeo who wants to buy a drink
    When  an order is declared for Juliette
    And  a message saying "Wanna chat?" is added
    Then the ticket must say "From Romeo to Juliette: Wanna chat?"