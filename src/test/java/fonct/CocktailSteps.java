package fonct;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

import static org.junit.Assert.assertEquals;

public class CocktailSteps {

    private Order order;

    @Given("(.*) who wants to buy a drink")
    public void qq_who_wants_to_buy_a_drink(String romeo) {
        order = new Order();
        order.declareOwner(romeo);
    }

    @When("an order is declared for (.*)")
    public void an_order_is_declared_for_juliette(String juliette) {
        order.declareTarget(juliette);
    }

    @Then("there is (\\d+) cocktails in the order")
    public void there_is_no_cocktail_in_the_order(int nbCocktails) {
        List<String> cocktails =  order.getCocktails();
        assertEquals(nbCocktails, cocktails.size());
    }

    @When("a message saying \"([^\\\"]*)\" is added")
    public void a_message_saying_is_added(String something) {
        order.withMessage(something);
    }

    @Then("the ticket must say \"([^\"]*)\"")
    public void the_ticket_must_say(String somethingElse) {
        assertEquals(somethingElse, order.getTicketMessage());
    }

    @Given("Romeo buy a drink")
    public void romeo_buy_a_drink_for_factor() {
        order = new Order();
        order.declareOwner("Romeo");
    }
}
