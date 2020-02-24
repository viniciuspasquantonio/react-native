import React from 'react';
import {View,Text, StyleSheet,TouchableOpacity,Image} from 'react-native';

const listItem = (props) =>(
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image resize="cover" source={{
    uri: 'https://facebook.github.io/react/logo-og.png',
    cache: 'only-if-cached',
  }} style={styles.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection:"row",
        alignItems:"center"
    },
    placeImage: {
        marginRight: 8,
        maxHeight: 30,
        maxWidth: 30
    }
});
export default listItem;
