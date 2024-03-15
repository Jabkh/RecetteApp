import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements'; // Importez le composant Card de react-native-elements

const RecipeDetailScreen = ({ route }) => {
  // Récupérez les propriétés correctement de l'objet route.params
  const { meal } = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <Image
          source={{ uri: meal.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        <Card.Title>{meal.title}</Card.Title>
        <Text style={styles.description}>{meal.description}</Text>
        <Text style={styles.ingredients}>Ingrédients: {meal.ingredients.join(', ')}</Text>
        <Text style={styles.instructions}>Instructions: {meal.instructions}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  ingredients: {
    fontSize: 18,
    marginBottom: 10,
  },
  instructions: {
    fontSize: 18,
  },
});

export default RecipeDetailScreen;
