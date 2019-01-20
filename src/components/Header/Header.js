import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const Header = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("./images/gear.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
