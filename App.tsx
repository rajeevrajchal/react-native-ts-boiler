import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Store from './src/store/store';
import Home from './src/entities/screens/home';
import About from './src/entities/screens/about';

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Navigator initialRouteName="Home" headerMode="none">
          <Screen name="Home" component={Home} />
          <Screen name="About" component={About} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
