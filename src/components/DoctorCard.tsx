import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  Text,
  View
} from "react-native";

import Modal from "./Modal";

const { width } = Dimensions.get("window");

const DoctorCard = ({
  photo,
  fullname,
  clinic,
  phone,
  gender,
  email
}: IDoctor) => {
  const fadeInAnimation = useRef(new Animated.Value(0)).current;
  const [showModal, setShowModal] = useState(false);

  const onPress = () => {
    setShowModal(true);
    Animated.timing(fadeInAnimation, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: true
    }).start();
  };

  const animatedStyle = {
    opacity: fadeInAnimation
  };

  return (
    <Pressable onPress={onPress}>
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

        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          style={animatedStyle}
          {...{ photo, fullname, clinic, phone, gender, email }}
        />
      </View>
    </Pressable>
  );
};

export default DoctorCard;
