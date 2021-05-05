import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BarCode from './codescanner/barcode'

export default class App extends React.Component {
 render(){ 
  return (
    <BarCode />
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
