// components/templates/MainLayout.tsx
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <View style={styles.layout}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    width,
    height,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
