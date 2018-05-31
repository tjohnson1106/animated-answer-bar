import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class QuestionRow extends Component {
  state = {};
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View>
          <Text>{this.props.answer}</Text>
          {this.props.answered && (
            <Text>
              {this.props.answerResponse}/{this.props.totalRespones}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

export default QuestionRow;
