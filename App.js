import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { statement } from '@babel/template';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from  './src/components/PlaceInput/PlaceInput';
export default class App extends Component{
  
  state = {
    places: []
  };


  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return  {
        places: prevState.places.concat({
          key:Math.random(),
          name:placeName,
          image:{
            uri: 'https://facebook.github.io/react/logo-og.png'
          }
        })
      };
    });
  }

  placeDeleteHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place =>{
            return place.key !== key;
        })
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput 
          onPlaceAdded={this.placeAddedHandler}
        />
        <PlaceList 
          places={this.state.places}
          onItemDeleted={this.placeDeleteHandler}
        />
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
  }
});
