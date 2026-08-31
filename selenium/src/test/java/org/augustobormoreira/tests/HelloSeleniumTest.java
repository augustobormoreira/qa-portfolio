package org.augustobormoreira.tests;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

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

    @Test
    public void typingInterstellarInMovieInputShouldShowInterstellarInMovieSpan() {
        WebDriver driver = new ChromeDriver();
        driver.get("https://qaplayground.com/practice/input-fields");

        //Get Movie Name Input and Submit Button
        WebElement movieInput = driver.findElement(By.xpath("//input[@data-testid='input-movie-name']"));
        WebElement movieInputSubmitButton = driver.findElement(By.xpath("//button[@data-testid='btn-submit-movie']"));

        //Clear existing data, type Interstellar and submit
        movieInput.clear();
        movieInput.sendKeys("Interstellar");
        movieInputSubmitButton.click();


        //Get Movie Span
        WebElement movieSpan = driver.findElement(By.xpath("//span[@data-testid='result-s01']"));

        //Assert that the displayed text in the movie span is the same as input
        assertTrue(movieSpan.getText().contains("Interstellar"));

        driver.quit();
    }

    @Test
    public void typingAnyMovieNameInMovieInputShouldShowNameInMovieSpan() {
        WebDriver driver = new ChromeDriver();
        driver.get("https://qaplayground.com/practice/input-fields");

        //Get Movie Name Input and Submit Button
        WebElement movieInput = driver.findElement(By.xpath("//input[@data-testid='input-movie-name']"));
        WebElement movieInputSubmitButton = driver.findElement(By.xpath("//button[@data-testid='btn-submit-movie']"));
        String movieName = "The Immitation Game";

        //Clear existing data, type The Immitation Game and submit
        movieInput.clear();
        movieInput.sendKeys(movieName);
        movieInputSubmitButton.click();

        //Get Movie Span
        WebElement movieSpan = driver.findElement(By.xpath("//span[@data-testid='result-s01']"));

        //Assert that the displayed text in the movie span is the same as input
        assertTrue(movieSpan.getText().contains(movieName));
        driver.quit();
    }

    @Test
    public void ifInputHasValueThenPlaceHolderShouldHide() {
        WebDriver driver = new ChromeDriver();
        driver.get("https://qaplayground.com/practice/input-fields");

        //Get Movie Name Input and Submit Button
        WebElement movieInput = driver.findElement(By.xpath("//input[@data-testid='input-movie-name']"));
        String movieName = "The Immitation Game";

        //Type movie in the input
        movieInput.clear();
        movieInput.sendKeys(movieName);

        //Assert that the displayed text in the movie span is the same as input
        assertEquals("", movieInput.getAttribute("placeholder"));
        driver.quit();
    }
}