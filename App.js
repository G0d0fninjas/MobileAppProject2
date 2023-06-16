import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import ViewEmployee from './ViewEmployee';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' headerMode='none'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='ViewEmployee' component={ViewEmployee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
