import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Interactive from './src/components/Interactive/interactive';

export default function App() {
  return (
    <Interactive></Interactive>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
