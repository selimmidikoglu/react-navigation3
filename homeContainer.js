
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import ScreenOne from './stackscreens/Screen1';
import ScreenTwo from './stackscreens/Screen2';
import ScreenThree from './stackscreens/Screen3';
//routes

const HomeCapsule = createStackNavigator({
    
    ScreenOne : {
        screen : ScreenOne
    },
    ScreenTwoPage : {
        screen : ScreenTwo
    },
    ScreenThree : {
        screen : ScreenThree
    }
},


);

const HomeContainer = createAppContainer(HomeCapsule)

export default HomeContainer;