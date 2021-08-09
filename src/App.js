import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Flexbox from './pages/Flexbox';
import Komunikasi from './pages/Komunikasi';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import SampleComponent from './pages/SampleComponent';
import StateDinamis from './pages/StateDinamis';
import StylingComponent from './pages/StylingComponent';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 10000);
  }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}
        {/* <Flexbox /> */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        <Komunikasi />
        {/* <Text>Halo</Text> */}
      </ScrollView>
    </View>
  );
};

export default App;
