//import React from 'react';
import { StyleSheet, Text, View, Image, Linking, FlatList, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input, Button } from 'react-native-elements';
import Constants from 'expo-constants';
import { Audio, Video } from 'expo-av';
import Hyperlink from 'react-native-hyperlink'
import { TouchableOpacity } from 'react-native-gesture-handler';

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
}
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
      <Text style={{ color: '#D4AF37', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
        <Text style={{ fontSize: 15, textAlign: 'center', color: '#D4AF37', fontWeight: 'bold' }}>
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
  var randNum = Math.floor(Math.random() * 13);
  (async () => {
    await
      await playbackObject.stopAsync()
  })();
  if (randNum == 0) {
    //Walk in and make you smile
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
        <Image
          style={{ height: 250, width: 550 }}
          source={{
            uri: 'https://media.giphy.com/media/3o7WTArz1fjYVGbNU4/giphy.gif'
          }}
        />
        <Separator />
        <Button title="Another one!" onPress={() => { (navigation.navigate('Home')); (navigation.navigate('spirits')); }} />
        <Separator />
        <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
      </View>
    );
  }
  if (randNum == 1) {
    //Arial pizza
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
        <Image
          style={{ height: 270, width: 430 }}
          source={{
            uri: 'https://66.media.tumblr.com/f2ffb6cf43c384ba3081d635c4a76eeb/tumblr_n4r2213bOI1s5e5bko1_500.gifv'
          }}
        />
        <Separator />
        <Button title="Another one!" onPress={() => { (navigation.navigate('Home')); (navigation.navigate('spirits')); }} />
        <Separator />
        <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
      </View>
    );
  }
  if (randNum == 2) {
    //Kid getting a face full of mail
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
        <Image
          style={{ height: 475, width: 300 }}
          source={{
            uri: 'https://i.chzbgr.com/full/7387151872/hABCABA7F/kid-gets-a-face-full-of-mail'
          }}
        />
        <Separator />
        <Button title="Another one!" onPress={() => { (navigation.navigate('Home')); (navigation.navigate('spirits')); }} />
        <Separator />
        <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
      </View>
    );
  }
  if (randNum == 3) {
    //Dog in palm of hand
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
        <Image
          style={{ height: 300, width: 300 }}
          source={{
            uri: 'https://33.media.tumblr.com/c486b1b1f635af074d9be850ce70bba1/tumblr_nlotnf4lnw1u17yx1o1_500.gif'
          }}
        />
        <Separator />
        <Button title="Another one!" onPress={() => { (navigation.navigate('Home')); (navigation.navigate('spirits')); }} />
        <Separator />
        <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
      </View>
    );
  }
  if (randNum == 4) {
    //Random hug
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
        <Image
          style={{ height: 300, width: 300 }}
          source={{
            uri: 'https://i.imgur.com/XB2Rmnt.gif'
          }}
        />
        <Separator />
        <Button title="Another one!" onPress={() => { (navigation.navigate('Home')); (navigation.navigate('spirits')); }} />
        <Separator />
        <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
      </View>
    );
  }
  if (randNum == 5) {
    //Llamas
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
        <Image
          style={{ height: 300, width: 300 }}
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/2353/7225/t/96/assets/funny-llama-alpaca-pictures-hilarious-make-you-smile_8207.jpg'
          }}
        />
        <Separator />
        <Button title="Another one!" onPress={() => { (navigation.navigate('Home')); (navigation.navigate('spirits')); }} />
        <Separator />
        <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
      </View>
    );
  }
  if (randNum == 6) {
    //Cat jumping out of pepsi box
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
        <Image
          style={{ height: 300, width: 400 }}
          source={{
            uri: 'https://www.laughtard.com/wp-content/uploads/2017/05/Drink.gif'
          }}
        />
        <Separator />
        <Button title="Another one!" onPress={() => { (navigation.navigate('Home')); (navigation.navigate('spirits')); }} />
        <Separator />
        <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
      </View>
    );
  }
  if (randNum == 7) {
    //Cows
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
        <Image
          style={{ height: 300, width: 400 }}
          source={{
            uri: 'https://2.bp.blogspot.com/-oowyWDWhavE/Wdz34-Co6WI/AAAAAAAAUMY/dYMHeu5SIb48yPDuV7Ou_o7ejAl42zV0gCLcBGAs/s1600/Cattle%2BCalves%2BGif.gif'
          }}
        />
        <Separator />
        <Button title="Another one!" onPress={() => { (navigation.navigate('Home')); (navigation.navigate('spirits')); }} />
        <Separator />
        <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
      </View>
    );
  }
  if (randNum == 8) {
    //Cat with toy
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
        <Image
          style={{ height: 300, width: 400 }}
          source={{
            uri: 'https://www.awesomeinventions.com/wp-content/uploads/2015/11/cat-toy.gif'
          }}
        />
        <Separator />
        <Button title="Another one!" onPress={() => { (navigation.navigate('Home')); (navigation.navigate('spirits')); }} />
        <Separator />
        <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
      </View>
    );
  }
  if (randNum == 9) {
    //Smiling at your crush
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
        <Image
          style={{ height: 300, width: 400 }}
          source={{
            uri: 'https://i0.wp.com/livelypals.com/wordpress/wp-content/uploads/2019/03/22458254aca4a1cfa9a21cfa5c410fa7.gif?fit=360%2C308&ssl=1'
          }}
        />
        <Separator />
        <Button title="Another one!" onPress={() => { (navigation.navigate('Home')); (navigation.navigate('spirits')); }} />
        <Separator />
        <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
      </View>
    );
  }
  if (randNum == 10) {
    //Old man in onion ring
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
        <Image
          style={{ height: 410, width: 350 }}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4tMhjfGHp5jZ7mhWBL-9AgJ_35y-ZlxGPHgQrinwJD-fhSHps&usqp=CAU'
          }}
        />
        <Separator />
        <Button title="Another one!" onPress={() => { (navigation.navigate('Home')); (navigation.navigate('spirits')); }} />
        <Separator />
        <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
      </View>
    );
  }
  if (randNum == 11) {
    //Cat with paws stretched out
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
        <Image
          style={{ height: 300, width: 400 }}
          source={{
            uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/23/11/asset/buzzfeed-prod-fastlane-02/anigif_sub-buzz-24511-1498231293-3.gif?downsize=600:*&output-format=auto&output-quality=auto'
          }}
        />
        <Separator />
        <Button title="Another one!" onPress={() => { (navigation.navigate('Home')); (navigation.navigate('spirits')); }} />
        <Separator />
        <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
      </View>
    );
  }
  if (randNum == 12) {
    //Elephant
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
        <Image
          style={{ height: 300, width: 400 }}
          source={{
            uri: 'https://4.bp.blogspot.com/-ZzU8ZYgjlLo/UEogi29n9rI/AAAAAAAAAGM/9G4yuf_DHw0/s320/funny-quotes-about-friends_6428_1.gif'
          }}
        />
        <Separator />
        <Button title="Another one!" onPress={() => { (navigation.navigate('Home')); (navigation.navigate('spirits')); }} />
        <Separator />
        <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
      </View>
    );
  }
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
        <Text style={{ color: '#D4AF37', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
          <Text style={{ fontSize: 15, textAlign: 'center', color: '#D4AF37', fontWeight: 'bold' }}>
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
    const [gifs, setGifs] = useState([]);
    const [term, updateTerm] = useState('');
    async function fetchGifs() {
      try {
        const API_KEY = 'fIcEyUypJcwkuaJ33GoUyB2pQVawAEoe';
        const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
        const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}`);
        const res = await resJson.json();
        setGifs(res.data);
      } catch (error) {
        console.warn(error);
      }
    }
    (async () => {
      await
        await playbackObject.stopAsync()
    })();
    
    function onEdit(newTerm) {
      updateTerm(newTerm);
      fetchGifs();
    }  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FF69B4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
          Need a quick little pick-me-up? Something to lighten up your mood, put a smile on your face? Well, you're in the right place!
      </Text>
      <TextInput
        placeholder="Search Giphy"
        placeholderTextColor='#FF69B4'
        style={styles.textInput}
        onChangeText={(text) => onEdit(text)}
      />
      <FlatList
        data={gifs}
        renderItem={({item}) => (
          <Image
            resizeMode='contain'
            style={styles.image}
            source={{uri: item.images.original.url}}
          />
        )}
      />

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