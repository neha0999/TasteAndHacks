

import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tab';
import { Saved,LandingScreen, SearchedRecipes, HomeScreen} from './screens';


const Stack = createStackNavigator();

function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingScreen">
       
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Saved"
          component={Saved}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchedRecipes"
          component={SearchedRecipes}
          options={{ headerShown: false }}
        />
         
        

      </Stack.Navigator>

    </NavigationContainer>
  );
}


export default App;
