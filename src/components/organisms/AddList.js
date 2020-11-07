import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import AddForm from '_molecules/AddForm';
import List from '_molecules/List';

const AddList = props => {
    const [data, setData] = useState([]);
    const [text, setText] = useState('');
    const onPress = () => {
        let info = {
            id: data.length == 0 ? 0 : data[data.length - 1].id,
            title: text,
        };
        if (text != '') setData(prev => [...prev, info]);
    };
    return (
        <View style={styles.root}>
            <AddForm text={text} setText={setText} onPress={onPress} style={styles.form} />
            <List data={data} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
});

export default AddList;
