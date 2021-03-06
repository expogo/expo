import React from "react";
import { View, StyleSheet, Text, Image, Pressable, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const About = ({navigation}) => {
  return (
     <View style={{justifyContent: 'center', alignItems: 'center', padding: 24, }}>
      <Text style={styles.paragraph}>Первая кошка</Text>
      <Image style={styles.logo} source={require('./assets/cat3.jpg')}/>
      <Text style={styles.textread}>Телефон:</Text>
      <Text style={styles.phonetext}>8(777)666-55-44</Text>
      <Text style={styles.text_cont, {marginBottom:25}}>Частые контакты: </Text>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      
      >
      <View>
        
         <Image style={styles.logo2} source={require('./assets/cat4.jpeg')}/>
         <Text style={styles.text_forcont}>Вторая кошка</Text>
         <Text style ={styles.text_phone2}>6(491)663-18</Text>
        <Pressable
        onPress={() => navigation.navigate('Профиль Второй кошки')}
        style={{ alignItems: 'center', padding: 10, marginBottom: 10, marginTop: 10, }}
      >
      <Text>профиль</Text>
      </Pressable>
      </View>
      </ScrollView>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{ alignItems: 'center', padding: 10, marginBottom: 10, marginTop: 10, }}
      >
      <Text>Назад</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
   textread: {
    margin: 24,
    marginTop: 20,
    fontSize: 16,
  },
  
    phonetext: {
    margin: 22,
    fontWeight: 'bold',
    marginTop: -9,
    fontSize: 18,
  },
    separator: {
    borderBottomColor: 'black',
    marginRight:20,
    marginTop:5,
    backgroundColor:'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
    text_cont: {
    margin: 22,

    marginTop: -2,
    fontSize: 18,
  },
    text_forcont: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 13,
    fontSize: 14,
  },
    text_phone2: {
    textAlign: 'center',
    marginTop: 10,

  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  logo: {

    borderRadius: 200 / 2,
    height: 128,
    width: 128,
  },
    logo2: {
    
    borderRadius: 200 / 2,
    height: 88,
    width: 88,
  }
});

export default About;