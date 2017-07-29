import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export class ViewComponent {
  ender() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
