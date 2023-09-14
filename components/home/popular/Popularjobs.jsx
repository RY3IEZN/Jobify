/** @format */

import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./popularjobs.style";
import { router, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import { COLORS, SIZES } from "../../../constants";
import { FlatList } from "react-native";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            horizontal
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={({ item }) => {
              return <PopularJobCard item={item} />;
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
