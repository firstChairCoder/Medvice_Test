import React from "react";
import { Dimensions, Image, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const DoctorCard = ({
  photo,
  fullname,
  clinic,
  phone,
  gender,
  email
}: IDoctor) => {
  return (
    <View
      className="flex-row bg-stone-50 items-center p-[8] py-[16] mb-[24] shadow-md shadow-black rounded-2xl"
      style={{
        width: width * 0.9
      }}
    >
      <Image
        className="h-[50] w-[50] rounded-3xl mx-[8]"
        source={{
          uri: photo
        }}
      />
      <View className="justify-center flex-[0.6] mx-[8]">
        <Text className="text-[16] font-bold mb-[4]" numberOfLines={1}>
          {fullname}
        </Text>
        <Text className="text-[14] font-bold" numberOfLines={1}>
          {clinic}
        </Text>
      </View>

      <View className="flex-[0.9] justify-start">
        <Text className="mb-[4] shrink" numberOfLines={1}>
          phone: {phone}
        </Text>
        <Text className="mb-[4]" numberOfLines={1}>
          gender: {gender}
        </Text>
        <Text className="shrink" numberOfLines={1}>
          email: {email}
        </Text>
      </View>
    </View>
  );
};

export default DoctorCard;
