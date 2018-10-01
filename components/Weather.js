import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                zipcode: 'zipcode', main: 'main', description: 'description', temp: 0
            }
        }
    }
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=1d2822a6e2fc38ebd9bb825f2dda2cca`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            zipcode: this.props.zipCode,
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                        }
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    componentDidMount = () => this.fetchData()
    render() {
        return (
            <View style={styles.container}>

                <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
                    <Forecast {...this.state.forecast} />
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%' },
});