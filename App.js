import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { statement } from '@babel/template';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from  './src/components/PlaceInput/PlaceInput';
import PlaceDetail from  './src/components/PlaceDetail/PlaceDetail';
export default class App extends Component{
  
  state = {
    places: [],
    selectedPlace: null
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

  placeDeletedHandler = () =>{
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place =>{
           return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }
  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}  
        />
        <PlaceInput 
          onPlaceAdded={this.placeAddedHandler}
        />
        <PlaceList 
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
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
