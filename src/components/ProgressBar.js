import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ProgressBar({ progress, color }) {
  return (
    <View style={styles.progressBar}>
      <View style={[styles.progress, { width: `${progress}%`, backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    height: 15,
    width: 300,
    backgroundColor: '#ccc',
    marginVertical: 20,
    borderRadius: 5,
  },
  progress: {
    height: '100%',
    borderRadius: 5,
  },
});
