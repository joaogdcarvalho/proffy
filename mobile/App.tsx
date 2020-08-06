import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/landing';
import { View } from 'react-native';

export default function App() {
  return (
    <>
      <Landing/>
      <StatusBar style="auto" />
    </>
  );
}