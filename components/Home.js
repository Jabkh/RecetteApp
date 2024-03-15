import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const navigation = useNavigation(); // Initialise la navigation

  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(item => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  // Fonction de navigation avec le nom de catégorie comme argument
  const navigateToCategory = (category) => {
    navigation.navigate('RecipeList', { category });
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CustomButton
          color={'#f5428d'}
          text={"Italien"}
          onPress={() => {
            toggleFilter("Italien");
            navigateToCategory("Italien");
          }}
          selected={selectedFilters.includes("Italien")}
        />
        <CustomButton
          color={'#f54242'}
          text={"Rapide et Facile"}
          onPress={() => {
            toggleFilter("Rapide et Facile");
            navigateToCategory("Rapide et Facile");
          }}
          selected={selectedFilters.includes("Rapide et Facile")}
        />
      </View>
      <View style={styles.row}>
        <CustomButton
          color={'#f5a442'}
          text={"Burgers"}
          onPress={() => {
            toggleFilter("Burgers");
            navigateToCategory("Burgers");
          }}
          selected={selectedFilters.includes("Burgers")}
        />
        <CustomButton
          color={'#f5d142'}
          text={"Allemand"}
          onPress={() => {
            toggleFilter("Allemand");
            navigateToCategory("Allemand");
          }}
          selected={selectedFilters.includes("Allemand")}
        />
      </View>
      <View style={styles.row}>
        <CustomButton
          color={'#368dff'}
          text={"Bon et Léger"}
          onPress={() => {
            toggleFilter("Bon et Léger");
            navigateToCategory("Bon et Léger");
          }}
          selected={selectedFilters.includes("Bon et Léger")}
        />
        <CustomButton
          color={'#41d95d'}
          text={"Exotique"}
          onPress={() => {
            toggleFilter("Exotique");
            navigateToCategory("Exotique");
          }}
          selected={selectedFilters.includes("Exotique")}
        />
      </View>
      <View style={styles.row}>
        <CustomButton
          color={'#9eecff'}
          text={"Pti Dej"}
          onPress={() => {
            toggleFilter("Pti Dej");
            navigateToCategory("Pti Dej");
          }}
          selected={selectedFilters.includes("Pti Dej")}
        />
        <CustomButton
          color={'#b9ffb0'}
          text={"Asiatique"}
          onPress={() => {
            toggleFilter("Asiatique");
            navigateToCategory("Asiatique");
          }}
          selected={selectedFilters.includes("Asiatique")}
        />
      </View>
      <View style={styles.row}>
        <CustomButton
          color={'#ffc7ff'}
          text={"Français"}
          onPress={() => {
            toggleFilter("Français");
            navigateToCategory("Français");
          }}
          selected={selectedFilters.includes("Français")}
        />
        <CustomButton
          color={'#47fced'}
          text={"Frais"}
          onPress={() => {
            toggleFilter("Frais");
            navigateToCategory("Frais");
          }}
          selected={selectedFilters.includes("Frais")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  button: {
    width: '48%', 
    marginBottom: 20,
  },
});

export default Home;
