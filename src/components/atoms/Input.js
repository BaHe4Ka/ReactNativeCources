import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Input = props => {
    return (
        <View style={styles.root}>
            <TextInput
                onChangeText={text => props.setText(text)}
                value={props.value}
                style={styles.text}
                placeholder={'Введите Имя'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        margin: 10,
        flex: 0.7,
        height: 40,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#ededed',
    },
});

export default Input;
