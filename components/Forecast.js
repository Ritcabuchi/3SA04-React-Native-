import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class Forecast extends React.Component {
    render() { 
        return (
        <View style={{flex:1,flexDirection: 'column', justifyContent: 'flex-start', alignItems:'center'}}>
            <View>                 
                <Text style= {styles.fBox1}>{"\n"}Zip code is {this.props.zipcode}.</Text>
                <Text style= {styles.fBox2}>{"\n"}{this.props.main}</Text>                 
                <Text style= {styles.fBox3}>{"\n"}{this.props.description}</Text>                 
                <Text style= {styles.fBox4}>{"\n"}{this.props.temp}°c</Text>                 
            </View>
        </View>
        ); 
    }
}
const styles = StyleSheet.create({
    fBox1: {textAlign: 'center',fontSize: 20 , color: 'white'},
    fBox2: {textAlign: 'center',fontSize: 35 , color: 'white'},
    fBox3: {textAlign: 'center',fontSize: 20 , color: 'white'},
    fBox4: {textAlign: 'center',fontSize: 35 , color: 'white'},
     
});