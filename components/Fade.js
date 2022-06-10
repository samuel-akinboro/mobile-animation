import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Fade = () => {
  return (
    <View style={styles.animatedTextView}>
      <Text style={styles.animatedText}>Fade in animation</Text>
    </View>
  )
}

export default Fade

const styles = StyleSheet.create({
  animatedTextView: {
    backgroundColor: '#B5A594',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10
  },
  animatedText: {
    fontSize: 20,
    color: 'white',
  }
})