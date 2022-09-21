---
title: Testing
---

This project uses [Playwright](https://playwright.dev/) as testing library for running End-To-End tests.

## Adding skeleton tests

New tests are added in the `tests` directory of the project. Currently the tests are structured by pages, e.g `login.spec.ts`.

Test files always need to have the ending of `.spec.ts` in order to get picked up the Playwright. You don't always need to create a new file. It's very likely that an existing one can be used.

To make it easier for others to contribute, Playwright offers the possibility to initialize skeleton-tests. The important part is, that the `test`-function calls `fixme`.

Once this is in place, please add comments to describe the required steps that the test needs to do, in order to be seen as successful. These comments can be written in plain English.

The following code snippet shows an example for a skeleton test.

```ts
test.fixme('<Please describe the test here>', async () => {
  // navigate to example page
  // check if the page contains element <xy>
});
```

## Filling out skeleton tests

We highly encourage people to only fill out one test per Pull Request, so other people are also having the chance to contribute to this initiative.

To fill out a test, pick one, that has the prefix `test.fixme`.

Ideally you can take other, existing tests as a reference for your test to get started.

Every skeleton contains a couple of comments telling you the steps that are required for the test to be seen as successful.

Once you're ready with filling out the skeleton, rename `test.fixme` to `test`.

A filled out skeleton may look like the following example:

```ts
test.describe('Login Card', () => {
  test('h2 contains desired text', async ({ page }) => {
    // navigate to the login page
    await page.goto('/login');

    //check if the h2 element contains the desired text
    expect(await page.textContent('h2')).toBe('Login');
  });
```
