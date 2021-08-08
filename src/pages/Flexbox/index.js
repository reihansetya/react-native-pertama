import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import poto from '../../assets/img/mackbook.jpg';

// class Flexbox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> constructor');
//     this.state = {
//       subscriber: 1.2,
//       nama: 'Ludovico einaudi',
//       profil:
//         'https://yt3.ggpht.com/ytc/AKedOLS5VPsArmaKjvq0DPucpbPiqUppbU-db1LfjitXLg=s88-c-k-c0x00ffffff-no-rj',
//     };
//   }

//   componentDidMount() {
//     console.log('==> componentDidMount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 1.5,
//         nama: 'ambient studio',
//         profil:
//           'https://yt3.ggpht.com/ytc/AKedOLTS5YaA8mh82ojycWHu6urH6fhFK4NvDvS-pXZ5=s88-c-k-c0x00ffffff-no-rj',
//       });
//     }, 5000);
//   }

//   componentDidUpdate() {
//     console.log('==> component did update');
//   }

//   componentWillUnmount() {
//     console.log('==> component will unmount');
//   }

//   render() {
//     console.log('==> render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: 'grey',
//             justifyContent: 'space-between',
//             marginBottom: 50,
//           }}>
//           <View style={{backgroundColor: 'red', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'lightblue', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'salmon', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'green', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <Image
//             source={{uri: this.state.profil}}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 10}}
//           />
//           <View>
//             <Text style={{fontWeight: 'bold', fontSize: 20}}>
//               {this.state.nama}
//             </Text>
//             <Text style={{fontSize: 15}}>
//               {this.state.subscriber}jt subscriber
//             </Text>
//           </View>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             marginTop: 5,
//           }}>
//           <Text>Beranda</Text>
//           <Text>Vidseo</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//       </View>
//     );
//   }
// }

const Flexbox = () => {
  const [subscriber, setSubscriber] = useState(1.2);

  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(1.5);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setSubscriber(1.5);
  //   }, 2000);
  // }, [subscriber]);

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
            Ludovico aneiudo
          </Text>
          <Text style={{fontSize: 15}}> {subscriber}jt subscriber</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 5,
        }}>
        <Text>Beranda</Text>
        <Text>Vidseo</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
    </View>
  );
};

export default Flexbox;
