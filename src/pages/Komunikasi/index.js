import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../../component/cart';
import Product from '../../component/product';

const Komunikasi = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  const TambahProduct = () => {
    setTotalProduct(totalProduct + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi komunikasi antar komponen</Text>
      <Cart qty={totalProduct} />
      <Product onButtonPress={TambahProduct} />
    </View>
  );
};

export default Komunikasi;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
