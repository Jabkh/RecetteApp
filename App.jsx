import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeDetailScreen from './components/RecipeDetailScreen';
import RecipeList from './components/RecipeList';
import Home from './components/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Recettes' }}
        />
        <Stack.Screen
          name="RecipeList"
          component={RecipeList}
          options={{ title: 'Recettes' }}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={{ title: 'Détail de la recette' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
