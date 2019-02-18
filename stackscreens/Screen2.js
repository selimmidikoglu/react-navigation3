
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


class ScreenTwo extends Component{
    render(){
        return (
            <View style={{flex:1}}>
            <Text>Sayfa 2</Text>
                <Button title="GO Third" onPress={(this.props.navigation.navigate('Screen3'))}></Button>
                
            </View>
        )
    }
};


export default ScreenTwo;