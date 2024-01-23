﻿# Get started with Playwright

Team Studio employs Playwright for end-to-end (e2e) testing. This README.md is designed to guide you through the initial setup.
It's crucial to bear in mind that each team member is responsible for keeping this README.md up-to-date. Your contributions are
highly encouraged to enhance the document and facilitate an easier onboarding process for your fellow team members.

## Test Strategy

Team Studio has decided to test various user journeys. A user journey may, for example, involve adding a field to the data model.
In such cases, the testing process should not only encompass the data model page itself, but we must also ensure that the data model
and the field are accessible on all pages integrated with the data model. This ensures a comprehensive verification that our solution
operates seamlessly across different pages. In this way, we can better ensure that things are integrated as they should be cross pages.

More documentation and examples will be added after we have written our first scenario.

## Setup

To initiate test execution and writing tests, start by running the setup.js script located at the file path `/development/setup.js`.
For more information, refer to the `README.md` located at the root of the monorepo. The reason this is needed is to ensure
you have setup you local environment. If you already have a local environment up and running, you can skip this part.

After executing the mentioned `setup.js` script, you are ready to set up Playwright. Simply run `yarn setup:playwright` to generate a `.env`
file for localhost. Then, execute the tests using the following command: `yarn test:all`.

## Change Environment

If you wish to run tests against an environment other than `studio.localhost`, you can do so by modifying your `.env` file. In the `.env` file,
locate a variable named `PLAYWRIGHT_TEST_BASE_URL`, which is set to `studio.localhost` by default. It is automatically configured for you when running `yarn setup:playwright`.

## .ENV file

`.env` that is generated by the setup script looks like following:

```
PLAYWRIGHT_TEST_BASE_URL=http://studio.localhost
PLAYWRIGHT_USER=<<your-test-user-username>>
PLAYWRIGHT_PASS=<<your-test-user-password>>
PLAYWRIGHT_DESIGNER_APP_NAME=<<name-of-the-designer-app>>
GITEA_ACCESS_TOKEN=<<generated-gitea-token-by-the-setup-script>>
```

## Short Step By Step Guide

This is a short step-by-step guide with minimum needed explanation to get started.

1. Install the dependencies within this package by running y`yarn install`.
2. Install browsers and set up Playwright with local `.env` by executing `yarn setup:playwright`.
3. You are now ready to execute tests using the command `yarn test:all`.