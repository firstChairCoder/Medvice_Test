import React from "react";
import {
  Animated,
  Image,
  Pressable,
  Modal as RNModal,
  Text,
  View
} from "react-native";

const Modal = ({
  showModal,
  setShowModal,
  photo,
  fullname,
  gender,
  phone,
  email,
  style,
  clinic
}: CustomModalProps) => {
  return (
    <RNModal
      visible={showModal}
      transparent
      animationType={"slide"}
      hardwareAccelerated
      presentationStyle="overFullScreen"
      statusBarTranslucent
      onRequestClose={() => setShowModal(false)}
    >
      <Pressable
        className="flex-1 bg-trout px-5 items-center justify-center"
        onPress={() => setShowModal(false)}
      >
        <View className="bg-white w-4/5 h-3/5 py-[40] px-[32] items-center rounded-2xl">
          <Image
            source={{
              uri: photo
            }}
            className="h-[100] w-[100] rounded-full"
          />
          <Text className="text-3xl font-bold text-center my-2">
            {fullname}
          </Text>
          <Text className="text-xl font-bold text-center my-2 flex-[0.75]">
            {clinic}
          </Text>

          <Animated.View style={[style]}>
            <Text className="text-base font-bold">
              Phone: <Text className="text-sm font-normal">{phone}</Text>
            </Text>
            <Text className="text-base font-bold my-3">
              Gender:{" "}
              <Text className="text-sm font-normal capitalize">{gender}</Text>
            </Text>
            <Text className="text-base font-bold">Email: </Text>
            <Text className="text-base font-normal flex-wrap text-left">
              {email}
            </Text>
          </Animated.View>
        </View>
      </Pressable>
    </RNModal>
  );
};

export default Modal;
