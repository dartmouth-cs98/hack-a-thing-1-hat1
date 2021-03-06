import React from 'react';
import { Animated } from 'react-native';

// based on this tutorial: https://facebook.github.io/react-native/docs/animations.html

class FadeOutView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(1), // Initial value for opacity: 0
  }

  componentDidMount() {
    const { fadeAnim } = this.state;
    Animated.timing( // Animate over time
      fadeAnim, // The animated value to drive
      {
        toValue: 0, // Animate to opacity: 1 (opaque)
        duration: 250,
      },
    ).start(); // Starts the animation
  }

  render() {
    const { fadeAnim } = this.state;
    const { style, children } = this.props;
    return (
      <Animated.View // Special animatable View
        style={{
          ...style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      >
        {children}
      </Animated.View>
    );
  }
}

export default FadeOutView;
