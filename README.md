# CircleCI Visual Configuration Editor

[![License](https://img.shields.io/github/license/CircleCI-Public/visual-config-editor)](https://github.com/CircleCI-Public/visual-config-editor/blob/main/LICENSE)
[![CircleCI](https://img.shields.io/circleci/build/gh/CircleCI-Public/visual-config-editor/main?logo=circleci)](https://app.circleci.com/pipelines/github/CircleCI-Public/visual-config-editor)

Generate your CircleCI configuration files by building a visual map of your
project's workflows.

This project is currently early access. Features are subject to changes.

### Installing

Using npm:

```shell
$ npm install
```

Using yarn:

```shell
$ yarn install
```

### Building

Using npm:

```shell
$ npm run build
```

Using yarn:

```shell
$ yarn build
```

## Preview

![Preview of the CircleCI Visual Config Editor](/.github/preview.png?raw=true 'Preview')

## Example Generated Config

The visual configuration editor verbosely outputs CircleCI configuration. Subject to change with [SDK issue #53](https://github.com/CircleCI-Public/circleci-config-sdk-ts/issues/53)

```yml
# This configuration has been automatically generated by the CircleCI Config SDK.
# For more information, see https://github.com/CircleCI-Public/circleci-config-sdk-ts
# SDK Version: 0.4.0
# VCE Version: 0.1.0
# Modeled with the CircleCI visual config editor.
# For more information, see https://github.com/CircleCI-Public/visual-config-editor

version: 2.1
setup: false
jobs:
  build:
    steps:
      - checkout: {}
      - run:
          command: yarn build
      - persist_to_workspace:
          root: ../
          paths:
            - build
    docker:
      - image: cimg/node:16.11.1
    resource_class: medium
  test:
    steps:
      - attach_workspace:
          at: .
      - run:
          command: yarn test
          working_directory: ~/project/build
      - persist_to_workspace:
          root: .
          paths:
            - build
    docker:
      - image: cimg/node:16.11.1
    resource_class: medium
  deploy:
    steps:
      - attach_workspace:
          at: .
      - run:
          command: yarn deploy
          working_directory: ~/project/build
    docker:
      - image: cimg/node:16.11.1
    resource_class: medium
workflows:
  build-and-test:
    jobs:
      - build: {}
      - test:
          requires:
            - build
      - deploy:
          requires:
            - test
```

## Contributing
This repository welcomes community contributions! See our CONTRIBUTING.md for guidance on configuring your development environment and how to submit quality pull requests.

## Built with

[CircleCI Config SDK](https://github.com/CircleCI-Public/circleci-config-sdk-ts)
