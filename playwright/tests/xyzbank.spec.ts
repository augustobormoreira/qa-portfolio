import { test, expect } from "@playwright/test";

test("Should Login after Login Button Pressed", async ({ page }) => {
  await page.goto(
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer",
  );
  await page.locator("#userSelect").selectOption("1");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByText("Hermoine Granger").click();
  await expect(page.locator("body")).toContainText("Hermoine Granger");
});
test("Sucessful deposit should display success message", async ({ page }) => {
  await page.goto(
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer",
  );
  await page.locator("#userSelect").selectOption("2");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Deposit" }).click();
  await page.getByRole("spinbutton", { name: "amount" }).click();
  await page.getByRole("spinbutton", { name: "amount" }).fill("5000");
  await page.getByRole("form").getByRole("button", { name: "Deposit" }).click();
  await expect(page.locator("body")).toContainText("Deposit Successful");
});
test("Sucessful withdrawal should display success message", async ({
  page,
}) => {
  await page.goto(
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer",
  );
  await page.locator("#userSelect").selectOption("3");
  await page.getByRole("button", { name: "login" }).click();
  await page.getByRole("button", { name: "Deposit" }).first().click();
  await page.getByRole("spinbutton", { name: "amount" }).fill("10000");
  await page.getByRole("form").getByRole("button", { name: "Deposit" }).click();
  await expect(page.getByText("Deposit Successful")).toContainText(
    "Deposit Successful",
  );
  await page.getByRole("button", { name: "Withdrawl" }).click();
  await expect(page.getByText("Deposit Successful")).toBeHidden();
  await page.getByRole("spinbutton", { name: "amount" }).fill("5000");
  await page
    .getByRole("form")
    .getByRole("button", { name: "Withdraw", exact: true })
    .click();
  await expect(page.locator("body")).toContainText("Transaction successful");
});
test("Should display error message when withdrawal amount is greater than balance", async ({
  page,
}) => {
  await page.goto(
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer",
  );
  await page.locator("#userSelect").selectOption("4");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Withdrawl" }).click();
  await page.getByRole("spinbutton", { name: "amount" }).fill("5000");
  await page.getByRole("button", { name: "Withdraw", exact: true }).click();
  await expect(page.getByText("Transaction Failed. You can")).toContainText(
    "Transaction Failed.",
  );
});
test("Should display sucessful message on deposit in every account", async ({ page }) => {
  await page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer");
  await page.locator('#userSelect').selectOption('1');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Deposit' }).click();
  await page.getByRole('spinbutton', { name: 'amount' }).fill("1000");
  await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();  
  await expect(page.getByText('Deposit Successful')).toContainText('Deposit Successful');

  await page.locator('#accountSelect').selectOption("1002");
  await page.locator('button.tab', { hasText: 'Deposit' }).click();
  await page.getByRole('spinbutton', { name: 'amount' }).fill("1000");
  await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();  
  await expect(page.getByText('Deposit Successful')).toContainText('Deposit Successful');

  await page.locator('#accountSelect').selectOption("1003");
  await page.locator('button.tab', { hasText: 'Deposit' }).click();
  await page.getByRole('spinbutton', { name: 'amount' }).fill("1000");
  await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();  
  await expect(page.getByText('Deposit Successful')).toContainText('Deposit Successful');

});

test("Should display sucessful message on withdrawal in every account", async ({ page }) => {
  //Check if withdrawal works on first account
  await page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer");
  await page.locator('#userSelect').selectOption('1');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Withdrawl' }).click();
  await page.getByRole('spinbutton', { name: 'amount' }).fill("1000");
  await page.getByRole('button', { name: 'Withdraw', exact: true }).click();  
  await expect(page.getByText('Transaction successful')).toContainText('Transaction successful');

  //Check if withdrawal works on second account
  await page.locator('#accountSelect').selectOption("1002");
  await page.locator('button.tab', { hasText: 'Deposit' }).click();
  await expect(page.getByText('Transaction successful')).toBeHidden();
  await page.getByRole('spinbutton', { name: 'amount' }).fill("1000");
  await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();  
  await expect(page.getByText('Deposit Successful')).toContainText('Deposit Successful');
  await page.getByRole('button', { name: 'Withdrawl' }).click();
  await expect(page.getByText('Deposit Successful')).toBeHidden();
  await page.getByRole('spinbutton', { name: 'amount' }).fill("1000");
  await page.getByRole('button', { name: 'Withdraw', exact: true }).click();  
  await expect(page.getByText('Transaction successful')).toContainText('Transaction successful');

  //Check if withdrawal works on third account
  await page.locator('#accountSelect').selectOption("1003");
  await page.locator('button.tab', { hasText: 'Deposit' }).click();
  await expect(page.getByText('Transaction successful')).toBeHidden();
  await page.getByRole('spinbutton', { name: 'amount' }).fill("1000");
  await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();  
  await expect(page.getByText('Deposit Successful')).toContainText('Deposit Successful');
  await page.getByRole('button', { name: 'Withdrawl' }).click();
  await expect(page.getByText('Deposit Successful')).toBeHidden();
  await page.getByRole('spinbutton', { name: 'amount' }).fill("1000");
  await page.getByRole('button', { name: 'Withdraw', exact: true }).click();  
  await expect(page.getByText('Transaction successful')).toContainText('Transaction successful');


});
