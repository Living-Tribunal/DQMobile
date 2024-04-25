//I found this on geekforgeeks and just modified it. 


import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface DiceState {
    randomNumber: number | null;
    randomHeroNumber: number | null;
    totalDice: number | null;
}
  

class Dice extends React.Component<{}, DiceState> {
    constructor(props: {}) {
      super(props);
      this.state = {
        randomNumber: 0,
        randomHeroNumber: 0,
        totalDice: 0,
      };
    };

  generateRandomNumber = () => {
    const min = 1;
    const max = 6;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomHeroNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const totalDice = randomNumber + randomHeroNumber;
    this.setState({ randomNumber, randomHeroNumber, totalDice });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.generateRandomNumber}>
          <Text style={styles.buttonText}>Roll Dice</Text>
        </TouchableOpacity>
        <Text style={styles.randomNumber}>First Dice: {this.state.randomHeroNumber}</Text>
        <Text style={styles.randomNumber}>Second Dice: {this.state.randomNumber}</Text>
        <Text style={styles.randomNumber}>Total: {this.state.totalDice}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gold',
    paddingHorizontal:10,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
  randomNumber: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  heading: {
    fontSize: 15,
    marginBottom: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});

export default Dice;
