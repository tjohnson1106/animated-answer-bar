import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
  Dimensions
} from "react-native";

const { height } = Dimensions.get("window");

class Container extends Component {
  state = {
    screenHeight: height
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.scrollView.scrollTo({ y: 0, animated: false });
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <SafeAreaView style={styles.areaViewContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#468189"
        />
        <ScrollView
          ref={ref => (this.scrollView = ref)}
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <View
            style={[
              styles.content,
              this.props.padding && styles.padding
            ]}
          >
            {this.props.children}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  areaViewContainer: {
    flex: 1,
    backgroundColor: "#85D4E7"
  },
  scrollview: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between"
  },
  padding: {
    padding: 10
  }
});

export default Container;
