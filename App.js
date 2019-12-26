/**

* Sample React Native App
* https://github.com/facebook/react-native
* @flow

*/

import React  from 'react';

import Login from './src/pages/Login';
import Welcome from './src/pages/Welcome';
import Learning from './src/pages/Learning';
import Beranda from './src/pages/Beranda';
import MataKuliah from './src/pages/MataKuliah';
import FileSaya from './src/pages/FileSaya';
import PlacementTestICT from './src/pages/PlacementTestICT';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const App = createSwitchNavigator({
  Login: {
    screen: Login,
  },
  Welcome: {
    screen: Welcome,
  },
  Learning: {
    screen: Learning,
  },
  Beranda: {
    screen: Beranda,
  },
  MataKuliah: {
    screen: MataKuliah,
  },
  FileSaya: {
    screen: FileSaya,
  },
  PlacementTestICT: {
    screen: PlacementTestICT,
  },
});

export default createAppContainer(App);
