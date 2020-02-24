import React, {Component} from 'react';
import {View,TextInput,Button, StyleSheet} from 'react-native';

export default  class PlaceInput extends Component{
    state = {
        placeName: ""
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
    
       this.props.onPlaceAdded(this.state.placeName);
    };
    render() {
        return (
            <View style={styles.placeInputContainer}>
                <TextInput
                placeholder="An awseome place"
                value={this.state.placeName}
                onChangeText={this.placeNameChangedHandler}  
                style={styles.placeInput}
                />
                <Button
                title="Add" 
                style={styles.placeButton}
                onPress={this.placeSubmitHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    placeInputContainer:{
        alignSelf: 'stretch',
    },
    placeInput:{
        width: '70%'
    },
    placeButton:{
        width: '30%'
    }
}); 


