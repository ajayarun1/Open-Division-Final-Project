//import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input, Button } from 'react-native-elements';
import Constants from 'expo-constants';
import { Audio, Video } from 'expo-av';
import Hyperlink from 'react-native-hyperlink'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native'

const playbackObject = new Audio.Sound();
const meditationWalthrough1 = new Audio.Sound();
const Stack = createStackNavigator();
function Separator() {
  return <View style={styles.separator} />;
}
var i = 2
function pauseResume() {
  if (i % 2 == 0) {
    meditationWalthrough1.pauseAsync()
  }
  if (i % 2 !== 0) {
    meditationWalthrough1.playAsync()
  }
}

//NOTE TO SELF (5/2): add another mp3 file for mediation walkthrough in the meditation screen, leave no audio in help from others, and add motivational music in moving forward screen
// After completing audio, work on adding text and info to the three screens
function HomeScreen({ navigation }) {
  //Serene music plays to battle depressed feelings, different audio for each screen
  (async () => {
    await
      await playbackObject.loadAsync(require('./assets/meditationMusic.mp3'), initialStatus = {}, downloadFirst = true)
    await playbackObject.playAsync()
  })();
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
var x = 1;
function meditationScreen({ navigation }) {
  (async () => {
    await playbackObject.stopAsync()
    await meditationWalthrough1.loadAsync(require('./assets/med1.mp3'), initialStatus = {}, downloadFirst = true)
    await meditationWalthrough1.playAsync()
  })();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#D4AF37', fontWeight:'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
        Welcome to the Zen Room! Currently playing is a mediation walkthrough from a Quarantine-Zone approved field expert. Please click the butons below to play/resume the audio, or go back to the home screen!
        </Text>
      <Button
        title='Pause/Resume'
        type="outline"
        titleStyle={{
          textAlignVertical: 'center',
          color: "blue",
          fontSize: 18,
          fontWeight: 'bold'
        }}
        buttonStyle={{
          backgroundColor: '#e0218a',
          borderRadius: 6,
          height: 50,
          width: 100,
        }}
        onPress={() => { pauseResume(); i++ }}
      />
      <Separator />
      <Hyperlink linkDefault={true}>
        <Text style={{ fontSize: 15, textAlign: 'center', color: '#D4AF37', fontWeight:'bold' }}>
          Please close your eyes and follow along with today's digital yoga instructor! When finished, click below for today's yoga exercise!
    </Text>
    <Text>{'\n'}</Text>
        <Text style={{ color: 'blue', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>
          https://www.youtube.com/watch?v=d4S4twjeWTs
    </Text>
      </Hyperlink>
      <Separator />
      <Text style={{ color: '#D4AF37', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>
        Click on first image below for a link to free online yoga classes and the second image for free online mediation groups!
    </Text>
      <TouchableOpacity style={{ alignSelf: 'center' }}
        onPress={() => Linking.openURL('https://www.thecut.com/2016/01/best-free-yoga-classes-online.html')}>
        <Image
          source={require('./assets/medpic3.jpg')}
          style={{ height: 130, width: 150 }} />
      </TouchableOpacity>
      <TouchableOpacity style={{ alignSelf: 'center' }}
        onPress={() => Linking.openURL('https://www.mindfulleader.org/meditate-together')}>
        <Image
          source={require('./assets/medpic2.jpg')}
          style={{ height: 130, width: 150 }} />
      </TouchableOpacity>
      <Separator />
      <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); meditationWalthrough1.stopAsync(); playbackObject.playAsync(); x = 2 }} />
    </View>
  );
}
function spiritsScreen({ navigation }) {
  (async () => {
    await
      await playbackObject.stopAsync()
  })();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Lift your spirits!</Text>
      <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
    </View>
  );
}
function othersScreen({ navigation }) {
  (async () => {
    await
      await playbackObject.stopAsync()
  })();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Hear from others!</Text>
      <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
    </View>
  );
}
function suggestionsScreen({ navigation }) {
  (async () => {
    await
      await playbackObject.stopAsync()
  })();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Suggestions from the community-- we'll get through this together!</Text>
      <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
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