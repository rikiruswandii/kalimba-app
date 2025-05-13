import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  layout: {
    width,
    height,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
