/** @format */

import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { SIZES, icons } from "../../../constants";
import {} from "react-native";

const Welcome = () => {
  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
    "Volunteer",
  ];

  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      {/*User name and subtitle */}
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Uneku</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
      </View>
      {/* search bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        {/*searchbar icon  */}
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      {/* job types */}
      <View style={styles.tabsContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={jobTypes}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/searc/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
