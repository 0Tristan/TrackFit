import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import InfoDate from "../components/InfoDate"
import NavBar from "../components/NavBar"
import ProgressBars from "../components/ProgressBars"
import AddMeal from "../components/AddMeal"

// Composant de la page principal

const HomeScreen = () => {
  return (
      <View style = {style.container}>
          <NavBar />
          <InfoDate />
          <View style = {style.progressContainer}>
            <ProgressBars />
                <View style = {style.progressBars}>
                    <ProgressBars />
                    <ProgressBars />
                </View>
          </View>
      </View>
  )
};

const style = StyleSheet.create({

        container: {
            display: 'flex',
            backgroundColor: 'black',
            flex: 1,
        },
        progressContainer: {
            display: 'flex',
            marginTop: '150',
            alignContent: 'center',
        },
        progressBars: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '175'
        }
    })

export default HomeScreen;

