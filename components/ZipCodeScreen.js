import React from 'react';
import { StyleSheet,ImageBackground, FlatList, View, Text, TouchableHighlight } from 'react-native';


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({ place, code, navigate }) => (
    <View>
        <Text style={styles.zipPlace}>{place}</Text>
        <Text style={styles.zipCode}>{code}</Text>
    </View>
)
const _keyExtractor = item => item.code
export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={{color:'white',}}>Choose a zip code</Text>),
            headerStyle: {
                backgroundColor: '#01579b',
              },
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ImageBackground source={require('../bg2.jpeg')} style={styles.backdrop}>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
                />
                </ImageBackground>
            </View>
        );
    }
} 
const styles = StyleSheet.create({
    zipPlace: {textAlign: 'center',fontSize: 20 , color: 'white'},
    zipCode: {textAlign: 'center',fontSize: 35 , color: 'white'},
    backdrop: { width: '100%', height: '100%' },
    
});