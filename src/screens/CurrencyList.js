import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StatusBar, FlatList } from "react-native";

import currencies from "../data/currencies";
import { ListItem, Separator } from "../components/List";
import {
  changeBaseCurrency,
  changeQuoteCurrency
} from "../redux/actions/currencies";

const TEMP_CURRENT_CURRENCY = "CAD";

class CurrencyList extends Component {
  handlePress = currency => {
    const { type } = this.props.navigation.state.params;
    if (type === "base") {
      this.props.changeBaseCurrency(currency);
    } else if (type === "quote") {
      this.props.changeQuoteCurrency(currency);
    }
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
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === "quote") {
      comparisonCurrency = this.props.quoteCurrency;
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const primaryColor = state.themes.primaryColor;

  return {
    baseCurrency,
    quoteCurrency,
    primaryColor
  };
};

export default connect(
  mapStateToProps,
  { changeBaseCurrency, changeQuoteCurrency }
)(CurrencyList);
