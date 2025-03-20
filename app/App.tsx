import {
  View,
  StatusBar,
  Platform,

} from "react-native";

import "./assets/styles/App.css";
import HeroScreen from "./screens/HeroScreen";
import BottomNavigation from "./components/BottomNavigation";



export default function App() {

  const statusBarHeight = StatusBar.currentHeight
  return (
    <View className={`flex-grow bg-red-400 ${ Platform.OS === "android" ? `pt-[${StatusBar.currentHeight}px]`: " pt-0"}`}>
        <HeroScreen/>
       <BottomNavigation/>
    </View>
  );
}


