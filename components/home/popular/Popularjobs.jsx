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
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();

  const { data, error, isLoading } = useFetch("search", {
    query: "cloud developer",
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
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
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            data={data.data}
            renderItem={({ item }) => {
              return (
                <PopularJobCard
                  item={item}
                  handleCardPress={() => console.log(item)}
                />
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
