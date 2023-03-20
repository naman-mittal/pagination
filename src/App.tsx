import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import colors from './theme/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.root}>
        <StatusBar backgroundColor={colors.primaryDark} />
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
