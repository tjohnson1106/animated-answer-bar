import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

class QuestionRow extends Component {
  state = {};
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.row}
        disabled={this.props.answered}
      >
        <View style={styles.innerRow}>
          <Text
            style={[
              styles.answerText,
              this.props.wasUserAnswer && styles.answerBoldText
            ]}
          >
            {this.props.answer}
          </Text>
          <View style={styles.answerRow}>
            {this.props.answered && (
              <Text style={styles.answerRowText}>
                {this.props.answerResponse}/{this.props.totalRespones}
              </Text>
            )}
          </View>
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
  },
  answerRowText: {
    fontSize: 20,
    lineHeight: 25,
    color: "#4A4A4A",
    fontFamily: "quicksand-light"
  },
  innerRow: {
    marginHorizontal: 10
  },
  row: {
    paddingVertical: 10,
    paddingHorizontal: -10,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F4F6"
  },
  answerRow: {
    height: 30
  }
});

export default QuestionRow;
