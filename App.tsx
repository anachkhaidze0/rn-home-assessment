import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { ThemeProvider, ThemeContext } from './src/context/ThemeProvider'; // Import ThemeProvider and ThemeContext
import './global.css';
import { ThemeButton } from 'components/ThemeButton';
import HomeScreen from 'components/HomeScreen';
import { GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';

const App = () => {
  return (
    <ThemeProvider>
      <MainScreen />
    </ThemeProvider>
  );
};

const MainScreen = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
export default App;
