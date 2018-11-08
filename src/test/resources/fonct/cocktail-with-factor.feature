#Author: GHRAB Saif EDDINE

Feature: Cocktail Ordering Factored

  Using given factored : As Romeo, I want to offer a drink to Juliette so that we can discuss together (and maybe more)

  Background:
    Given Romeo buy a drink

  Scenario Outline: Sending a message with an order
    When an order is declared for <to>
    And a message saying "<message>" is added
    Then the ticket must say "<expected>"

    Examples:
      | to       | message             | expected                                    |
      | Juliette | Wanna chat si zebi? | From Romeo to Juliette: Wanna chat si zebi? |
      | Jerry    | Hi!                 | From Romeo to Jerry: Hi!                      |
