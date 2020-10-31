import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const MyHeader = (props) => {
    return <View style={styles.root}>
        <Text style={styles.text}>
            {props.text}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 48,
        fontWeight: "bold",
        textAlign: 'center',
    }
})


export default MyHeader;