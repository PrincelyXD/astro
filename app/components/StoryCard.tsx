import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

type StoryCardProps = {
  imageUrl: string;
  rating: string;
  title: string;
  description: string;
  genre: string[];
};

const StoryCard = ({
  imageUrl,
  rating,
  title,
  description,
  genre,
}: StoryCardProps) => {
  const trauncateText = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  const text =
    "After a long journey through the stars, the bot botanist finally lands on an uncharted planet, its sensors scanning the unfamiliar terrain. With each step, it uncovers remnants of a once-thriving ecosystem, now on the brink of collapse. Determined to revive the planet’s fading flora, the bot embarks on a mission to discover, protect, and nurture the last surviving plant species—unraveling secrets hidden deep within the alien soil.";
  return (
    <TouchableOpacity className=" mr-5 rounded-2xl overflow-hidden w-full h-[290px] max-w-[48%]  bg-[#1E1F1F]">
      <ImageBackground
        source={{ uri: imageUrl }}
        className="h-full max-h-[45%]"
        resizeMode="cover"
      ></ImageBackground>

      <View className="bg-[#1E1F1F] flex items-start pl-6 pr-2 pt-7 h-full">
        <Text className="text-[#A0A0A0]">{rating} </Text>
        <Text className="text-[#ffffffda] text-xl my-1 font-semibold">
          {title}{" "}
        </Text>
        <Text className="text-[#C0C0C0] text-sm">
          {trauncateText(description, 47)}
        </Text>

        <View className=" flex-row mt-2 gap-x-2">
          {genre.map((genre, index) => (
            <Text
              key={index}
              className="text-xs text-[#B3B3B3] border border-[#B3B3B3] py-1 px-2 rounded-full"
            >
              {genre}
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StoryCard;
