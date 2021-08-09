import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import mb from '../../assets/img/mackbook.jpg';

const Product = props => {
  return (
    <View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={styles.wrapper}>
        <View>
          <Image source={mb} style={styles.imageWrapper} />
        </View>
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Mackbook Pro 2019
        </Text>
        <Text style={styles.harga}>Rp. 25.000.000,-</Text>
        <Text style={styles.jakbar}>Jakarta Barat</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={styles.button}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={styles.beli}>
              BELI
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontWeight: 'bold',
  },
  wrapper: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 225,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 8,
  },
  imageWrapper: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  harga: {
    color: 'red',
    marginTop: 12,
    fontSize: 12,
  },
  jakbar: {
    marginTop: 12,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#6fcf97',
    borderRadius: 15,
    paddingVertical: 6,
  },
  beli: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});
