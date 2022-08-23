/* eslint-disable @typescript-eslint/no-empty-function */
import { expect, test } from '@playwright/test';

test.describe('Login Card', () => {
  test('h2 contains desired text', async ({ page }) => {
    await page.goto('/login');
    expect(await page.textContent('h2')).toBe('Login');
  });

  test.fixme('Login Button contains the desired text', async () => {});

  test.fixme('Login Button takes you to a Github Login Page', async () => {});
});

test.describe('Footer', () => {
  test.fixme('Footer contains a working Github Link', async () => {});

  test.fixme('Footer contains a working Discord Link', async () => {});

  test.fixme('Footer contains the theme switcher', async () => {});
});
