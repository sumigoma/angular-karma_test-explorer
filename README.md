# Angular/Karma Test Explorer for Visual Studio Code

The `Angular/Karma Test Explorer` extension allows you to run or debug your Angular or Karma tests with the
[Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer) extension on Visual Studio Code.

![Example run tests](img/img-running-tests-readme.png)

## Features

- See all angular tests in the side bar without running them.
- Reload tests manually by the reload button in the UI.
- Run all tests together, run set of tests, run single test and see results in the UI.
- Loads values from user karma.conf.js (some get removed to make the explorer work correctly).
- Shows a failed test's log when the test is selected in the explorer.
- Detects configuration changes and reload tests automatically.

## Getting started

- Install the extension.
- Restart VS Code and open the Test view.
- Run your tests using the ![Run](img/run.png) icon.
- If a test failed click on it and you will see the fail information on vscode `Test Explorer` output channel.

## Planned features

- Debug tests.
- Cancel current run.
- Block during test execution.
- Support standalone karma.
- Detect file changes(workspace, test definitions) and reload tests automatically.
- Lets you choose test suites or individual tests in the explorer that should be run automatically after each file change.
- Adds CodeLenses to your test files for starting and debugging tests.
- Adds Gutter decorations to your test files showing the tests' state.
- Adds line decorations to the source line where a test failed.
- Forwards the console output from Karma to a VS Code output channel.

## Configuration

List of currently used properties:

Property                                              | Description
----------------------------------------------------- |---------------------------------------------------------------
`angularKarmaTestExplorer.defaultAngularProjectName`  | set the default angular project to be tested, if this is is null default project in angular.json will be loaded.	
`angularKarmaTestExplorer.defaultSocketConnectionPort`| this is the port that will be used to connect Karma with the test explorer.
`angularKarmaTestExplorer.debugMode`                  | this will enable debug mode, which will create a new output channel with detailed logs.


## Disclaimer

This project is in early stages of development.
If you find a bug or think that a feature is missing and is not in the backlog please report it.
If you wanna help out please read the [contribution guidelines for this project](.github/CONTRIBUTING.md).

### VERSION/UPDATE PROBLEM

If you were using 1.0.3 version I made some mistakes in the publishing process and I had to republish the extension.
If you re on this version and not getting updates please uninstall the extension and install it again to the latest preview release version (0.X.X)
