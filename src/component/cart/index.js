import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from '../../assets/icons/cart.png';

const Cart = props => {
  return (
    <View>
      <View style={styles.cartView}>
        <Image source={cart} style={styles.cartSize} />
        <Text style={styles.cartText}>{props.qty}</Text>
      </View>
      <Text style={styles.textBawah}>Keranjang belanja anda</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartSize: {
    height: 50,
    width: 50,
  },
  cartView: {
    marginTop: 30,
    borderColor: 'lightblue',
    borderWidth: 3,
    width: 93,
    height: 93,
    position: 'relative',
    borderRadius: 93 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartText: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'lightgreen',
    borderRadius: 100,
    padding: 4,
    color: '#feefee',
    fontSize: 12,
  },
  textBawah: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '700',
  },
});
