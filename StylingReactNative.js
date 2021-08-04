import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import mb from './mackbook.jpg';

const StylingReactNativeComponent = () => {
  return (
    <View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 225,
          marginLeft: 20,
          marginTop: 20,
          borderRadius: 8,
        }}>
        <View>
          <Image
            source={mb}
            style={{width: 200, height: 200, borderRadius: 8}}
          />
        </View>
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Mackbook Pro 2019
        </Text>
        <Text style={{color: 'red', marginTop: 12, fontSize: 12}}>
          Rp. 25.000.000,-
        </Text>
        <Text style={{marginTop: 12}}>Jakarta Barat</Text>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginTop: 20,
            backgroundColor: '#6fcf97',
            borderRadius: 15,
            paddingVertical: 6,
          }}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 14,
              fontWeight: '600',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default StylingReactNativeComponent;
