import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const TextAvatar = props => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3670d5',
        borderRadius: 50,
    },
    text: {
        fontSize: 32,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default TextAvatar;
