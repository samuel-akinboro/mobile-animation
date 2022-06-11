import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Fade from './components/Fade';
import Interpolate from './components/Interpolate';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Fade /> */}
      <Interpolate />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
