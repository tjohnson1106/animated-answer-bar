import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class QuestionRow extends Component {
  state = {};
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View>
          <Text
            style={[
              styles.answerText,
              this.props.wasUserAnswer && styles.answerBoldText
            ]}
          >
            {this.props.answer}
          </Text>
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

const styles = StyleSheet.create({
  answerText: {
    marginBottom: 6,
    fontSize: 20,
    lineHeight: 25,
    color: "#4A4A4A",
    fontFamily: "quicksand-light"
  },
  answerBoldText: {
    fontFamily: "quicksand-bold"
  }
});

export default QuestionRow;
