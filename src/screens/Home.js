import React, { Component } from "react";
import { KeyboardAvoidingView, StatusBar } from "react-native";
import { connect } from "react-redux";
import { ClearButton } from "../components/Button";
import { Container } from "../components/container";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { LastConverted } from "../components/Text";
import { InputWithButton } from "../components/TextInput";
import {
  changeCurrencyAmount,
  getInitialConversion,
  swapCurrency
} from "../redux/actions/currencies";

class Home extends Component {
  state = {};

  componentWillMount() {
    this.props.getInitialConversion();
  }

  handleTextChange = text => {
    this.props.changeCurrencyAmount(text);
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate("CurrencyList", {
      title: "Base Currency",
      type: "base"
    });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate("CurrencyList", {
      title: "Quote Currency",
      type: "quote"
    });
  };

  handleSwapCurrency = () => {
    this.props.swapCurrency();
  };

  handleOptionPress = () => {
    this.props.navigation.navigate("Options");
  };

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);

    if (this.props.isFetching) {
      quotePrice = "...";
    }

    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={quotePrice}
            textColor={this.props.primaryColor}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.lastConvertedDate}
            convertioRate={this.props.conversionRate}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const convertionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = convertionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: convertionSelector.isFetching,
    primaryColor: state.themes.primaryColor,
    lastConvertedDate: convertionSelector.date
      ? new Date(convertionSelector.date)
      : new Date()
  };
};

export default connect(
  mapStateToProps,
  { swapCurrency, changeCurrencyAmount, getInitialConversion }
)(Home);
