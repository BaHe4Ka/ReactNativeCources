import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const MyButton = (props) => {
    return <View style={styles.root}>
        <Button
            title={props.label}
            onPress={props.onPress}
        />
    </View>
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    }
})


export default MyButton;