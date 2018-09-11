/** @format */

import { View } from 'react-native';
import React from 'react';
import {Topo, Resultado, Painel}  from './src/components';

export default props => (
  <View>
    <Topo />
    <Resultado />
    <Painel />
  </View>
);