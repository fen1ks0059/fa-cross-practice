import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert('Читать далее', 'Переход к полному тексту статьи...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Журнал Косачева Михаила</Text>
      <Text style={styles.news}>Новости</Text>
      <View style={styles.card}>
        <Image 
          style={styles.image}
          source={{ uri: 'rabota.jpg' }} // Make sure the image is available in the project directory
        />
        <Text style={styles.title}>Сдаем первую лабу по реакту</Text>
        <Text style={styles.description}>
          Для того чтобы сдать лабу нужно оформить контент похожим образом на то, как это получилось
        </Text>
        <Button 
          title="Читать подробнее"
          onPress={handlePress}
          color="#007aff"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#00FF7F',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  news: {
    fontSize: 18,
    color: '#006aff',
    marginBottom: 12,
    textAlign: 'right',
  },
  card: {
    padding: 16,
    backgroundColor: '#008080',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    color: '#000',
    marginBottom: 16,
  },
});