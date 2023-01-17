import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold, 
  Inter_800ExtraBold 
} from "@expo-google-fonts/inter"

export default function App() {

  const [isFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_800ExtraBold
  })

  if(isFontsLoaded){
    <Text>Carregando...</Text>
  }

  return (
    <View>
      <StatusBar style="light" translucent />
    </View>
  );
}
