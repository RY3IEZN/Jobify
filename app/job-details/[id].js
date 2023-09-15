/** @format */

import React, { useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useFetch from "../../hook/useFetch";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { COLORS, SIZES, icons } from "../../constants";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import Company from "../../components/jobdetails/company/Company";
import Tabs from "../../components/jobdetails/tabs/Tabs";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter;
  const [refreshing, setRefreshing] = useState(false);
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const onRefresh = () => {};

  return (
    <SafeAreaView style={styles.screen}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: "",
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension={"60%"} />
          ),
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.left} dimension={"60%"} />
          ),
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size={"large"} color={COLORS.primary} />
          ) : error ? (
            <Text>Something Went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No Data</Text>
          ) : (
            <View style={styles.JobDetails}>
              <Company
                companyLogo={data.data[0].employer_logo}
                jobTitle={data.data[0].job_title}
                companyName={data.data[0].employer_name}
                location={data.data[0].job_country}
              />
              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  JobDetails: {
    padding: SIZES.medium,
    paddingBottom: 100,
  },
});

export default JobDetails;
