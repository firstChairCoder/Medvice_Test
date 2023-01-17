import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 px-[24] items-center justify-center bg-white">
      <Text className="mb-[40] text-2xl font-bold">Doctor's list</Text>
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <StatusBar style="auto" />
    </View>
  );
}

function DoctorCard() {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        padding: 8,
        paddingVertical: 16,
        backgroundColor: "linen",
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 24
      }}
    >
      <Image
        style={{ height: 50, width: 50, borderRadius: 25, marginHorizontal: 8 }}
        source={{
          uri: "https://images.pexels.com/photos/6873905/pexels-photo-6873905.jpeg"
        }}
      />
      <View style={{ justifyContent: "center", flex: 0.9 }}>
        <Text
          style={{ fontSize: 16, fontWeight: "bold", width: "90%" }}
          numberOfLines={1}
        >
          Doctor fullname
        </Text>
        <Text
          style={{ fontSize: 16, fontWeight: "bold", width: "90%" }}
          numberOfLines={1}
        >
          Clinic Name
        </Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
        <Text style={{ marginBottom: 4 }}>phone: 999999999</Text>
        <Text style={{ marginBottom: 4 }}>gender: male</Text>
        <Text>email: 999999999</Text>
      </View>
    </View>
  );
}
