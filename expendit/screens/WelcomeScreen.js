import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import MyHeader from '../components/MyHeader';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header
            centerComponent={{
              text: 'Welcome to Expendit',
              style: { fontSize: 18, fontWeight: 'bold' },
            }}
            backgroundColor="orange"
          />
        </View>
        <View style={styles.subContainer}>
          <View style={styles.container3}>
            <Text style={styles.textStyle}>Welcome to Expendit !</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Text style={styles.buttonText}> Let's get started . .</Text>
          </TouchableOpacity>
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
  container3: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  buttonStyle: {
    backgroundColor: 'black',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  buttonText: {
    color: 'white',
  },
});
