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

const getOverLayStyles = (
  isCorrectAnswer,
  wasUserAnswer,
  answered
) => {
  const s = [styles.answerBar];

  if (isCorrectAnswer) {
    s.push(styles.answerBarCorrect);
  } else if (wasUserAnswer) {
    s.push(styles.answerBarWrong);
  } else {
    s.push(styles.answerBarNeutral);
  }

  if (answered) {
    s.push({ width: 100 });
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
    totalResponses: 0
  };

  state = {
    width: 0
  };

  handleLayout = ({}) => {
    this.setState({ width: nativeEvent.layout.width });
  };

  render() {
    //conditional based on indexed data
    const rowStyle = [styles.row];
    if (this.props.index === 0) {
      rowStyle.push(styles.borderTop);
    }

    const percentage =
      this.props.answerResponses / this.props.totalResponses;
    const rowWidth = Math.floor(this.state.width * percentage);

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
          <View
            style={getAnswerRowStyles(this.props.answered)}
            onLayout={this.handleLayout}
          >
            <View
              style={[
                getOverLayStyles(
                  this.props.isCorrectAnswer,
                  this.props.wasUserAnswer
                ),
                this.props.answered && { width: rowWidth }
              ]}
            />
            {this.props.answered && (
              <Text style={styles.answerRowText}>
                {this.props.answerResponses}/{
                  this.props.totalResponses
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
  },
  answerBar: {
    borderRadius: 15,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0
  },
  answerBarCorrect: {
    backgroundColor: "#BAE4CF"
  },
  answerBarWrong: {
    backgroundColor: "#F0C6D6"
  },
  answerBarNeutral: {
    backgroundColor: "#D8D8D8"
  }
});

export default QuestionRow;
