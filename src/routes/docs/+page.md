---
title: Introduction
---

Welcome developers! This docs should be the entry point to the documentation. In case things remain unclear about it, feel free to raise an issue in the [Finder-Project](https://github.com/EddieHubCommunity/good-first-issue-finder).

## Key Features

Very technically spoken, this project uses the GitHub-API for crawling issues, that are labeled with a specific label:

- You can either crawl the [EddieHubCommunity](https://github.com/EddieHubCommunity) for issues that are labeled with `good-first-issue`
- or entire Github for the label `EddieHub:good-first-issue`

## Technologies

- [Sveltekit](https://kit.svelte.dev/) - as app-framework for the frontend
- [Tailwind](https://tailwindcss.com/) - as css-framework to get consistent stylings
- [Playwright](https://playwright.dev/) - for running end-to-end tests
- [GitHub](https://www.github.com) - as identity provider for the login, and API
- [GitHub GraphQL API](https://docs.github.com/en/graphql) - for crawling the GitHub API
