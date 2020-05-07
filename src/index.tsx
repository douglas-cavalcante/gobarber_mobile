import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView></SafeAreaView>
    </>
  );
};

export default App;
