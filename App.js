import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { statement } from '@babel/template';
import ListItem from './src/components/ListItem/ListItem';
export default class App extends Component{
  
  state = {
    placeName:"",
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === ""){
      return;
    }

    this.setState(prevState => {
      return  {
        places:prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place,i) => (
      <ListItem 
        key={i} 
        placeName={place} 
        onItemPressed={()=> alert("item pressed, Id:"+i)}
      />
    ));
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
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>
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
  },
  listContainer: {
    width: "100%"
  }
});
