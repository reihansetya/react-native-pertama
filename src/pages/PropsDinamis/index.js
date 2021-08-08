import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const Dinamis = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{textAlign: 'center', maxWidth: 50}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>materi komponen dinamis dengan props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Dinamis
            judul="magang"
            gambar="https://instagram.fcgk25-1.fna.fbcdn.net/v/t51.2885-15/s150x150/167188359_275206880810001_167712701357782581_n.jpg?_nc_ht=instagram.fcgk25-1.fna.fbcdn.net&_nc_ohc=bJsJ79DWME4AX8Z5LL6&edm=AGW0Xe4BAAAA&ccb=7-4&oh=53a3d6b1067e4272b765a70c484742b0&oe=61146555&_nc_sid=acd11b"></Dinamis>
          <Dinamis
            judul="kelas online"
            gambar="https://instagram.fcgk25-1.fna.fbcdn.net/v/t51.2885-15/s150x150/167060669_191089515923360_7278833395446056523_n.jpg?_nc_ht=instagram.fcgk25-1.fna.fbcdn.net&_nc_ohc=Pa9fI4nol_EAX-9kymS&edm=AGW0Xe4BAAAA&ccb=7-4&oh=bc244fdf9c80efadc644b0a11e147f29&oe=61154986&_nc_sid=acd11b"></Dinamis>
          <Dinamis
            judul="youtuber"
            gambar="https://instagram.fcgk25-1.fna.fbcdn.net/v/t51.2885-15/s150x150/211486199_159115606168457_8289782518091446408_n.jpg?_nc_ht=instagram.fcgk25-1.fna.fbcdn.net&_nc_ohc=BdFewfwL6wIAX_ShzAx&edm=AGW0Xe4BAAAA&ccb=7-4&oh=753b21d03c9763df23a15fcd1734f078&oe=611456C6&_nc_sid=acd11b"></Dinamis>
          <Dinamis
            judul="daily life"
            gambar="https://instagram.fcgk25-1.fna.fbcdn.net/v/t51.2885-15/s150x150/168518181_597330087913282_3668240464154143883_n.jpg?_nc_ht=instagram.fcgk25-1.fna.fbcdn.net&_nc_ohc=Ob6zf_IG9GUAX82cW9G&edm=AGW0Xe4BAAAA&ccb=7-4&oh=e95756663ec63dcea8ef091addc4e87a&oe=61153465&_nc_sid=acd11b"></Dinamis>
          <Dinamis
            judul="asmr"
            gambar="https://instagram.fcgk25-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.418.1080.1080a/s150x150/172428035_239825257926108_1598413237609192968_n.jpg?_nc_ht=instagram.fcgk25-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=yFHdohuhZ2QAX8Z1JoE&tn=IGjdptVaLSZcth7k&edm=AGW0Xe4BAAAA&ccb=7-4&oh=bb33888e1f478c688bc7491c0abb92b2&oe=610F8C23&_nc_sid=acd11b"></Dinamis>
          <Dinamis
            judul="skrraaa"
            gambar="https://instagram.fcgk25-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.418.1080.1080a/s150x150/172428035_239825257926108_1598413237609192968_n.jpg?_nc_ht=instagram.fcgk25-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=yFHdohuhZ2QAX8Z1JoE&tn=IGjdptVaLSZcth7k&edm=AGW0Xe4BAAAA&ccb=7-4&oh=bb33888e1f478c688bc7491c0abb92b2&oe=610F8C23&_nc_sid=acd11b"></Dinamis>
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;
