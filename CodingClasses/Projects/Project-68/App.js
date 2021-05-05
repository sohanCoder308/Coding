import React from "react";
 import {
    StyleSheet,
    Text,
    View,
    Image,
     } from "react-native";
     import { createAppContainer } from "react-navigation";
     import { createBottomTabNavigator } from "react-navigation-tabs";
     
     import FacebookScreen from "./screens/facebook";
     import InstaScreen from "./screens/instagram";
     export default class App extends React.Component {
          render() {
               return (
                 
                 <AppContainer></AppContainer>
                 
               )
            } 
        } 
        const TabNavigator = createBottomTabNavigator({
             Facebook: {
                screen: FacebookScreen,
                navigationOptions:{
                  tabBarIcon:<Image
                  source ={require('./assets/fb.png')}
                  style = {{width:20,height:20}}/>,
                  tabBarLabel:'Facebook',
              }
              }, 
             Search: {
                screen: InstaScreen ,
                navigationOptions:{
                  tabBarIcon:<Image
                  source ={require('./assets/insta.png')}
                  style = {{width:20,height:20}}/>,
                  tabBarLabel:'Instagram',
              }
              }
             }); 
        const AppContainer = createAppContainer(TabNavigator);
        const styles = StyleSheet.create({
             container: {
                  flex: 1,
                  backgroundColor: "red",
                  alignItems: "center",
                  justifyContent: "center" 
                } 
            });