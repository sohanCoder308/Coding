import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import MyHeader from '../components/MyHeader';

export default class ViewExpenses extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <MyHeader
            title="View Expenses"
            navigation={this.props.navigation}
            backgroundColor={'white'}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.textStyle}>Your Expenses Here</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('AddExpenses')}>
            <Icon name={'circle-with-plus'} type={'entypo'} size={40} />
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
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonStyle: {
    marginLeft: 250,
    marginBottom: 20,
  },
});
