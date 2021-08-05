import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import poto from '../../assets/img/mackbook.jpg';

class Flexbox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            justifyContent: 'space-between',
            marginBottom: 50,
          }}>
          <View style={{backgroundColor: 'red', width: 50, height: 50}} />
          <View style={{backgroundColor: 'lightblue', width: 50, height: 50}} />
          <View style={{backgroundColor: 'salmon', width: 50, height: 50}} />
          <View style={{backgroundColor: 'green', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://yt3.ggpht.com/ytc/AKedOLS5VPsArmaKjvq0DPucpbPiqUppbU-db1LfjitXLg=s88-c-k-c0x00ffffff-no-rj',
            }}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 10}}
          />
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Ludovico einaudi
            </Text>
            <Text style={{fontSize: 15}}>1,18jt subscriber</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5,
          }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
      </View>
    );
  }
}

export default Flexbox;
