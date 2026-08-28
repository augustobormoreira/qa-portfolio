package org.augustobormoreira.tests;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HelloSeleniumTest {

    @Test
    public void shouldFindSpiderManAndGetHisRealName() {
        //Start the Driver
        WebDriver driver = new ChromeDriver();
        driver.get("https://qaplayground.dev/apps/dynamic-table/");

        //Find the table row that has the superhero name "Spider-Man" in it
        WebElement table_row = driver.findElement(By.xpath(
            "//tr[.//div[contains(., 'Spider-Man')]]"
            ));
        
            //Get the real name in it
        String hero_name = table_row.findElement(By.xpath("./td[last()]//span")).getText();
        
        assertEquals("Peter Parker", hero_name);
        driver.quit();
    }

    @Test
    public void shouldGetAuthCodeAndTypeItCorrectly() {
        // Start Driver
        WebDriver driver = new ChromeDriver();
        driver.get("https://qaplayground.dev/apps/verify-account/");

        //Get span with information and list of inputs we need to type in
        WebElement span_text = driver.findElement(By.className("info"));
        List<WebElement> inputs = driver.findElements(By.className("code"));

        //Get the code we need from the span with class "info" and manipulate it till we have an array with only the codes
        String [] verification_message = span_text.getText().split(" ");
        String [] verification_code = verification_message[verification_message.length-1].split("-");

        //Type the code in the input boxes
        for(int i = 0; i < verification_code.length; i++){
            inputs.get(i).clear();
            inputs.get(i).sendKeys(verification_code[i]);
        }

        assertEquals(span_text.getText(), "Success");
        driver.quit();
    }

    @Test
    public void shouldAddTagsAndRemoveThenCheckForRemainderTags() {
        WebDriver driver = new ChromeDriver();
        driver.get("https://qaplayground.dev/apps/tags-input-box/");
        
        //Get tag input and the list with tags added
        WebElement tag_input = driver.findElement(By.xpath("//div[@class=\"content\"]//ul//input[@type=\"text\"]"));
        
        tag_input.sendKeys("Java,", "TypeScript,", ".NET,", "Cypress", Keys.ENTER);
        
        //Get current List of Tags
        List<WebElement> list_elements = driver.findElements(By.xpath("//div[@class=\"content\"]//ul//li"));
        
        assertEquals(list_elements.size(), 6);

        driver.close();
    }
}