import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddList from '_organisms/AddList';
import Navbar from '_molecules/Navbar';

export default function App() {
    return (
        <View style={styles.container}>
            <Navbar title={'Список пользователей'} />
            <AddList />
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
