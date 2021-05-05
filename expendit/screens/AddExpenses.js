import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import MyHeader from '../components/MyHeader';

export default class AddExpenses extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header
            leftComponent={
              <Icon
                name={'arrow-back'}
                type={'ionicons'}
                color={'black'}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              />
            }
            centerComponent={{
              text: 'Add Your Expenses',
              style: {fontWeight: 'bold', fontSize: 18}
            }}
            backgroundColor={'orange'}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.textStyle}>Add Your Expenses Here</Text>
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

