import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const MyText = props => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'normal',
        textAlign: 'center',
    },
});

export default MyText;
