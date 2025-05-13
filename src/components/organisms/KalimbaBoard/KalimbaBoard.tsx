import React from 'react';
import { View } from 'react-native';
import { styles } from './KalimbaBoard.styles';
import { notes } from '@/utils/notes';
import { usePlayNote } from '@/hooks/usePlayNote';
import NoteButton from '@/components/molecules/NoteButton';

export default function KalimbaBoard() {
const playSound = usePlayNote();

return (
<View style={styles.container}>
{notes.map((item, index) => (
<NoteButton key={index} note={item.note} onPress={() => playSound(item.file)} />
))}
</View>
);
}