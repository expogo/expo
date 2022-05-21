import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Приютите котят</Text>
      <Text style={styles.textread}>Маленьким котятам нужен дом. Не оставьте их.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
   textread: {
    margin: 24,
    marginTop: -9,
    fontSize: 12,
    textAlign: 'left',
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  logo: {
    height: 128,
    width: 228,
  }
});