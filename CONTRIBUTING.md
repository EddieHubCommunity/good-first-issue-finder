# Contributors

## 💥 How to Contribute

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/EddieHubCommunity/good-first-issue-finder/pulls)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/EddieHubCommunity/)

- Take a look at the existing [Issues](https://github.com/EddieHubCommunity/good-first-issue-finder/issues) or [create a new issue](https://github.com/EddieHubCommunity/good-first-issue-finder/issues/new/choose)!
- [Fork the Repo](https://github.com/EddieHubCommunity/good-first-issue-finder). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a **[Pull Request](https://github.com/EddieHubCommunity/good-first-issue-finder/compare)** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

---

## ⭐ HOW TO MAKE A PULL REQUEST:

**1.** Start by making a Fork of the [**good-first-issue-finder**](https://github.com/EddieHubCommunity/good-first-issue-finder) repository. Click on the <a href="https://github.com/EddieHubCommunity/good-first-issue-finder/fork"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a>Fork symbol at the top right corner.

**2.** Clone your new fork of the repository in the terminal/CLI on your computer with the following command:

```bash
git clone https://github.com/<your-github-username>/good-first-issue-finder
```

**3.** Navigate to the newly created good-first-issue-finder project directory:

```bash
cd good-first-issue-finder
```

**4.** Set upstream command:

```bash
git remote add upstream https://github.com/EddieHubCommunity/good-first-issue-finder.git
```

**5.** Create a new branch:

```bash
git checkout -b YourBranchName
```

**6.** Add secret github token in a .env file:

- Add a `.env` file in the root directory of the folder

- Paste the code below inside the `.env` file with your secret token

```bash
GH_TOKEN=<Your-Super-Secret-Github-Token>
```

> **Note:** A detailed explanation on how to create a GitHub Token can be found [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

**7.** Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**8.** Make your changes to the source code.

**9.** Stage your changes and commit:

⚠️ **Make sure** not to commit `package.json` or `package-lock.json` file

⚠️ **Make sure** not to run the commands `git add .` or `git add *`. Instead, stage your changes for each file/folder

```bash
git add <filename>
```

```bash
git commit -m "<your_commit_message>"
```

**10.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**11.** Create a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)!

**12.** **Congratulations!** You've made your first contribution to [**good-first-issue-finder**](https://github.com/EddieHubCommunity/good-first-issue-finder/graphs/contributors)! 🙌🏼

**_:trophy: After this, the maintainers will review the PR and will merge it if it helps move the good-first-issue-finder project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase._**

---

## 💥 Issues

In order to discuss changes, you are welcome to [open an issue](https://github.com/EddieHubCommunity/good-first-issue-finder/issues/new/) about what you would like to contribute. Enhancements are always encouraged and appreciated.

## All the best! 🥇

[![built with love](https://forthebadge.com/images/badges/built-with-love.svg)](eddiehub.org)

Join the conversation in our [Discord community](http://discord.eddiehub.org)
