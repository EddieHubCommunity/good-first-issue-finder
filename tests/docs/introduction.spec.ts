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

test('Introduction element is highlighted as orange', async ({ page }) => {
  // navigate to the docs landing page /docs
  await page.goto('/docs');

  // check the Introduction element has orange color
  const introElement = page.getByRole('link', { name: 'Docs' });
  const introElementColor = await introElement.evaluate((element) =>
    window.getComputedStyle(element).getPropertyValue('--primary-100'),
  );
  await expect(introElementColor).toEqual('#ff5a00');
});

test.only('Introduction element has the same name as the page headline', async ({ page }) => {
  // navigate to the docs landing page /docs
  await page.goto('/docs');

  // check if both elements in the left menu and page header are the same and say 'Introduction'
  const pageHeadlineName = await page.textContent('h1');
  const introElement = await page.locator('.space-y-4 .active').innerHTML();
  const introElementName = introElement.toString();
  expect(introElementName).toBe(pageHeadlineName);
});
