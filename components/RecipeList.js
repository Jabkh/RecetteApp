import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RecipeCard from './RecipeCard';
import { MEALS } from './data/recipes';

const RecipeList = ({ navigation, category }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filterRecipes = () => {
    if (category) {
      return MEALS.filter(meal => meal.categories.includes(category));
    } else if (selectedCategories.length === 0) {
      return MEALS;
    } else {
      return MEALS.filter(meal => selectedCategories.find(category => meal.categories.includes(category)));
    }
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filterRecipes()}
        renderItem={({ item }) => (
          <RecipeCard
            meal={item}
            onPress={() => navigation.navigate('RecipeDetail', { meal: item })}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
});

export default RecipeList;
