import { useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Actions, Router, Scene, Stack } from 'react-native-router-flux';
import { Home } from '@screens/Home';
import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Details } from '@screens/Details';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Screens } from '@screens/types';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from '@assets/themes/default';

export default function App() {
  useEffect(() => {
    Actions.home();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaView style={styles.container}>
        <ExpoStatusBar style="auto" />
        <Router>
          <Stack key="root">
            <Scene key={Screens.HOME} component={Home} hideNavBar />
            <Scene key={Screens.DETAILS} component={Details} hideNavBar />
          </Stack>
        </Router>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#F6F5FC',
  },
});
