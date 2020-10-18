import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import MainNavigation from "./src/navigation/MainNavigation";
import {View} from "react-native";
import layout from "./src/assets/styles/layout";

const App:React.FC = () => {
  return (
    <Provider store={store}>
      <View style={layout.safeArea}>
        <NavigationContainer>
          <MainNavigation/>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

export default App;
