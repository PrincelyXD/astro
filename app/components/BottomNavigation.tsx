import { BlurView } from "expo-blur"
import { Text, View } from "react-native"

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const BottomNavigation = () => {
  return (
    
    <BlurView
         intensity={40}
    tint="dark"
    className="w-full h-[100px] flex-row absolute pt-3 bottom-0 justify-between px-7 ">
        <View className="flex items-center">
        <MaterialCommunityIcons name="play" size={35}  color="#ffffffa5" />  
       <Text className="text-sm text-[#ffffffa5]">Watch Now</Text>
        </View>
       
        <View className="flex items-center">
        <MaterialCommunityIcons name="bookshelf" size={35} color="#ffffffa5" />  
       <Text className="text-sm text-[#ffffffa5]">Library</Text>
        </View>
       
        <View className="flex items-center">
        <MaterialCommunityIcons name="bell" size={35} color="#ffffffa5" />  
       <Text className="text-sm text-[#ffffffa5]">New</Text>
        </View>
       
        <View className="flex items-center">
        <MaterialCommunityIcons name="heart" size={35} color="#ffffffa5" />
       <Text className="text-sm text-[#ffffffa5]">Favorites</Text>
        </View>
       
        <View className="flex items-center">
        <MaterialCommunityIcons name="magnify" size={35} color="white" />   
       <Text className="text-sm text-[#ffffffa5]">Search</Text>
        </View>
       
    </BlurView>
  )
}

export default BottomNavigation
