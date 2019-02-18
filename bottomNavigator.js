
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import OrdersPage from './screens/ordersPage';
import ProfilePage from './screens/profilePage';
import HomeContainer from './homeContainer';

const BottomTabNavigator1 = createMaterialBottomTabNavigator({
    
    HomeContainer : {
        screen : HomeContainer
    },
    OrdersPage : {
        screen : OrdersPage
    },
    ProfilePage : {
        screen : ProfilePage
    }
},


);

const BottomTabNavigator = createAppContainer(BottomTabNavigator1)

export default BottomTabNavigator;