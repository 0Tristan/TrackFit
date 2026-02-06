import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { FontAwesome } from '@react-native-vector-icons/fontawesome6';
import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'


const NavBar = () => {
    return (
        <View style={style.navContainer}>
            <FontAwesomeIcon icon={faHouse} />
        </View>
        )
    }

const style = StyleSheet.create({

    })

export default NavBar;