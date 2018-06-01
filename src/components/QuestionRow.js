import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const getAnswerRowStyles = answered => {
  const s = [styles.answerRow];
  if (answered) {
    s.push(styles.answerRowFilled);
  }
  return s;
};

class QuestionRow extends Component {
  static defaultProps = {
    index: 0,
    answered: false,
    onPress: () => null,
    wasUserAnswer: false,
    answer: null,
    answerResponses: 0,
    totalRespones: 0
  };
  render() {
    //conditional based on indexed data
    const rowStyle = [styles.row];
    if (this.props.index === 0) {
      rowStyle.push(styles.borderTop);
    }
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={rowStyle}
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
                {this.props.answerResponses}/{
                  this.props.totalRespones
                }
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
  answerRow: {
    height: 30,

    borderRadius: 15,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  answerRowFilled: {
    backgroundColor: "#F5F4F6"
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
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: "#F5F4F6"
  }
});

export default QuestionRow;
