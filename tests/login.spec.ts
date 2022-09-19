/* eslint-disable @typescript-eslint/no-empty-function */
import { expect, test } from '@playwright/test';

test.describe('Login Card', () => {
  test('h2 contains desired text', async ({ page }) => {
    // navigate to the login page
    await page.goto('/login');

    //check if the h2 element contains the desired text
    expect(await page.textContent('h2')).toBe('Login');
  });

  test('Login Button contains the desired text', async ({ page }) => {
    // navigate to the login page
    await page.goto('/login');

    // check if the button contains the text
    expect(await page.textContent('#github-login-btn')).toBe('Login with Github');
  });

  test('Login Button takes you to a Github Login Page', async ({ page }) => {
    // navigate to the login page
    await page.goto('/login');

    // click on the login button
    await page.click('#github-login-btn');
    await page.waitForLoadState('networkidle');

    // check if its a github url after the redirect
    expect(await page.url()).toContain('https://github.com/login');
  });
});

test.describe('Header', () => {
  test('Header contains Login Button', async ({ page }) => {
    //navigate to the docs page
    await page.goto('/docs');

    //check if the header contains a link that redirects to the login page
    await page.click('#login-btn');
    await page.waitForLoadState('networkidle');

    expect(await page.url()).toContain('/login');
  });
});

test.describe('Footer', () => {
  test('Footer contains a working Github Link', async ({ page }) => {
    // navigate to the login page
    await page.goto('/login');

    // check if the github icon links to a github link
    const [popup] = await Promise.all([page.waitForEvent('popup'), page.click('#github-btn')]);
    await popup.waitForLoadState();

    expect(await popup.url()).toContain('https://github.com/EddieHubCommunity');
  });

  test('Footer contains a working Discord Link', async ({ page }) => {
    // navigate to the login page
    await page.goto('/login');

    // check if the discord icon links to a discord link
    const [popup] = await Promise.all([page.waitForEvent('popup'), page.click('#discord-btn')]);
    await popup.waitForLoadState();

    expect(await popup.url()).toContain('https://discord.com/invite/jZQs6Wu');
  });

  test('Footer contains the theme switcher', async ({ page }) => {
    // navigate to the login page
    await page.goto('/login');

    // check if the footer contains the theme switcher
    expect(await page.locator('#theme-switch')).toBeTruthy();
  });
});
