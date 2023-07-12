import { AppRegistry } from 'react-native';
import App from './app/App';
import { printEnv } from '@wei/env-core';

// (async () => {
//   const keyPair = await createGpgKey('1002', 'server');
//   console.log(keyPair.privateKey);
//   console.log(keyPair.publicKey);
// })();
console.log(process.env.REACT_APP_STAGE_MODE);
console.log(process.env);
console.log(process.env.APPLOVIN_ENABLED);
console.log(process.env.REACT_APP_STAGE_MODE);
console.log(process.env.QUIZ_JAVASCRIPT_KEY);
printEnv();
AppRegistry.registerComponent('Wallet', () => App);
