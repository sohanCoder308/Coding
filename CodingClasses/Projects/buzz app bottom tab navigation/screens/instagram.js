import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class InstaScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'yellow'}
          centerComponent={{
            text: 'Buzz App',
            style: { fontSize: 18, paddingLeft: 80, paddingRight: 160 },
          }}
        />
        <Text style={styles.title}>Instagram</Text>
        <Image
          source={require('../assets/insta.png')}
          style={{ width: 50, height: 50, marginBottom: 250 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    flex: 0.1,
    marginTop: 180,
    marginBottom: 0,
  },
});
