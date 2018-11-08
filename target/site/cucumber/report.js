$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/fonct/cocktail-with-factor.feature");
formatter.feature({
  "name": "Cocktail Ordering Factored",
  "description": "  Using given factored : As Romeo, I want to offer a drink to Juliette so that we can discuss together (and maybe more)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Sending a message with an order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "an order is declared for \u003cto\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "a message saying \"\u003cmessage\u003e\" is added",
  "keyword": "And "
});
formatter.step({
  "name": "the ticket must say \"\u003cexpected\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "to",
        "message",
        "expected"
      ]
    },
    {
      "cells": [
        "Juliette",
        "Wanna chat si zebi?",
        "From Romeo to Juliette: Wanna chat si zebi?"
      ]
    },
    {
      "cells": [
        "Jerry",
        "Hi!",
        "From Romeo to Jerry: Hi!"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Romeo buy a drink",
  "keyword": "Given "
});
formatter.match({
  "location": "CocktailSteps.romeo_buy_a_drink_for_factor()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sending a message with an order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "an order is declared for Juliette",
  "keyword": "When "
});
formatter.match({
  "location": "CocktailSteps.an_order_is_declared_for_juliette(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a message saying \"Wanna chat si zebi?\" is added",
  "keyword": "And "
});
formatter.match({
  "location": "CocktailSteps.a_message_saying_is_added(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the ticket must say \"From Romeo to Juliette: Wanna chat si zebi?\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CocktailSteps.the_ticket_must_say(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Romeo buy a drink",
  "keyword": "Given "
});
formatter.match({
  "location": "CocktailSteps.romeo_buy_a_drink_for_factor()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sending a message with an order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "an order is declared for Jerry",
  "keyword": "When "
});
formatter.match({
  "location": "CocktailSteps.an_order_is_declared_for_juliette(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a message saying \"Hi!\" is added",
  "keyword": "And "
});
formatter.match({
  "location": "CocktailSteps.a_message_saying_is_added(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the ticket must say \"From Romeo to Jerry: Hi!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CocktailSteps.the_ticket_must_say(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/fonct/cocktail-with-param.feature");
formatter.feature({
  "name": "Cocktail Ordering Paramétré",
  "description": "  Using param : As Romeo, I want to offer a drink to Juliette so that we can discuss together (and maybe more)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Creating another new empty order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "\u003cfrom\u003e who wants to buy a drink",
  "keyword": "Given "
});
formatter.step({
  "name": "an order is declared for \u003cto\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "there is \u003cnbCocktails\u003e cocktails in the order",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "from",
        "to",
        "nbCocktails"
      ]
    },
    {
      "cells": [
        "Romeo",
        "Juliette",
        "0"
      ]
    },
    {
      "cells": [
        "Tom",
        "Jerry",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Creating another new empty order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Romeo who wants to buy a drink",
  "keyword": "Given "
});
formatter.match({
  "location": "CocktailSteps.qq_who_wants_to_buy_a_drink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an order is declared for Juliette",
  "keyword": "When "
});
formatter.match({
  "location": "CocktailSteps.an_order_is_declared_for_juliette(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is 0 cocktails in the order",
  "keyword": "Then "
});
formatter.match({
  "location": "CocktailSteps.there_is_no_cocktail_in_the_order(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating another new empty order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Tom who wants to buy a drink",
  "keyword": "Given "
});
formatter.match({
  "location": "CocktailSteps.qq_who_wants_to_buy_a_drink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an order is declared for Jerry",
  "keyword": "When "
});
formatter.match({
  "location": "CocktailSteps.an_order_is_declared_for_juliette(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is 0 cocktails in the order",
  "keyword": "Then "
});
formatter.match({
  "location": "CocktailSteps.there_is_no_cocktail_in_the_order(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Sending a message with an order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "\u003cfrom\u003e who wants to buy a drink",
  "keyword": "Given "
});
formatter.step({
  "name": "an order is declared for \u003cto\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "a message saying \"\u003cmessage\u003e\" is added",
  "keyword": "And "
});
formatter.step({
  "name": "the ticket must say \"\u003cexpected\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "from",
        "to",
        "message",
        "expected"
      ]
    },
    {
      "cells": [
        "Romeo",
        "Juliette",
        "Wanna chat si zebi?",
        "From Romeo to Juliette: Wanna chat si zebi?"
      ]
    },
    {
      "cells": [
        "Tom",
        "Jerry",
        "Hi!",
        "From Tom to Jerry: Hi!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Sending a message with an order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Romeo who wants to buy a drink",
  "keyword": "Given "
});
formatter.match({
  "location": "CocktailSteps.qq_who_wants_to_buy_a_drink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an order is declared for Juliette",
  "keyword": "When "
});
formatter.match({
  "location": "CocktailSteps.an_order_is_declared_for_juliette(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a message saying \"Wanna chat si zebi?\" is added",
  "keyword": "And "
});
formatter.match({
  "location": "CocktailSteps.a_message_saying_is_added(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the ticket must say \"From Romeo to Juliette: Wanna chat si zebi?\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CocktailSteps.the_ticket_must_say(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sending a message with an order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Tom who wants to buy a drink",
  "keyword": "Given "
});
formatter.match({
  "location": "CocktailSteps.qq_who_wants_to_buy_a_drink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an order is declared for Jerry",
  "keyword": "When "
});
formatter.match({
  "location": "CocktailSteps.an_order_is_declared_for_juliette(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a message saying \"Hi!\" is added",
  "keyword": "And "
});
formatter.match({
  "location": "CocktailSteps.a_message_saying_is_added(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the ticket must say \"From Tom to Jerry: Hi!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CocktailSteps.the_ticket_must_say(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/fonct/cocktail.feature");
formatter.feature({
  "name": "Cocktail Ordering",
  "description": "  As Romeo, I want to offer a drink to Juliette so that we can discuss together (and maybe more).",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Creating an empty order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Romeo who wants to buy a drink",
  "keyword": "Given "
});
formatter.match({
  "location": "CocktailSteps.qq_who_wants_to_buy_a_drink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an order is declared for Juliette",
  "keyword": "When "
});
formatter.match({
  "location": "CocktailSteps.an_order_is_declared_for_juliette(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is 0 cocktails in the order",
  "keyword": "Then "
});
formatter.match({
  "location": "CocktailSteps.there_is_no_cocktail_in_the_order(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating another new empty order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Tom who wants to buy a drink",
  "keyword": "Given "
});
formatter.match({
  "location": "CocktailSteps.qq_who_wants_to_buy_a_drink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an order is declared for Jerry",
  "keyword": "When "
});
formatter.match({
  "location": "CocktailSteps.an_order_is_declared_for_juliette(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is 0 cocktails in the order",
  "keyword": "Then "
});
formatter.match({
  "location": "CocktailSteps.there_is_no_cocktail_in_the_order(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sending a message with an order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Romeo who wants to buy a drink",
  "keyword": "Given "
});
formatter.match({
  "location": "CocktailSteps.qq_who_wants_to_buy_a_drink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an order is declared for Juliette",
  "keyword": "When "
});
formatter.match({
  "location": "CocktailSteps.an_order_is_declared_for_juliette(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a message saying \"Wanna chat?\" is added",
  "keyword": "And "
});
formatter.match({
  "location": "CocktailSteps.a_message_saying_is_added(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the ticket must say \"From Romeo to Juliette: Wanna chat?\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CocktailSteps.the_ticket_must_say(String)"
});
formatter.result({
  "status": "passed"
});
});