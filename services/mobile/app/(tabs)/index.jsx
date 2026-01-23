import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import InfoDate from "../components/InfoDate"
import NavBar from "../components/NavBar"
import SafeArea from "../components/SafeArea"

// Composant de la page principal

const HomeScreen = () => {
  return (
      <View style = {style.container}>
          <SafeArea />
          <NavBar />
          <InfoDate />
      </View>
  )
};

const style = StyleSheet.create({

        container: {
            display: 'flex',
            backgroundColor: 'black',
            flex: 1,
        }
    })

export default HomeScreen;

