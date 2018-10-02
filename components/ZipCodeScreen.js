import React from 'react';
import { StyleSheet,ImageBackground, FlatList, View, Text,Image, TouchableHighlight } from 'react-native';


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({ place, code, navigate }) => (
    <TouchableHighlight onPress={() => navigate('Weather', {zipCode: code})}> 
        
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        
        </View>
        
    </TouchableHighlight> 
    
)
const _keyExtractor = item => item.code
export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={{color:'white',}}>Choose a zip code</Text>),
            headerStyle: {
                backgroundColor: '#01579b',
              },
              titleStyle: {
                fontFamily: 'MuseoSansRounded-300',
                fontWeight: '300',
                textAlign: 'center'
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
                <Text>ffff</Text>
                <View style={styles.Credit}>   
                <Image
                    source={require('../bg4.png')} style={styles.logo}
                />
                <View style={styles.NameId}>
                <Text style= {styles.name}>Riduwan Soolaeh</Text>
                <Text style= {styles.id}>5835512044</Text>
                </View>
            </View> 
                </ImageBackground>
                
            </View>
            
        );
    }
} 
const styles = StyleSheet.create({
    zipItem: {flexDirection: 'row',justifyContent: 'space-around',},
    zipPlace: {fontSize: 20 , color: 'white'},
    zipCode: {fontSize: 20 , color: 'white'},
    backdrop: { width: '100%', height: '100%' },
    name: {textAlign: 'center',fontSize: 15 , color: 'white',shadowColor:'black'},
    id: {textAlign: 'center',fontSize: 10 , color: 'white',shadowColor:'black'},
     logo: {
        width: 25, height: 33,shadowColor:'black'
     },
    Credit: {flex:1,flexDirection: 'row',justifyContent: 'center',alignItems:'flex-end', paddingBottom: 120 },
    NameId: {flexDirection: 'column',justifyContent: 'center',alignItems:'center',paddingTop:400 },
    view: {
        flexDirection: 'column',justifyContent: 'center',
    },
    
});