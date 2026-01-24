import React from 'react';
import { View, Button, Image } from 'react-native';
import { MultiArcCircle } from 'react-native-circles';
import {Text} from 'react-native';

export default function AddMeal() {
  return (
      <View style = {{display: 'flex', flexDirection: 'row', textAlignItem: 'center', color: 'fff'}} >
          <Button title="Ajouter un repas" />
          <Image source={require('../src/images/plus.png')} style = {{height: '20', width: '20'}} />
      </View>
  );
}