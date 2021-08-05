import React, {Component} from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 40, height: 40, backgroundColor: '#0abde3'}}></View>
      <Text>
        Reihan <Reihan />
      </Text>
      <Photo />
      <TextInput style={{borderWidth: 1}}></TextInput>
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Reihan = () => {
  return <Text style={styleReihan.textR}>Reihan Setya Abida</Text>;
};

const styleReihan = StyleSheet.create({
  textR: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
});

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://placeimg.com/100/100/tech',
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{width: 80, height: 80}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini adalah enxtend component</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/arch'}}
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
          }}
        />
        <Text style={{color: 'blue'}}>Ini adalah gambar gedung????</Text>
        <Text style={{textAlign: 'center', marginTop: 10}}>
          Ini berada di tengah
        </Text>
      </View>
    );
  }
}

export default SampleComponent;
