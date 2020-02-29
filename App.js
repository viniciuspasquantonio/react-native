import React, {Component} from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from  './src/components/PlaceInput/PlaceInput';
import PlaceDetail from  './src/components/PlaceDetail/PlaceDetail';
import { addPLace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';
import { addPlace } from './src/store/actions';
class App extends Component{

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };
  
  placeDeletedHandler = () =>{
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }
  
  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}  
        />
        <PlaceInput 
          onPlaceAdded={this.placeAddedHandler}
        />
        <PlaceList 
          places={this.props.places}
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

const mapStateToProps = state => {
  return {
    places:state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App)