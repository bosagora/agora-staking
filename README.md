# Agora Staking


The [Agora Staking](https://agora-staking.bosagora.org/) is the BOSAGORA Foundation's official way to deposit your BOA for staking on Agora

## Dependencies

  - **Technology stack**: 
    - [React](https://reactjs.org/) via [CRA](https://reactjs.org/docs/create-a-new-react-app.html)
    - [Redux](https://redux.js.org/)
    - [TypeScript](https://www.typescriptlang.org/)
    - [Web3-React](https://github.com/NoahZinsmeister/web3-react)
    - [Grommet](https://v2.grommet.io/)
    - [Yarn](https://yarnpkg.com/)


## Configuration

To have full functionality of the Agora staking, you must create an `.env` file in your root directory and add an environment variable.


## Installation

**Available Scripts**
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

**Install Dependencies and Start the Application**
```
yarn
yarn start
```

## Development workflow

By default, `agora` acts as the primary base branch which all PRs should merge into. Make sure any pull requests target this branch.

## Launchpad deployment

- The `agora` branch represents the live **Mainnet** version of the Agora Staking. Open a PR to merge `agora` into `mainnet` to deploy the Mainnet Agora Staking

----
## Open source licensing info
Creative Commons Zero v1.0 Universal - For more information read the [`LICENSE`](./LICENSE) file.

----
