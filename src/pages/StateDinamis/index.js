import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//functional component
const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)}></Button>
    </View>
  );
};

// class component
class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Materi komponen dinamis dengan state</Text>
      <Text style={styles.title}>functional komponen</Text>
      <Counter />
      <Counter />
      <Text style={styles.title}>class komponen</Text>
      <CounterClass />
      <CounterClass />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 30,
  },
  textTitle: {
    textAlign: 'center',
  },
  title: {
    marginTop: 20,
  },
});
