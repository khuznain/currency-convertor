import React, { Component } from "react";
import { View, Text, StatusBar, FlatList } from "react-native";

import currencies from "../data/currencies";
import { ListItem, Separator } from "../components/List";

const TEMP_CURRENT_CURRENCY = "CAD";

class CurrencyList extends Component {
  handlePress = () => {
    this.props.navigation.goBack(null);
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}
export default CurrencyList;
