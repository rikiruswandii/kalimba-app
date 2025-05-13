import { useAudioPlayer } from 'expo-audio'

export function usePlayNote () {
  return async (file: any) => {
    const player = useAudioPlayer(file)
    try {
      await player.play()
      setTimeout(async () => {
        await stop()
      }, 500)
    } catch (error) {
      console.error('Error playing sound:', error)
    }
  }
}
