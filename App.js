import React from 'react';
import Routes from './src/routes'
import { YellowBox } from 'reac-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return <Routes />
}