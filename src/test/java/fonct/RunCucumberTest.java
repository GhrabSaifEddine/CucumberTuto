package fonct;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,features="src/test/resources",plugin = { "pretty", "html:target/site/cucumber", "junit:target/cucumber.xml", "json:target/cucumber.json" })
public class RunCucumberTest {
}