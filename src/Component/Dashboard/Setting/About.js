import React from 'react';
import { Text, StyleSheet,View } from 'react-native';


const About = () => {
  return (
    <View style={{flex:1,backgroundColor:'#222628',padding:20}}>
      <Text style={styles.head}>ABOUT</Text>
      <Text style={styles.text}>
        Started in Bushwick, Brooklyn in 2018, Karp is a platform based e commerce site that brings two parties together
        while improving society in the process. The demand for parking is not dictated by the literal supply of spaces
        but the supply of available spaces. As urban areas become increasingly congested it is imperative that we
        maximize the spaces we do have in order to ensure a better flowing society.
      </Text>
      <Text style={styles.text}>
        Karp, like the fish, is designed to help with that flow by making private parking spaces available during the
        hours they are not occupied. Our goal is to to help provide spaces at a more affordable rate then a private
        parking lot while opening up a new streams of revenue for the host. At Karp we are ending the monopoly of
        private parking tyranny, one driveway at a time.
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  head: {
    color: '#FFE166',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  text: {
    paddingBottom: 20,
    color: 'white',
    fontSize: 16,
  },
});
