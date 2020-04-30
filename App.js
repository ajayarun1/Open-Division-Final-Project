//import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input, Button } from 'react-native-elements';
import Constants from 'expo-constants';
import SoundPlayer from 'react-native-sound-player'
SoundPlayer.loadSoundFile('test','mp3');
const Stack = createStackNavigator();
function Separator() {
  return <View style={styles.separator} />;
}
function playSong() {
  try {
    SoundPlayer.play()
  } catch (e) {
    alert('Cannot play the file')
    console.log('cannot play the song file', e)
  }
}
function HomeScreen({ navigation }) {
  {playSong();}
  return (
    //Color scheme scientifically proven to be comforting
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#86CD99' }}>
      <Text style={{ color: '#e0218a', fontSize: 24, fontWeight: 'bold' }}>
        Welcome to Quarantine-Zone!
      </Text>
      <Text style={{ color: '#00008b', textAlign: 'center', fontSize: 24, lineHeight: 30, height: 205, margin: 20 }}>
        This is an app created to help you battle any negative emotions you may be feeling, especially in a world victimized to COVID-19.
        {'\n'}
        {'\n'}
        Please select one of the following rooms to begin your self-relief
      </Text>
      <Image
        style={{ height: 100, width: 100 }}
        source={require('./prayerPic.jpg')}
      />
      <Separator />
      <Button
        title='Zen'
        type="outline"
        titleStyle={{
          textAlignVertical: 'center',
          color: "white",
          fontSize: 30,
          fontWeight: 'bold'
        }}
        buttonStyle={{
          backgroundColor: '#e0218a',
          borderRadius: 6,
          height: 50,
          width: 150,
        }}

        onPress={() => navigation.navigate('Meditation')}
      />
      <Separator />
      <Button
        title='Lift your spirits'
        type="outline"
        titleStyle={{
          textAlignVertical: 'center',
          color: "#FFDF00",
          fontSize: 30,
          fontWeight: 'bold'
        }}
        buttonStyle={{
          backgroundColor: '#e0218a',
          borderRadius: 6,
          height: 75,
          width: 150,
        }}
        onPress={() => navigation.navigate('spirits')}
      />
      <Separator />
      <Button
        title='Hear from others'
        type="outline"
        titleStyle={{
          textAlignVertical: 'center',
          color: "blue",
          fontSize: 30,
          fontWeight: 'bold'
        }}
        buttonStyle={{
          backgroundColor: '#e0218a',
          borderRadius: 6,
          height: 80,
          width: 250,
        }}
        onPress={() => navigation.navigate('others')}
      />
      <Separator />
      <Button
        title='Moving Forward'
        type="outline"
        titleStyle={{
          textAlignVertical: 'center',
          color: "blue",
          fontSize: 30,
          fontWeight: 'bold'
        }}
        buttonStyle={{
          backgroundColor: '#e0218a',
          borderRadius: 6,
          height: 70,
          width: 150,
        }}
        onPress={() => navigation.navigate('suggestions')}
      />
    </View>

  );
}
function meditationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Welcome to the Zen room</Text>
      <Text> {'\n'} </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function spiritsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Lift your spirits!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function othersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Hear from others!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function suggestionsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Suggestions from the community-- we'll get through this together!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#007600',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            },
          }}
        />
        <Stack.Screen name="Meditation" component={meditationScreen}
          options={{
            title: 'Zen Room',
            headerStyle: {
              backgroundColor: '#007600',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            },
          }}
        />
        <Stack.Screen name="spirits" component={spiritsScreen}
          options={{
            title: 'Lift Your Spirits',
            headerStyle: {
              backgroundColor: '#007600',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            },
          }}
        />
        <Stack.Screen name="others" component={othersScreen}
          options={{
            title: 'Hear from others!',
            headerStyle: {
              backgroundColor: '#007600',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            },
          }}
        />
        <Stack.Screen name="suggestions" component={suggestionsScreen}
          options={{
            title: 'Moving Forward',
            headerStyle: {
              backgroundColor: '#007600',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;