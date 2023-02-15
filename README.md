# Ozow UI

<img src="src/assets/images/design-system.webp" width="100%" />
<small style="font-size: 10px">Art by <a href="https://dribbble.com/codycai">Codi Cai</a>
  </small>

[![NPM](https://img.shields.io/npm/v/ozow-ui.svg)](https://www.npmjs.com/package/ozow-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

##### Ozow UI is a design system that is meant to be a reusable set of components that can be quickly used to build and scaffold any application. Current it is used to demo a UI library for [Ozow](https://ozow.com).

Note: this design system is not used in Ozow's UI. This is purely for experimental reasons and is not the property of Ozow.

## Tech stack

Building components

- ⚛️ [React |](https://reactjs.org/) declarative component-centric UI
- 📚 [Storybook |](https://storybook.js.org) for UI component development and [auto-generated docs](https://medium.com/storybookjs/storybook-docs-sneak-peak-5be78445094a)
- <💅🏾> [Styled Components |](https://www.styled-components.com/) for component-scoped styling

Maintaining the system

- [Auto |](https://intuit.github.io/auto/) Streamline release workflows and automate publishing constantly!
- 📦 [NPM |](https://www.npmjs.com/) for [packaging and distribution](https://blog.hichroma.com/how-packaging-makes-it-dead-simple-to-share-ui-components-29912593539d)
- ✅ [Chromatic |](https://www.chromatic.com/) to prevent UI bugs in components (by Storybook maintainers)
- 🚥 [GitHub Actions |](https://github.com/features/actions) Continuous integration

## Our Approach

<img src="src/assets/images/atomic-design.webp" width="100%" />
<small style="font-size: 10px">Art by <a href="https://dribbble.com/codycai">Codi Cai</a>
</small>

We use Atomic Design by [Bred Frost](https://bradfrost.com/) to scope and organise our UI components.

## Why

The Storybook design system codifies existing UI components into a central, well-maintained repository. It is built to address having to paste the same components into multiple projects again and again. This simplifies building UI's with Storybook's design patterns.

#### What we're doing

- Build and maintain a design system in the open
- Share UI components between multiple apps
- Dogfood upcoming Storybook features
- Welcome contributors of all levels and backgrounds

#### What we're not doing

- Rewrite all new components from scratch
- Overhaul the visual design of components
- Compete with more general design systems like ANT or Material.

## Run Locally

- `git clone git@github.com:sibabale/ozow-ui.git YOUR_APPS_NAME`
  or
- `git clone https://github.com/sibabale/ozow-ui.git YOUR_APPS_NAME`
- `yarn install`
- `git checkout -b YOUR_BRANCH_NAME`
- `yarn run storybook`

## Install

```bash
yarn add --save ozow-ui
```

## Usage

```bash
import { Button } from "ozow-ui"
```

## Test

```bash
yarn test-storybook --watch
```

## Build

In order to build and release a copy of this project you will need to create an account with [npm](https://www.npmjs.com/) and [chromatic](https://www.chromatic.com/).

- `yarn init --scope=@YOUR_NPM_USERNAME`
- `touch .env`
- Open the `.env` file and paste the following tokens

```bash
GH_TOKEN=YOUR_GITHUB_TOKEN
NPM_TOKEN=YOUR_NPM_TOKEN
CHROMATIC_PROJECT_TOKEN=YOUR_CHROMATIC_TOKEN
```

- `yarn build`

## Deploy

<!-- TODO: Detail the whole CI process -->

- Chromatic

```bash
npm run chromatic
```

## License

MIT © [Sibabale](https://github.com/sibabale)
