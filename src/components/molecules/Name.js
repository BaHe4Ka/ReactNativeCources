import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TextAvatar from '_atoms/TextAvatar';

const capitals = s => {
    let ans = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i].toLowerCase()) ans += s[i];
    }
    return ans;
};

const Name = props => {
    return (
        <View style={styles.root}>
            <TextAvatar text={capitals(props.text)} />
            <Text style={styles.text}>{props.text}</Text>
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
        margin: 20,
        fontSize: 40,
        fontWeight: 'normal',
        textAlign: 'center',
    },
});

export default Name;
