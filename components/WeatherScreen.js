import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Weather';


export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
              headerTitle: (<Text style= {styles.fBox1}>Weather</Text>),
              headerStyle: {
                backgroundColor: '#01579b',
              },
    
                 
         }
    }
render() {
    return (
        <Weather zipCode="96170" />
    );
}
}
const styles = StyleSheet.create({
    fBox1: {textAlign: 'center',fontSize: 20 , color: 'white'},
});