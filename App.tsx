import { useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Actions, Router, Scene, Stack } from 'react-native-router-flux';
import { Home } from '@screens/Home';
import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Details } from '@screens/Details';

export default function App() {
  useEffect(() => {
    Actions.home();
  }, []);

  return (
    <View style={styles.container}>
      <ExpoStatusBar style="auto" />
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} hideNavBar />
          <Scene key="details" component={Details} hideNavBar />
        </Stack>
      </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#F6F5FC',
  },
});
