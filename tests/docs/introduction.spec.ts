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

test.fixme('is the highlighted item in the left-menu is the correct one', async ({ page }) => {
  // navigate to the docs landing page /docs
  // check if the Introduction element in the left menu is highlighted
});

test.fixme(
  'is the left-side menu containing an element with the same name as the page headline',
  async ({ page }) => {
    // navigate to the docs landing page /docs
    // check if both elements in the left menu and page header are the same and say 'Introduction'
  },
);

test('Introduction element is highlighted as yellow when hovered-over', async ({ page }) => {
  // navigate to the docs landing page /docs/testing
  await page.goto('/docs/testing');

  // check the Introduction element on hover has yellow color
  const introElement = await page.getByRole('link', { name: 'Docs' });
  await introElement.hover();
  const introElementAfterHover = await page.getByRole('link', { name: 'Docs' });
  const introElementColorOnHover = await introElementAfterHover.evaluate((element) =>
    window.getComputedStyle(element).getPropertyValue('--primary-300'),
  );
  await expect(introElementColorOnHover).toEqual('#ffbf00');
});
