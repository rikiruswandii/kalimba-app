import StickButton from '@/components/atoms/StickButton';
import React from 'react';

export default function NoteButton({ note, onPress }: { note: string; onPress: () => void }) {
return <StickButton note={note} onPress={onPress} />;
}