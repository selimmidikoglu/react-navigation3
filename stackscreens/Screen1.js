
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


class ScreenOne extends Component{
    render(){
        return (
            <View style={{flex:1}}>
            <Text>Sayfa 1</Text>
                <Button title="GO Second" onPress={(this.props.navigation.navigate('Screen2'))}></Button>

            </View>
        )
    }
};


export default ScreenOne;