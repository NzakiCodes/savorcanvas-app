import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { recipe } from "../../data";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Recipe() {
  const { slug } = useLocalSearchParams();
  const recipe_details = recipe.find(({ id }) => id == slug);
  const navigation = useNavigation()

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[])
  return (
    <SafeAreaView>
      <View className="py-2 bg-white">

      </View>
      <ScrollView className="">
      <Image
        source={{ uri: recipe_details?.cover }}
        className="w-full h-40 "
      />
      <View className="px-4 py-4 bg-white ">
        <Text className="text-base font-bold text-black">
          {recipe_details?.name}
        </Text>
        <Text className="text-xs text-black">{recipe_details?.fullrecipe}</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
