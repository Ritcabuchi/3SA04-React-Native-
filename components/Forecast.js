import React from 'react';

import { Text, View,StyleSheet,Image } from 'react-native';



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
            <View style={styles.Credit}>   
                <Image
                    source={require('../bg4.png')} style={styles.logo}
                />
                <View style={styles.NameId}>
                <Text style= {styles.name}>Riduwan Soolaeh</Text>
                <Text style= {styles.id}>5835512044</Text>
                </View>
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
    name: {textAlign: 'center',fontSize: 15 , color: 'white',shadowColor:'black'},
    id: {textAlign: 'center',fontSize: 10 , color: 'white',shadowColor:'black'},
     logo: {
        width: 25, height: 33,shadowColor:'black'
     },
    Credit: {flex:1,flexDirection: 'row',justifyContent: 'center',alignItems:'flex-end', paddingBottom: 120 },
    NameId: {flexDirection: 'column',justifyContent: 'center',alignItems:'center',paddingTop:400 },
     
 

});