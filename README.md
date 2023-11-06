# cypress-iframe-testing

A quick demo for testing iframe in Cypress

## Technologies

- NextJS 14
- Cypress 13
- Webpack 5
- NodeJS 20
- Monorepo with NPM Workspaces

## Usage

- Installation (Gotta force the installation to ignore warnings)

  ```sh
  npm i --force
  ```

- Start applications (running on http://localhost:3030/index.js (lib) and http://localhost:3000 (app))

  ```sh
  npm start
  ```

- Open Cypress

  ```sh
  npm run test:cypress
  ```


## Notes

- Update the CSP to allow iframe
- Restrict iframe content by setting attributes such as `referrerpolicy` `sandbox` and `allowpaymentrequest`
- Write a wrapper for a third-party component for a better mocking/testing experience 
