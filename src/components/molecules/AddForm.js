import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '_atoms/Input';
import Button from '_atoms/Button';

const AddForm = props => {
    const handlePress = () => {
        props.onPress(props.text);
        props.setText('');
    };
    return (
        <View style={styles.root}>
            <Input value={props.text} setText={props.setText} />
            <Button onPress={handlePress} label={'Add'} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AddForm;
