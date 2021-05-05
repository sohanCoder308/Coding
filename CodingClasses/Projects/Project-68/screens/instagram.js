import React from 'react';
import {
 Text,
 View,
 StyleSheet
} from 'react-native';
import {Header} from 'react-native-elements';

export default class InstaScreen extends React.Component {
     render() {
          return ( 
          <View style={styles.container}> 
          <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Buzz App',
            style: { color: '#fff', fontSize: 20, width:200,textAlign:'center' },
          }}
        />
          <Text style = {styles.title}>Instagram!
        </Text> 
        </View> 
        ); 
    } 
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"yellow",
    },
    title: {
        marginTop:200,
         textColor:"blue",
         alignItems: "center",
         justifyContent: "center" 
       } 
   });