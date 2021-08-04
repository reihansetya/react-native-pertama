import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MateriFlexBox from './MateriFlexBox';
import SampleComponent from './SampleComp';
import StylingReactNativeComponent from './StylingReactNative';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent /> */}
        <MateriFlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
