import React from "react";
import { View, Text } from "react-native";
import moment from "moment";
import styles from "./styles";

const LastConverted = ({ base, quote, convertioRate, date }) => (
  <Text style={styles.smallText}>
    {base} = {convertioRate} {quote} as of {moment(date).format("MMMM D,YYYY")}
  </Text>
);

export default LastConverted;
