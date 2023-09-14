# intellidocs Contributing Guide

Hi! I'm excited that you're interested in contributing to intellidocs. Before submitting your contribution, be sure to take a moment and read the guidelines below.
 
- [Code of Conduct]()
- [Pull Request Guidelines]()
- [Development Setup]()
- [Tests]()
- [Visual Changes]()
- [Becoming a Maintainer]()

## Tools

- [pnpm](https://pnpm.io/) for package and dependency management
- [Storybook](https://storybook.js.org/) for UI component development and testing
- [Cypress](https://www.cypress.io/) for testing components

## Commit Convention

Before you create a Pull Request (PR), please check if your commits follow the commit conventions used in this repository.

When you create commit, we kindly ask that you follow the convention: 
`category(scope or module): `

The categories that are sufficient are:

- docs: changing existing or creating new documentation (ex. README, cli usage)
- feat / feature: all changes that introduce new code or new features
- fix: all changes that fix a bug (also reference an issue if present)
- refactor: all code related that does is not a fix nor a feature
- build: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
- test: all changes regarding tests (adding new tests or changing existing ones)
- ci: all changes regarding the configuration of continuous integration (ex. github actions, ci system)
- chore: all changes to the repository that do not fit into any of the above categories

Example: `feat(components): add new prop to the avatar component`

## Pull Request Guidelines

- The `main` branch is the snapshot of the latest stable version, it will be the branch used for production. All development must be done in dedicated branches.
- Make sure that all Github Actions are green and pass/are verified.
- Multiple small commits while working on the PR are good to have as we'll squash and merge.
- If a new feature is added:
    - Add the test case that's related to the feature.
    - Provide a reason to add this feature (ideally open a suggestion topic and check it before working on it).
- If you correct an error:
    - If you are resolving an issue, add `(fix #xxxx)` (where #xxxx is the issue code) in your PR title for a better launch record.
        - ex. `update invalid string length (fix #3899)`
    - Add the appropriate test coverage.
    - Provide a detailed description of the error in the PR.

### PR Steps

1. Fork the intellidoc repository and clone your fork

2. Create a new branch out of the `main` branch. The branch name should be [type/scope]. Ex. `fix/main-page`. The type can be either docs, fix, feat, build, or any other conventional commit type. The scope is just a short id that describes the scope of some work.
    
3. Make and commit your changes following the commit convention.

4. Make a PR, and await approval.

## Development Setup

1. Clone the repository
```bash
git clone https://github.com/adrianlamdev/intellidocs.git

2. Install dependencies
```bash
pnpm i --hoist

# or

pnpm install --hoist
```

3. You can use the following command to start the webpack dev server:
```bash
pnpm dev
```
- In order to test components, you can use Storybook:
```bash
pnpm sb
```

4. Creating a branch for your feature or fix:
```bash
# Moving into new branch for your feature
git checkout -b feat/thing

# Moving into new branch for your fix
git checkout -b fix/thing
```

4. If your code passes all tests, then push your feature/fix branch:

**All commits that adds features or fix bugs require tests.**

```bash
# Test current code
pnpm test
```

5. Ensure that the package builds

```bash
# Build current code
pnpm build 
```

6. Sending your PR:
- Send your PR to the `main` branch
- Your PR will be reviewed by maintainers and the maintainers will decide if it is accepted or not
- Once the PR is accepted, the maintainers will merge it to the `main` branch

## Visual Changes

When making a visual change, please provide screenshots and/or screen recordings of the proposed change(s).

## Becoming a Maintainer

If you are interested in becoming an intellidoc maintainer, start by reviewing issues and pull requests. Answer questions for those in need of troubleshooting. Once we see you helping others in the community we'll either reach out and ask you if you want to join or you can ask one of the current maintainers to add you. 

GitHub by default does not publicly state that you are a member of the organization. Please feel free to change that setting for yourself so others will know who's helping out. That can be configured on the organization list page.

Being a maintainer is not an obligation. You can help when you have time and be less active when you don't.