import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default props => (
  <View style={StyleSheet.card}>{props.children}</View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    minHeight: 333
  }
});
