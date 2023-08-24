import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
type Props = {
  id: string;
  name: string;
  chef: string;
  cover: string;
  excerpt: string;
};

export default function RecipeCard(props: Props) {
  return (
    <Link href={`/recipe/${props.id}`} className="my-3 flex-col" asChild >
      <TouchableOpacity activeOpacity={0.8} className="w-full bg-white shadow-2xl shadow-gray-500 max-w-[90%] md:max-w-full mx-auto rounded-xl">
        <Image
          source={{ uri: props.cover }}
          className=" h-44 rounded-t-xl"
        />
        <View className="px-4 py-4 bg-white rounded-b-xl max-w-sm md:max-w-full">
          <Text className="text-black text-base font-CircularStd-Book">{props.name}</Text>
          <Text className="text-black text-xs  max-w-sm md:max-w-full">
            {props.excerpt}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
