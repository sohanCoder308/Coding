import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyHeader from '../components/MyHeader';

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <MyHeader
            title={'Settings'}
            navigation={this.props.navigation}
            backgroundColor={'orange'}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.textStyle}>Settings Here</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
