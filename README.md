Flow:
1. Clone the repository to your machine
2. Open the project in code editor
3. Open Terminal
4. Run `npm install` in Terminal
5. Run `npx cypress open` in Terminal to run tests in UI
6. Run `npx cypress run` in Terminal to run tests in headless mode

Project structure:
1. Fixtures folder: includes data that would be uploaded to the system
2. Integration -> Basic method folder: includes methods used in tests 
3. Integration -> Page objects folder: includes files for each page/functionality with selectors and methods
4. Integration -> Test Data folder: includes files with used data (labels, credentials, address, credit card etc.)
5. Integration -> Tests folder: includes files with tests
6. Integration -> Plugins folder: includes files with data related to installed plugins
7. Integration -> Support folder: includes files with data related to custom commands (login command)

Notes:
1. Default link is set in `cypress.json` file, `baseUrl`
2. Part of customer link site is set in integration/test data/data.js, "pages"
2. File with tests should have ".spec.js" format; this settings can be changed in `cypress.json` file
3. Credentials for login are set in integration/test data/data.js, "credentials"
