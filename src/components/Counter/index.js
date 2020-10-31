import React from 'react';
import {View, StyleSheet } from 'react-native';
import MyHeader from '../MyHeader';
import MyButton from "../MyButton";

const Counter = () => {
    const [count, setCount] = React.useState(0);
    const plus = () => {
        setCount(p => p + 1);
    }
    const minus = () => {
        setCount(p => p - 1)
    }
    return <View style={styles.root}>
        <MyHeader text={"COVID-19 Confirmed Cases: " + count} style={styles.header}/>
        <View style={styles.buttons}>
            <MyButton label="+" onPress={plus}/>
            <MyButton label="-" onPress={minus}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        // cssFloat: 'left',
    },
    header: {
        textAlign: 'center',
    }
})


export default Counter;