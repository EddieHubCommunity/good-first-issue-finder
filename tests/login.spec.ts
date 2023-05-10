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
    const githubLoginBtn = await page.locator('data-test-id=github-login-btn');
    expect(await githubLoginBtn.textContent()).toBe('Login with Github');
  });

  test('Login Button takes you to a Github Login Page', async ({ page }) => {
    // navigate to the login page
    await page.goto('/login');

    // click on the login button
    await page.locator('data-test-id=github-login-btn').click();
    await page.waitForLoadState('networkidle');

    // check if its a github url after the redirect
    expect(await page.url()).toContain('https://github.com/login');
  });
});

test.describe('Header', () => {
  test('Header contains Login Button For Device Width Greater Than lg', async ({ page }) => {
    //navigate to the docs page
    await page.goto('/docs');

    //check if the header contains a link that redirects to the login page
    await page.locator('data-test-id=login-btn-lg').click();
    await page.waitForLoadState('networkidle');

    expect(await page.url()).toContain('/login');
  });
});

test.describe('Header', () => {
  test.use({
    viewport: { width: 600, height: 900 },
  });
  test('Header contains Login Button In For Device Width Less Than lg', async ({ page }) => {
    //navigate to the docs page
    await page.goto('/docs');

    //opening hamburger menu
    await page.locator('data-test-id=hamburger-btn').click();

    //check if the header contains a link that redirects to the login page
    await page.locator('data-test-id=login-btn').click();
    await page.waitForLoadState('networkidle');

    expect(await page.url()).toContain('/login');
  });
});

test.describe('Footer', () => {
  test('Footer contains a working Github Link', async ({ page }) => {
    // navigate to the login page
    await page.goto('/login');

    // check if the github icon links to a github link
    const githubBtn = await page.locator('data-test-id=github-btn');
    const [popup] = await Promise.all([page.waitForEvent('popup'), githubBtn.click()]);
    await popup.waitForLoadState();

    expect(popup.url()).toContain('https://github.com/EddieHubCommunity');
  });

  test('Footer contains a working Discord Link', async ({ page }) => {
    // navigate to the login page
    await page.goto('/login');

    // check if the discord icon links to a discord link
    const discordBtn = await page.locator('data-test-id=discord-btn');
    const [popup] = await Promise.all([page.waitForEvent('popup'), discordBtn.click()]);
    // await popup.waitForLoadState();

    expect(popup.url()).toContain('https://discord.com/invite/jZQs6Wu');
  });

  test('Footer contains the theme switcher', async ({ page }) => {
    // navigate to the login page
    await page.goto('/login');

    // check if the footer contains the theme switcher
    expect(await page.locator('data-test-id=theme-switch')).toBeTruthy();
  });
});
