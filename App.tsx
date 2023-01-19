import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Modal,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from "react-native";

import useDoctorData from "./src/hooks/useDoctorData";
import { DoctorCard } from "./src/components";

const Header = () => (
  <Text className=" mt-[40] mb-[24] text-2xl font-bold self-center">
    Doctor's List
  </Text>
);

export default function App() {
  
  const [doctors, isDoctorsListLoading] = useDoctorData();

  if (isDoctorsListLoading) {
    return (
      <View
        className="flex-1 justify-center items-center"
        accessibilityLabel="loading-spinner"
      >
        <ActivityIndicator size="large" color={"lime"} />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 px-[16] items-center justify-center bg-white">
      <FlatList
        data={doctors}
        showsVerticalScrollIndicator={false}
        style={{ flexGrow: 1 }}
        ListHeaderComponent={Header}
        bounces={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={8}
        windowSize={11}
        initialNumToRender={8}
        renderItem={({
          item: { email, fullname, phone, gender, clinic, photo, id },
        }) => {
          return (
            <DoctorCard
              key={id}
              {...{ email, fullname, phone, gender, clinic, photo }}
            />
          );
        }}
      />

      
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
