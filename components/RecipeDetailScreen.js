import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'; // Importez le composant Card de react-native-elements

const RecipeDetailScreen = ({ route }) => {
  // Récupérez les propriétés correctement de l'objet route.params
  const { meal } = route.params;

  const [showInstructions, setShowInstructions] = useState(false);

  // Fonction pour basculer l'affichage des instructions
  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

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
        {/* Bouton pour afficher/masquer les instructions */}
        <TouchableOpacity onPress={toggleInstructions}>
          <Text style={styles.toggleButton}>
            {showInstructions ? 'Masquer les instructions' : 'Afficher les instructions'}
          </Text>
        </TouchableOpacity>
        {/* Affichage des instructions */}
        {showInstructions && <Text style={styles.instructions}>Instructions: {meal.steps}</Text>}
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
    backgroundColor: '#fff',
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
    backgroundColor: '#f5f5f5',
    fontSize: 18,
    marginTop: 10,
  },
  toggleButton: {
    fontSize: 16,
    color: 'grey',
    textDecorationLine: 'none',
    marginBottom: 10,
  },
});

export default RecipeDetailScreen;
