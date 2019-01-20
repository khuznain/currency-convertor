import React, { Component } from "react";
import { View, Text, StatusBar, FlatList } from "react-native";

import currencies from "../data/currencies";

class CurrencyList extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}
export default CurrencyList;
