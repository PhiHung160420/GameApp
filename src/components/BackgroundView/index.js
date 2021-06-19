import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BackgroundView = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
  },
});

export default BackgroundView;
