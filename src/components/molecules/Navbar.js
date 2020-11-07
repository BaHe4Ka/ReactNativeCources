import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Navbar = props => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}> {props.title} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3670d5',
        maxHeight: 100,
        width: '100%',
    },
    text: {
        marginTop: 10,
        color: '#FFFFFF',
        fontSize: 36,
        fontWeight: 'bold',
    },
});

export default Navbar;
