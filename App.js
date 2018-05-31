import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";
import { Font } from "expo";

import QuestionRow from "./src/components/QuestionRow";

export const loadFonts = () => {
  Font.loadAsync({
    "bangers-regular": require("./assets/fonts/Bangers-Regular.ttf"),
    "quicksand-regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "quicksand-light": require("./assets/fonts/Quicksand-Light.ttf"),
    "quicksand-bold": require("./assets/fonts/Quicksand-Bold.ttf")
  });
};

export default class App extends Component {
  state = {
    fontsReady: false,
    userAnswer: false,
    question: data
  };

  componentDidMount() {
    loadFonts().then(() => {
      this.setState({
        fontsReady: true
      });
    });
  }

  handleAnswer = userAnswer => {
    this.setState(state => {
      const updatedAnswers = state.question.answers.map(answer => {
        if (answer.answer === userAnswer.answer) {
          return {
            ...answer,
            answerCount: answer.answerCount + 1
          };
        }
        return answer;
      });
      return {
        userAnswer,
        question: {
          ...state.question,
          totalResponses: state.question.totalResponses + 1,
          answers: updatedAnswers
        }
      };
    });
  };

  render() {
    if (!this.state.fontsReady) {
      return (
        <Container>
          <View
            style={{
              flex: 1,
              justifyContent: "center"
            }}
          >
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </Container>
      );
    }

    const { question } = this.state;
    return (
      <Container padding>
        <Card>
          <Text style={styles.questionText}>{question.question}</Text>
          {question.answers.map((answer, index) => {
            let wasUserAnswer = false;
            let answered = false;
            if (this.state.userAnswer) {
              answered = true;
              wasUserAnswer =
                answer.answer === this.state.userAnswer.answer;
            }

            return (
              <QuestionRow
                key={answer.answer}
                answer={answer.answer}
                answered={answered}
                wasUserAnswer={wasUserAnswer}
                answerResponses={answer.answerCount}
                totalResponses={question.totalResponses}
              />
            );
          })}
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
