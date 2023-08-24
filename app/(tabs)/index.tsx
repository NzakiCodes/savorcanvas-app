import { StyleSheet, Text, View } from "react-native";

import { recipe } from "../../data";
import { FlashList } from "@shopify/flash-list";
import RecipeCard from "../../components/RecipeCard";

export default function Home() {
  return (
    <View className="flex-1 h-screen bg-white">
      <FlashList
        data={recipe}
        renderItem={({ item }) => {
          return <RecipeCard {...item} />;
        }}
        estimatedItemSize={50}
      />
    </View>
  );
}
