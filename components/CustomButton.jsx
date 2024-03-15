import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, text, style, color }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, { backgroundColor: color }, style]}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 140,
    height: 140,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 'bold',
    boxShadow: '1 10px 10px 0 rgba(0, 0, 0, 0.1)',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default CustomButton;
