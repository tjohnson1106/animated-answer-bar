import React, { Component } from "react";
import { View, Text } from "react-native";

class QuestionRow extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>{this.props.answer}</Text>
      </View>
    );
  }
}

export default QuestionRow;
