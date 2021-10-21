/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {QueryClientProvider, QueryClient} from 'react-query';
import {SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const client = new QueryClient();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={client}>
        <HomeScreen />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
