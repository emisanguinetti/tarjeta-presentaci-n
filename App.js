import React from 'react';
import Presentacion from './components/Presentacion';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Presentacion />
    </SafeAreaProvider>
  );
}
