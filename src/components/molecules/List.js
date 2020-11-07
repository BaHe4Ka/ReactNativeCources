import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Name from '_molecules/Name';

const List = props => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.list}>
                <Name text={item.title} />
            </View>
        );
    };
    return (
        <View style={styles.root}>
            <FlatList
                contentContainerStyle={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    padding: 15,
                }}
                ListEmptyComponent={() => {
                    return (
                        <View style={styles.text}>
                            <Text>Тут пока пусто...</Text>
                        </View>
                    );
                }}
                data={props.data}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${index}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default List;
