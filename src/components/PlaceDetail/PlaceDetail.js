import React from 'react';
import {Modal, View, Text, Image, Button,StyleSheet, TouchableOpacity} from 'react-native';
import Icon from  'react-native-vector-icons/Ionicons';
const placeDetail = props => {
    let modalContent = null;
    if(props.selectedPlace){
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <View style={styles.deleteButton}>
                        <TouchableOpacity>
                            <Icon size={30} name="ios-trash" color="red" onPress={props.onItemDeleted}/>
                        </TouchableOpacity>
                    </View>
                    <Button title="Close" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    );

};

const styles = StyleSheet.create({
    modalContainer:{
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteButton:{
        alignItems: "center"
    }
});


export default placeDetail;