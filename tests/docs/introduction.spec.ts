/* eslint-disable @typescript-eslint/no-empty-function */
import { expect, test } from '@playwright/test';

test('Docs header element is active', async ({ page }) => {
  // navigate to the docs landing page /docs
  await page.goto('/docs');

  // check if the docs link in the page header is having the active class
  await expect(page.getByRole('link', { name: 'Docs' })).toHaveClass(/active/);
});

test('Page Heading is correct', async ({ page }) => {
  // navigate to the docs landing page /docs
  await page.goto('/docs');

  // check if the heading contains Introduction
  expect(await page.textContent('h1')).toBe('Introduction');
});

test('Introduction element is highlighted', async ({ page }) => {
  // navigate to the docs landing page /docs
  await page.goto('/docs');

  // check if the Introduction element in the left menu is highlighted
  const introElement = page.getByRole('link', { name: 'Docs' });
  const highlightedColor = await introElement.evaluate((element) =>
    window.getComputedStyle(element).getPropertyValue('--primary-100'),
  );
  await expect(highlightedColor).toEqual('#ff5a00');
});

test.fixme(
  'is the left-side menu containing an element with the same name as the page headline',
  async ({ page }) => {
    // navigate to the docs landing page /docs
    // check if both elements in the left menu and page header are the same and say 'Introduction'
  },
);
