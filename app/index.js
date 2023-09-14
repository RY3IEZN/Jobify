/** @format */

import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Text } from "react-native";
import { View, StyleSheet, Image } from "react-native";
import { COLORS, SIZES, icons, images } from "../constants";
import { ScrollView } from "react-native";
import Welcome from "../components/home/welcome/Welcome";
import Popularjobs from "../components/home/popular/Popularjobs";
import Nearbyjobs from "../components/home/nearby/Nearbyjobs";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import { LogBox } from "react-native";
import { YellowBox } from "react-native";

LogBox.ignoreAllLogs(true);
YellowBox.ignoreWarnings(["ERROR"]);

function Home(props) {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => {
            return (
              <ScreenHeaderBtn
                iconUrl={icons.menu}
                dimension="60%"
                handlePress={() => {}}
              />
            );
          },
          headerRight: () => {
            return (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            );
          },
        }}
      />
      <ScrollView>
        <View style={styles.index}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  index: {
    flex: 1,
    padding: SIZES.medium,
  },
});

export default Home;
