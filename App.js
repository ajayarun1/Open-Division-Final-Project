//import React from 'react';
import { StyleSheet, CheckBox, Text, View, Image, Linking, FlatList, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { setState, useState } from 'react';
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
          color: "#5B0E2D",
          fontSize: 30,
          fontWeight: 'bold'
        }}
        buttonStyle={{
          backgroundColor: '#FFA781',
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
          color: "#FBE473",
          fontSize: 30,
          fontWeight: 'bold'
        }}
        buttonStyle={{
          backgroundColor: '#812BCA',
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
          color: '#2CF4F4',
          fontSize: 30,
          fontWeight: 'bold'
        }}
        buttonStyle={{
          backgroundColor: '#210070',
          borderRadius: 6,
          height: 80,
          width: 250,
        }}
        onPress={() => navigation.navigate('others')}
      />
      <Separator />
      <Button
        title='Staying Healthy'
        type="outline"
        titleStyle={{
          textAlignVertical: 'center',
          color: "#0D1137",
          fontSize: 30,
          fontWeight: 'bold'
        }}
        buttonStyle={{
          backgroundColor: '#E52165',
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFA781' }}>
      <Text style={{ color: '#5B0E2D', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
        <Text style={{ fontSize: 17, textAlign: 'center', color: '#5B0E2D', fontWeight: 'bold' }}>
          Please close your eyes and follow along with today's digital yoga instructor! When finished, click below for today's yoga exercise!
    </Text>
        <Text style={{ color: 'blue', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>
          https://www.youtube.com/watch?v=d4S4twjeWTs
    </Text>
      </Hyperlink>
      <Separator />
      <Text style={{ color: '#5B0E2D', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>
        Click on first image below for a link to free online yoga classes and the second image for free online mediation groups!
    </Text>
      <Text>{'\n'}</Text>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812BCA' }}>
        <Text style={{ color: '#FBE473', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812BCA' }}>
        <Text style={{ color: '#FBE473', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812BCA' }}>
        <Text style={{ color: '#FBE473', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812BCA' }}>
        <Text style={{ color: '#FBE473', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812BCA' }}>
        <Text style={{ color: '#FBE473', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812BCA' }}>
        <Text style={{ color: '#FBE473', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812BCA' }}>
        <Text style={{ color: '#FBE473', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812BCA' }}>
        <Text style={{ color: '#FBE473', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812BCA' }}>
        <Text style={{ color: '#FBE473', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812BCA' }}>
        <Text style={{ color: '#FBE473', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812BCA' }}>
        <Text style={{ color: '#FBE473', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812BCA' }}>
        <Text style={{ color: '#FBE473', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812BCA' }}>
        <Text style={{ color: '#FBE473', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 15 }}>
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#210070' }}>
      <Text style={{ color: '#2CF4F4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 18 }} >
        Every week, 2 new Quarantine-Zone users will have the opportunity to share their experiences, activities, and thoughts, during this difficult time. Please email your submissions to quarantinezone.app@gmail.com! 2 new profiles will be posted every week
      </Text>
      <TouchableOpacity style={{ alignSelf: 'center' }}
        onPress={() => { navigation.navigate('profileOne') }}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsg6KXHm6o4SYhPycSwdsJnlGOWCVyIhWBWcg5y8_pki6coDzG&usqp=CAU' }}
          style={{ height: 130, width: 150 }} />
        <Separator> </Separator>
        <Text style={{ color: '#2CF4F4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, margin: 15 }} >
          Meet Sophia!
        </Text>
        <Separator></Separator>
      </TouchableOpacity>
      <Separator></Separator>
      <TouchableOpacity style={{ alignSelf: 'center' }}
        onPress={() => { navigation.navigate('profileTwo') }}>
        <Image
          source={{ uri: 'https://bloximages.chicago2.vip.townnews.com/qchron.com/content/tncms/assets/v3/editorial/6/c1/6c1ae802-c8d1-11e8-8273-4370cf9a2beb/5bb7b5fb65072.image.jpg' }}
          style={{ height: 130, width: 150 }} />
        <Separator> </Separator>
        <Text style={{ color: '#2CF4F4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, margin: 15 }} >
          Meet Kris!
        </Text>
        <Separator></Separator>
      </TouchableOpacity>
      <Button title="Go to Home" onPress={() => { (navigation.navigate('Home')); playbackObject.playAsync() }} />
    </View>
  );
}
function profileScreenOne({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#210070' }}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsg6KXHm6o4SYhPycSwdsJnlGOWCVyIhWBWcg5y8_pki6coDzG&usqp=CAU' }}
        style={{ height: 130, width: 150 }} />
      <Separator></Separator>
      <Text style={{ color: '#2CF4F4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 250, margin: 15 }} >
        Hi all, I'm Sophia! Personally I've just been extremely bored over this quarantine, and watching all the news reports about everything going on is stressing me out!
        To keep myself busy however, I've developed an affinity for Yoga as of late! 100% would reccomend, I think the most important thing is to just keep a routine, or a set of activities
        to keep you busy, otherwise we're bound to go crazy!
</Text>
      <TouchableOpacity style={{ alignSelf: 'center' }}
        onPress={() => Linking.openURL('https://www.instagram.com/ajay_arun/')}>
        <Image
          source={{ uri: 'https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png' }}
          style={{ height: 85, width: 90, alignSelf: 'center' }} />
        <Text style={{ color: '#2CF4F4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, margin: 15 }} >
          Feel free to check out Sophia's social media: leave her a nice comment, engage in a conversation, or even make a new friend!
        </Text>
      </TouchableOpacity>
      <Separator></Separator>
      <Button title="Go back" onPress={() => { (navigation.navigate('others')) }} />
    </View>
  );
}
function profileScreenTwo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#210070' }}>
      <Image
        source={{ uri: 'https://bloximages.chicago2.vip.townnews.com/qchron.com/content/tncms/assets/v3/editorial/6/c1/6c1ae802-c8d1-11e8-8273-4370cf9a2beb/5bb7b5fb65072.image.jpg' }}
        style={{ height: 130, width: 150 }} />
      <Separator></Separator>
      <Text style={{ color: '#2CF4F4', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 350, margin: 15 }} >
        What's up everybody, I'm Kris! I've struggled with anxiety for the past few years, and to be honest, COVID 19 and all its impacts are making it much harder to stay healthy.
        I know there are many of you guys out there like me, and I just really want to spread not only my message of support and love, but some advice: don't abandon your resources!
        There are so many support-groups and mental health resources available online, if you find yourself in need of some help, use them. I know they have helped me a ton, and continue
        to do tons of good out there in the world. Stay Strong everybody!
</Text>
      <Button title="Go back" onPress={() => { (navigation.navigate('others')) }} />
    </View>
  );
}
{ var a = 0; }
{ var b = 0; }
{ var c = 0; }
{ var d = 0; }
{ var e = 0; }
function resultsScreen() {
  if (a + b + c + d + e == 5) {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E52165' }}>
      <Text style={{ color: '#0D1137', fontWeight: 'bold', textAlign: 'center', fontSize: 28, lineHeight: 50, height: 225, margin: 18 }}>
      You are perfectly healthy and handling quarantine amazingly! Keep up the good work!
      </Text>
    </View>
    );
  }
  if (a + b + c + d + e == 4) {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E52165' }}>
      <Text style={{ color: '#0D1137', fontWeight: 'bold', textAlign: 'center', fontSize: 28, lineHeight: 50, height: 225, margin: 18 }}>
      All things considered, you're handling this situation pretty well. If you can align to all 5 of the experts' tips, you'll feel even better! Keep up the good work!
      </Text>
    </View>
    );
  }
  if (a + b + c + d + e == 3) {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E52165' }}>
      <Text style={{ color: '#0D1137', fontWeight: 'bold', textAlign: 'center', fontSize: 28, lineHeight: 50, height: 225, margin: 18 }}>
      Yeah we know, this is a super tough time. It looks like you're getting by, but potentially could be doing a lot better. Try to align with all 5 of these tips and let us know how you feel at quarantinezone.app@gmail.com!
      </Text>
    </View>
    );
  }
  if (a + b + c + d + e == 2) {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E52165' }}>
      <Text style={{ color: '#0D1137', fontWeight: 'bold', textAlign: 'center', fontSize: 28, lineHeight: 50, height: 225, margin: 18 }}>
      Okay, you seem to really be struggling, but don't worry, better times are coming soon. 
      By living a slightly more healthy Quarantine lifestyle, we think you'll feel a lot
      better: try to align with all 5 of these tips and let us know how you feel at quarantinezone.app@gmail.com!
      </Text>
    </View>
    );
  }
  if (a + b + c + d + e == 1) {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E52165' }}>
      <Text style={{ color: '#0D1137', fontWeight: 'bold', textAlign: 'center', fontSize: 28, lineHeight: 50, height: 225, margin: 18 }}>
      Okay, you seem to really be struggling, but don't worry, better times are coming soon. 
      By living a slightly more healthy Quarantine lifestyle, we think you'll feel a lot
      better: try to align with all 5 of these tips and let us know how you feel at quarantinezone.app@gmail.com!
      </Text>
    </View>
    );
  }
  if (a + b + c + d + e == 0) {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E52165' }}>
      <Text style={{ color: '#0D1137', fontWeight: 'bold', textAlign: 'center', fontSize: 28, lineHeight: 50, height: 225, margin: 18 }}>
      Okay, you seem to really be struggling, but don't worry, better times are coming soon. 
      By living a slightly more healthy Quarantine lifestyle, we think you'll feel a lot
      better: try to align with all 5 of these tips and let us know how you feel at quarantinezone.app@gmail.com!
      </Text>
    </View>
    );
  }
}
function incA(){
  a=a+1
}
function incB(){
  b=b+1
}
function incC(){
  c=c+1
}
function incD(){
  d=d+1
}
function incE(){
  e=e+1
}
function suggestionsScreen({ navigation }) {
  (async () => {
    await
      await playbackObject.stopAsync()
  })();
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E52165' }}>
      <Text style={{ color: '#0D1137', fontWeight: 'bold', textAlign: 'center', fontSize: 18, lineHeight: 25, height: 125, margin: 18 }}>
        Welcome to our Staying Healthy page! Below are the key 5 criteria health experts have laid out in the quest to maintain mental and physical health, let's see how you line up!
      </Text>
      <Text style={{ color: '#0D1137', fontWeight: 'bold', textAlign: 'center'}}> Please check the following if you are getting atleast 8 hours of sleep per day</Text>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection, incA()}
      />
      <Text style={{ color: '#0D1137', fontWeight: 'bold', textAlign: 'center'}}>Please check the following if you have a fairly consistent daily routine (eating times, daily activities, sleeping schedule)</Text>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection, incB()}
      />
      <Text style={{ color: '#0D1137', fontWeight: 'bold', textAlign: 'center'}}>Please check the following if you are maintaining good Hygiene (bathing, brushing, etc)</Text>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection, incC()}
      />
      <Text style={{ color: '#0D1137', fontWeight: 'bold', textAlign: 'center'}}>Please check the following if you spending any time outdoors/ are partaking in some level of fitness</Text>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection, incD()}
      />
      <Text style={{ color: '#0D1137', fontWeight: 'bold', textAlign: 'center'}}> Please check the following if you are maintaining your relationships (whether through social media, phone calls, etc; any form of communication) </Text>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection, incE()}
      />
      <Separator></Separator>
      <Button title="Click to see your results" onPress={() => { (navigation.navigate('results')) }} />
      <Separator></Separator>
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
            headerTintColor: '#e0218a',
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
            headerTintColor: '#5B0E2D',
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
            headerTintColor: '#FBE473',
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
            headerTintColor: '#2CF4F4',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            },
          }}
        />
        <Stack.Screen name="suggestions" component={suggestionsScreen}
          options={{
            title: 'Staying healthy',
            headerStyle: {
              backgroundColor: '#007600',
            },
            headerTintColor: '#0D1137',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            },
          }}
        />
        <Stack.Screen name="profileOne" component={profileScreenOne}
          options={{
            title: 'Meet Sophia!',
            headerStyle: {
              backgroundColor: '#007600',
            },
            headerTintColor: '#2CF4F4',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            },
          }}
        />
        <Stack.Screen name="profileTwo" component={profileScreenTwo}
          options={{
            title: 'Meet Derek!',
            headerStyle: {
              backgroundColor: '#007600',
            },
            headerTintColor: '#2CF4F4',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            },
          }}
        />
        <Stack.Screen name="results" component={resultsScreen}
          options={{
            title: 'The results!',
            headerStyle: {
              backgroundColor: '#007600',
            },
            headerTintColor: '#0D1137',
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