import { Text, View } from "react-native";
import Constants  from 'expo-constants'

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <View className="w-full px-4" style={{ marginTop: statusBarHeight  + 8}}>
      <Text>Hello Word!</Text>
    </View>
  );
}
