import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import Forecast from './Forecast'

export default class Weather extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = { 
            forecast: { 
                zipcode: this.props.zipCode ,main: '-', description: '-', temp: 0 
            } 
        } 
    }
    render() {
        return (
            <View style={styles.container}>

                <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
                    <Forecast {...this.state.forecast}/>
                </ImageBackground>
            </View>
            );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 25},
    backdrop: { width: '100%', height: '100%'},
});