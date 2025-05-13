import React from 'react';
import { View} from 'react-native';
import { styles } from './MainLayout.styles';

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


