import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';

export default class MyHeader extends Component {
  render() {
    return (
      <Header
        leftComponent={
          <Icon
            name={'bars'}
            type={'font-awesome'}
            color={'black'}
            onPress={() => this.props.navigation.toggleDrawer()}
          />
        }
        centerComponent={{
          text: this.props.title,
          style: styles.title,
        }}
        backgroundColor={'orange'}
      />
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
