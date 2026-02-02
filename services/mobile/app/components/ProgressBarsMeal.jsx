import React from 'react';
import { View } from 'react-native';
import { MultiArcCircle } from 'react-native-circles';
import {Text} from 'react-native';


export default function ProgressBarsMeal() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <MultiArcCircle radius={100} intervals={[{ start: -100, end:100}]} color="#454545" backgroundColor="transparent" width={17}
    />
      <MultiArcCircle radius={100} intervals={[{ start: -100, end:0}]} color="#FF8000" backgroundColor="transparent" width={17}
    />
      <Text style={{color: '#FFFFFF', fontSize: '24', fontWeight: '900'}}>1,5/3</Text>
      <Text style={{color: '#9A9A9A', fontSize: '12', fontWeight: '900'}}>Repas</Text>
    </View>
  );
}