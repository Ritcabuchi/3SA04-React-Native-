import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class Forecast extends React.Component {
    render() { 
        return (
        <View style={{flex:1,flexDirection: 'column', justifyContent: 'flex-end', alignItems:'flex-start'}}>                 
            <Text style= {styles.fBox1}>Zip code is {this.props.zipcode}.</Text>
            <Text style= {styles.fBox2}>{this.props.main}</Text>                 
            <Text style= {styles.fBox3}>{this.props.description}</Text>                 
            <Text style= {styles.fBox4}>{this.props.temp}</Text>                 
            <Text style= {styles.fBox5}>°C</Text>             
        </View>
        ); 
    }
}
const styles = StyleSheet.create({
    fBox1: {textAlign: 'center',fontSize: 20 , color: 'white',backgroundColor: 'lightblue',height:50,width:200},
    fBox2: {textAlign: 'center',fontSize: 20 , color: 'white',backgroundColor: 'blue',height:50,width:200},
    fBox3: {textAlign: 'center',fontSize: 20 , color: 'white',backgroundColor: 'lightblue',height:50,width:200},
    fBox4: {textAlign: 'center',fontSize: 20 , color: 'white',backgroundColor: 'blue',height:50,width:200},
    fBox5: {textAlign: 'center',fontSize: 20 , color: 'white',backgroundColor: 'lightblue',height:50,width:200},
});