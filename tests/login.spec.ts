/* eslint-disable @typescript-eslint/no-empty-function */
import { expect, test } from '@playwright/test';

test.describe('Login Card', () => {
  test('h2 contains desired text', async ({ page }) => {
    // navigate to the login page
    await page.goto('/login');

    //check if the h2 element contains the desired text
    expect(await page.textContent('h2')).toBe('Login');
  });

  test.fixme('Login Button contains the desired text', async () => {
    // navigate to the login page
    // check if the button contains the text
  });

  test.fixme('Login Button takes you to a Github Login Page', async () => {
    // navigate to the login page
    // click on the login button
    // check if its a github url after the redirect
  });
});

test.describe('Footer', () => {
  test.fixme('Footer contains a working Github Link', async () => {
    // navigate to the login page
    // check if the github icon links to a github link
  });

  test.fixme('Footer contains a working Discord Link', async () => {
    // navigate to the login page
    // check if the discord icon links to a discord link
  });

  test.fixme('Footer contains the theme switcher', async () => {
    // navigate to the login page
    // check if the footer contains the theme switcher
  });
});
