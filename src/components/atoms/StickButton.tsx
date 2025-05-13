// components/atoms/StickButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  note: string;
  onPress: () => void;
};

export default function StickButton({ note, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.stick} onPress={onPress}>
      <Text style={styles.stickText}>{note}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
