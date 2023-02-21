import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar 
        style="light"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}