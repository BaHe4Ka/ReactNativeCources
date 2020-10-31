import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Post from './src/components/Post';
import Counter from "./src/components/Counter";

export default function App() {
  return <View style={styles.container}>
      {/*<MyHeader text="Header"/>*/}
      {/*<MyText text="Regular text"/>*/}
      {/*<MyButton label="Press Me!" onPress={() => Alert.alert("Thank you!")}/>*/}
      <Post headerText="Breaking News" bodyText="Center"/>
      <Post headerText="Breaking News" bodyText="Header to top, body to left"
        rootStyle={{
            justifyContent: "flex-start",
        }}
        bodyStyle={{
            alignItems: "flex-start",
        }}
      />
      <Post headerText="Breaking News" bodyText="Header and body to right"
            rootStyle={{
                justifyContent: "flex-start",
            }}
            headerStyle={{
                alignItems: "flex-end",
            }}
            bodyStyle={{
                alignItems: "flex-end",
            }}
      />
      <Post headerText="Breaking News" bodyText="Header and body to bottom"
            rootStyle={{
                justifyContent: "flex-end",
            }}
      />
      <Counter/>
      <StatusBar style="auto" />
    </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
