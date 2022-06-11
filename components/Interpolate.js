import { StyleSheet, Text, View, SafeAreaView, Animated } from 'react-native'
import React from 'react'

const Interpolate = () => {
  const fadeValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(()=>{
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
       style={[styles.box, {
         opacity: fadeValue,
         transform: [
           {
            rotate: fadeValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['-30deg', '360deg'],
            })
           }
         ]
        }]}>
        <Text style={styles.name}>Black~vibes</Text>
      </Animated.View>
    </SafeAreaView>
  )
}

export default Interpolate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#B5A594',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  name: {
    color: "#fff",
    fontSize: 24,
    transform: [
      {rotate: "-30deg"}
    ],
    fontWeight: '500',
    textTransform: 'uppercase'
  }
})