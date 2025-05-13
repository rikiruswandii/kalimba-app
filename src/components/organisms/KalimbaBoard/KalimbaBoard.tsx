// components/organisms/KalimbaBoard.tsx
import React from 'react';
import { View } from 'react-native';
import { styles } from './KalimbaBoard.styles';
import { useAudioPlayer } from 'expo-audio';
import {
  Snote1, Snote2, Snote3, Snote4, Snote5,
  Snote6, Snote7, Snote8, Snote9,
} from '../../../assets';
import StickButton from '../../atoms/StickButton';

const notes = [
  { note: '1', file: Snote1 },
  { note: '2', file: Snote2 },
  { note: '3', file: Snote3 },
  { note: '4', file: Snote4 },
  { note: '5', file: Snote5 },
  { note: '6', file: Snote6 },
  { note: '7', file: Snote7 },
  { note: '8', file: Snote8 },
  { note: '9', file: Snote9 },
  { note: '10', file: Snote9 },
];

export default function KalimbaBoard() {
  const playSound = async (file: any) => {
    const player = useAudioPlayer(file);
    try {
      await player.play();
      setTimeout(async () => {
        await stop();
      }, 500);
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  return (
    <View style={styles.container}>
      {notes.map((item, index) => (
        <StickButton key={index} note={item.note} onPress={() => playSound(item.file)} />
      ))}
    </View>
  );
}


