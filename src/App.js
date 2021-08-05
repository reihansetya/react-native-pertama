import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Flexbox from './pages/Flexbox';
import Position from './pages/Position';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <Flexbox />
        <Position />
      </ScrollView>
    </View>
  );
};

export default App;
