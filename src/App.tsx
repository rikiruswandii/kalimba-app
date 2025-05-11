import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useEffect } from 'react';
import { Audio } from 'expo-av'; 
import { Asset } from 'expo-asset';

const { width, height } = Dimensions.get('window');

const notes = [
  { note: '1', file: require('./assets/sounds/notes/681783__iainmccurdy__kalimba-note-1-c-diatonic-in-c.wav') },
  { note: '2', file: require('./assets/sounds/notes/681784__iainmccurdy__kalimba-note-2-d-diatonic-in-c.wav') },
  { note: '3', file: require('./assets/sounds/notes/681785__iainmccurdy__kalimba-note-3-e-diatonic-in-c.wav') },
  { note: '4', file: require('./assets/sounds/notes/681786__iainmccurdy__kalimba-note-4-f-diatonic-in-c.wav') },
  { note: '5', file: require('./assets/sounds/notes/681787__iainmccurdy__kalimba-note-5-g-diatonic-in-c.wav') },
  { note: '6', file: require('./assets/sounds/notes/681788__iainmccurdy__kalimba-note-6-a-diatonic-in-c.wav') },
  { note: '7', file: require('./assets/sounds/notes/681789__iainmccurdy__kalimba-note-7-b-diatonic-in-c.wav') },
  { note: '8', file: require('./assets/sounds/notes/681790__iainmccurdy__kalimba-note-8-c-diatonic-in-c.wav') },
  { note: '9', file: require('./assets/sounds/notes/681791__iainmccurdy__kalimba-note-9-d-diatonic-in-c.wav') },
  { note: '10', file: require('./assets/sounds/notes/681791__iainmccurdy__kalimba-note-10-e-diatonic-in-c.wav') },
];

export default function KalimbaApp() {
  const playSound = async (file: any) => {
    const sound = new Audio.Sound();
  
    // Untuk web, pastikan menggunakan uri dari expo-asset
    const asset = Asset.fromModule(file);
    await sound.loadAsync({ uri: asset.uri || file });
    await sound.playAsync();
  
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        sound.unloadAsync();
      }
    });
  };

  return (
    <View style={styles.container}>
      {notes.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.stick}
          onPress={() => playSound(item.file)}
        >
          <Text style={styles.stickText}>{item.note}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Baris horizontal (landscape)
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    backgroundColor: '#222',
  },
  stick: {
    width: 60,
    height: 200,
    backgroundColor: '#87CEFA',
    margin: 5,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  stickText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
