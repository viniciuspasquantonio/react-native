import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { statement } from '@babel/template';

export default class App extends Component{
  
  state = {
    placeName:""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="An awseome place"  
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button
            title="Add" 
            style={styles.placeButton}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:20
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:"center",
    width:"100%"
  },
  placeInput:{
    width: '70%'
  },
  placeButton:{
    width: '30%'
  }
});
