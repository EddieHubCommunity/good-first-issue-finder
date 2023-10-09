[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/EddieHubCommunity/good-first-issue-finder)\
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/EddieHubCommunity/good-first-issue-finder/blob/main/LICENSE)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/EddieHubCommunity/good-first-issue-finder?style=plastic)
![GitHub contributors](https://img.shields.io/github/contributors/EddieHubCommunity/good-first-issue-finder)
![GitHub issues](https://img.shields.io/github/issues-raw/EddieHubCommunity/good-first-issue-finder)
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/EddieHubCommunity/good-first-issue-finder)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/EddieHubCommunity/good-first-issue-finder)
![GitHub forks](https://img.shields.io/github/forks/EddieHubCommunity/good-first-issue-finder?style=social)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/EddieHubCommunity/good-first-issue-finder)
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=plastic&logo=discord&logoColor=white)](https://discord.com/invite/jZQs6Wu)

# Good First Issue Finder by EddieHub

Good First Issue Finder helps new open source contributors to make it easy to get into the world of open source through good first issues.

![eddiehub issue finder](https://user-images.githubusercontent.com/64529217/177034601-fe8dffce-cfac-4f61-889b-e3fe1ab7497d.png)

<!-- (Can be only done after merged 😅)
## Example using Gitpod, ephemeral dev environment in the cloud (free)

![Gitpod GIF with progress bar](https://user-images.githubusercontent.com/46727048/146048451-ed4ff31a-c178-4713-a9e0-95118be742dc.gif)
-->

## 👨‍💻 Live Version

Check out the website: [Good First Issue Finder](https://finder.eddiehub.io)

## 👇 Prerequisites

Before installation, please make sure you have already installed the following tools:

- [Git](https://git-scm.com/downloads)
- [NodeJs](https://nodejs.org/en/download/)

## 🛠️ Installation Steps

1. Fork the project [here](https://github.com/EddieHubCommunity/good-first-issue-finder/fork)
2. Clone the project
   ```bash
     git clone https://github.com/YOUR_USERNAME/good-first-issue-finder.git
   ```
3. Navigate to the project directory `cd good-first-issue-finder`
4. Install dependencies with `npm install`
5. If you encountered error like `engine not compatible with your version on node/npm`

   upgrade your node version from [Here](https://nodejs.org/en/)

   OR

   By following commands from [Here](https://www.geeksforgeeks.org/how-to-update-node-js-and-npm-to-next-version/)

   We highly recommend installing the current LTS version of node.

6. Create a `.env` file in the root of the project. Then add your GitHub Oauth values (see example in `.env.example` file)

> **Note:** You need to set up an Oauth App(not GitHub App) in Github to get the required values. See the documentation [here](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).
> The Callback Url needs to point to the endpoint of the baseURL the app should run on: `http://localhost:5173/api/authentication/callback`.
> Also, never commit the .env file, it is ignored by Git.

<img width=450 alt="callback url" src="https://user-images.githubusercontent.com/75534912/191059977-48962f25-4a83-4564-9a17-019ab0783a40.jpg" />

7. Run `npm run dev`

Alternatively, skip all the steps by using [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/EddieHubCommunity/good-first-issue-finder)

> **Note:** You still need to do the 6th step as defined earlier even if you are using Gitpod to run the app.

## 🧪 Testing

We're using [Playwright](https://playwright.dev/) for running End-To-End Tests.
For running the tests you would need to install the playwright dependencies by running

```bash
npx playwright install --with-deps
```

## 👨‍💻 Contributing

- Contributions make the open source community such an amazing place to learn, inspire, and create.
- Any contributions you make are **greatly appreciated**.
<!-- Don't yet have guide, uncomment when we have refer https://github.com/EddieHubCommunity/good-first-issue-finder/issues/79
- Check out our [contribution guidelines](/CONTRIBUTING.md) for more information.
  -->

## 🛡️ License

Good first issue finder is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💪 Thanks to all Contributors

Thanks a lot for spending your time helping Good first issue finder grow. Thanks a lot! Keep rocking 🍻

[![Contributors](https://contrib.rocks/image?repo=EddieHubCommunity/good-first-issue-finder)](https://github.com/EddieHubCommunity/good-first-issue-finder/graphs/contributors)

## 🙏 Support

This project needs a ⭐️ from you. Don't forget to leave a star ⭐️.

## Our Pledge

We take participation in our community as a harassment-free experience for everyone and we pledge to act in ways to contribute to an open, welcoming, diverse and inclusive community.

If you have experienced or been made aware of unacceptable behaviour, please remember that you can report this. Read our [Code of Conduct](https://github.com/EddieHubCommunity/good-first-issue-finder/blob/main/CODE_OF_CONDUCT.md).
