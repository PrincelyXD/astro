import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import StoryCard from "../components/StoryCard";
import { CollectionStoryData, FeaturedStoryData } from "../resources/Resources";

const HeroScreen = () => {
  return (
    <View className="w-full bg-black h-full">
      <ImageBackground
        source={require("../assets/hero-bg.png")}
        className={`flex h-full max-h-[350px] justify-center flex-grow `}
        resizeMode="cover"
      >
        <LinearGradient
          colors={[
            "rgba(0, 0, 0, 1)",
            "rgba(0, 0, 0, 0.95)",
            "rgba(18, 20, 24, 0.85)",
            "rgba(50, 55, 70, 0.6)",
            "rgba(74, 85, 104, 0.4)",
          ]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={{
            ...StyleSheet.absoluteFillObject,
            opacity: 0.85,
          }}
        />

        <View className="absolute z-10 left-5 bottom-[17%]">
          <Text className=" flex items-center justify-center mb-5 font-semibold text-3xl text-white">
            <Text className=" uppercase">a bot</Text>- anist Adeventure
          </Text>

          <Text className="text-white text-sm pr-[50px]">
            An awe-inspiring tale of a beloved robot, on a quest to save
            extraordinary vegitation from extinction. Uncover the mysterious
            plant life inhabiting an alien planet, and cheer on the robot
            botanist as it sets out to discover and save new and exciting
            plants.
          </Text>

          <BlurView
            intensity={20}
            tint="light"
            className="self-start mt-4 overflow-hidden rounded-full "
          >
            <TouchableOpacity className="px-3 py-2">
              <Text className="text-white">Details</Text>
            </TouchableOpacity>
          </BlurView>
        </View>

        <View className="  absolute bottom-0 opacity-[0.5] bg-transparent w-full h-full">
          <LinearGradient
            colors={[
              "rgba(0, 0, 0, 1)",
              "rgba(0, 0, 0, 0.85)",
              "rgba(0, 0, 0, 0.5)",
              "rgba(0, 0, 0, 0.2)",
              "rgba(0, 0, 0, 0)",
            ]}
            locations={[0, 0.15, 0.35, 0.6, 1]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
      </ImageBackground>

      <ScrollView className=" bg-black pt-5  pl-5 ">
        <View className=" pr-3">
          <Text className="  text-white mb-5 text-2xl font-bold">Featured</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex overflow-scroll flex-row"
          >
            {FeaturedStoryData.map((stroy, index) => (
              <StoryCard
                imageUrl={stroy.imageUrl}
                rating={stroy.rating}
                title={stroy.title}
                description={stroy.description}
                genre={stroy.genre}
                key={index}
              />
            ))}
          </ScrollView>
        </View>

        <View className=" pr-3 mb-[105px]">
          <Text className="  text-white my-5 text-2xl font-bold">
            Collections
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex overflow-scroll flex-row"
          >
            {CollectionStoryData.map((stroy, index) => (
              <StoryCard
                imageUrl={stroy.imageUrl}
                rating={stroy.rating}
                title={stroy.title}
                description={stroy.description}
                genre={stroy.genre}
                key={index}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
     
    </View>
  );
};

export default HeroScreen;
