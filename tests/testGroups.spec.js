import { test } from "@playwright/test";

test.describe("Test Group1", () => {

  test.beforeAll(async () => { // will run before all tests
    console.log("BeforeAll is executed");
  });

  test.afterAll(async () => { // will run after all tests
    console.log("AfterAll is executed");
  });

  test.beforeEach(async ({ page }) => { // will run before each test
    console.log("BeforeEach is executed");
  });

  test.afterEach(async ({ page }) => { // will run after each test
    console.log("AfterEach is executed");
  });

  test("Test Case 1", async ({ page }) => {
    console.log("Test Case 1 is expected");
  });

  test("Test Case 2", async ({ page }) => {
    console.log("Test Case 2 is expected");
  });

  test("Test Case 3", async ({ page }) => {
    console.log("Test Case 3 is expected");
  });
  

});
