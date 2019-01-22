import React, { Component } from "react";
import { ScrollView, StatusBar, Platform, Linking } from "react-native";

import { ListItem, Separator } from "../components/List";

// const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";
// const ICON_COLOR = "#868686";
// const ICON_SIZE = 23;

class Options extends Component {
  handleThemePress = () => {
    this.props.navigation.navigate("Themes");
  };
  handleSitePress = () => {
    Linking.openURL("http://fixer.io").catch(() => alert("An error occured"));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="default" translucent={false} />
        <ListItem
          text="Theme"
          onPress={this.handleThemePress}
          //   customIcon={
          //   <Ionicons
          //     name={`${ICON_PREFIX}-arrow-forward`}
          //     size={ICON_SIZE}
          //     color={ICON_COLOR}
          //   />
          //   }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          //   customIcon={
          //     <Ionicons name="ios-link" color={ICON_COLOR} size={ICON_SIZE} />
          //   }
        />
      </ScrollView>
    );
  }
}
export default Options;
