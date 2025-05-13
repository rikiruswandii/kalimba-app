// components/atoms/StickButton.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './StickButton.styles';

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

