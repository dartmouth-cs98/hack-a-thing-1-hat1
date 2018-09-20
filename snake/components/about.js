import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71xDO1sNMRL._SX466_.jpg' }}
        />
        <Text>
          This is a snek eat snek world. Are you ready?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
});

export default About;
