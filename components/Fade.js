import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Animated } from 'react-native'

const Fade = () => {
  const fadeValue = React.useRef(new Animated.Value(0)).current;

  // fade in animation
  const animateIn = () => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  // fade out animation
  const animateOut = () => {
    Animated.timing(fadeValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  return (
    <SafeAreaView style={{flex: 1, width: "100%"}}>
      <View style={styles.container}>
        <Animated.View style={[styles.animatedTextView, {opacity: fadeValue}]}>
          <Text style={styles.animatedText}>Fade in animation</Text>
        </Animated.View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={animateIn}>
            <Text style={{color: "#fff", fontWeight: "700"}}>Fade In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={animateOut}>
            <Text style={{color: "#fff", fontWeight: "700"}}>Fade out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Fade

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  animatedTextView: {
    backgroundColor: '#B5A594',
    height: 150,
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  animatedText: {
    fontSize: 28,
    color: 'white',
    fontWeight: '300'
  },
  buttonContainer:{
    flexDirection: 'row',
    width: "80%",
    marginTop: 30,
    justifyContent: 'space-between'
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: "#B5A594",
    height: 50,
    flex: 0.48,
    justifyContent: 'center'
  }
})