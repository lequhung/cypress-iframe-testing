# cypress-iframe-testing

A quick demo for testing iframe in Cypress

## Technologies

- NextJS
- Cypress 13
- Webpack 5
- NodeJS 20
- NPM Workspaces

## Usage

- Installation (Gotta force the installation to ignore warnings)

  ```sh
  npm i --force
  ```

- Start application (running on http://localhost:3030/index.js (lib) and http://localhost:3000 (app))

  ```sh
  npm start
  ```

- Open Cypress

  ```sh
  npm run test:cypress
  ```


## Notes

- Check the CSP for you app to allow iframe
- Restrict iframe content by setting attributes such as `referrerpolicy` `sandbox` and `allowpaymentrequest`
- Write a wrapper for third-party lib if possible
