//I did not write this. I just found it on geeks for geeks and edited it to work in my program. 



import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from '../constants/colors/Colors';

interface OppSpeedState {
    randomNumber: number | null;
    randomHeroNumber: number | null;
    totalOppDice: number | null;
    totalOppSpeed: number | null; 
    initialOppSpeed: number | null;
}
  
class OppSpeed extends React.Component<{}, OppSpeedState> {
    constructor(props: {}) {
      super(props);
      this.state = {
        randomNumber: null,
        randomHeroNumber: null,
        totalOppDice: null,
        totalOppSpeed: null,
        initialOppSpeed: null,
      };
    }

    componentDidMount() {
        this.retrieveOppSpeed();
    }

    retrieveOppSpeed = async () => {
        try {
          const speedOppValue = await AsyncStorage.getItem('OppSpeed');
          if (speedOppValue !== null) {
            const initialOppSpeed = parseInt(speedOppValue, 10);
            this.setState({ initialOppSpeed });
          }
        } catch (error) {
            console.error('Error retrieving Speed value:', error);
        }
      };

  generateRandomNumber = () => {
    const min = 1;
    const max = 6;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomHeroNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const totalOppDice = randomNumber + randomHeroNumber;
    let totalOppSpeed = this.state.initialOppSpeed || 0;
    totalOppSpeed += totalOppDice;
    this.setState({ randomNumber, randomHeroNumber, totalOppDice, totalOppSpeed });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.generateRandomNumber}>
          <Text style={styles.buttonText}>Roll Dice</Text>
        </TouchableOpacity>
        <Text style={styles.randomNumber}>First Dice: {this.state.randomHeroNumber}</Text>
        <Text style={styles.randomNumber}>Second Dice: {this.state.randomNumber}</Text>
        <Text style={styles.randomNumber}>Total: {this.state.totalOppDice}</Text>
        <Text style={styles.randomNumber}>Total + Speed: {this.state.totalOppSpeed}</Text>
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
});

export default OppSpeed;
