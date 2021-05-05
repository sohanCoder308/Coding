import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Avatar, Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import * as ImagePicker from 'expo-image-picker';

export default class CustomSideBarMenu extends Component {
  render() {
    return (
      <View style={styles.middleContainer}>
        <DrawerItems {...this.props}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  middleContainer: {
    flex: 0.6,
  },
});
