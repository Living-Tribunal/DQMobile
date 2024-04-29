import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from '../constants/colors/Colors';

interface DiceState {
    randomNumber: number | null;
    randomHeroNumber: number | null;
    totalDice: number | null;
    totalSpeed: number | null;
    initialSpeed: number | null;
}
  

class Dice extends React.Component<{}, DiceState> {
    constructor(props: {}) {
      super(props);
      this.state = {
        randomNumber: 0,
        randomHeroNumber: 0,
        totalDice: 0,
        totalSpeed: null,
        initialSpeed: null,
      };
    }

    componentDidMount() {
        this.retrieveSpeed();
    }

    retrieveSpeed = async () => {
        try {
          const speedValue = await AsyncStorage.getItem('Speed');
          if (speedValue !== null) {
            const initialSpeed = parseInt(speedValue, 10);
            this.setState({ totalSpeed: initialSpeed, initialSpeed });
          }
        } catch (error) {
            console.error('Error retrieving speed value:', error);
        }
      };

  generateRandomNumber = () => {
    const min = 1;
    const max = 6;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomHeroNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const totalDice = randomNumber + randomHeroNumber;
    let totalSpeed = this.state.totalSpeed || 0;
    if (this.state.initialSpeed !== null) {totalSpeed = this.state.initialSpeed + totalDice;}
    this.setState({ randomNumber, randomHeroNumber, totalDice, totalSpeed });
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
        <Text style={styles.randomNumber}>Total + Speed: {this.state.totalSpeed}</Text>
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
    backgroundColor: Colors.backgroundGold,
    paddingHorizontal:10,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.scrollviewBackground,
    fontSize: 13,
    fontWeight: 'bold',
  },
  randomNumber: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.textColor,
  },
  heading: {
    fontSize: 15,
    marginBottom: 20,
    color: Colors.textColor,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});

export default Dice;
