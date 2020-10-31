import React from 'react';
import {View, StyleSheet } from 'react-native';
import MyHeader from '../MyHeader';
import MyText from '../MyText';


const Post = (props) => {
    return <View style={[styles.root, props.rootStyle]}>
            <View style={[styles.headerStyle, props.headerStyle]}>
                <MyHeader text={props.headerText}/>
            </View>
            <View style={[styles.bodyStyle, props.bodyStyle]}>
                <MyText text={props.bodyText}/>
            </View>
    </View>
}

const styles = StyleSheet.create({
    root: {
        width: "98%",
        height: "15%",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 5,
        borderWidth: 4,
        borderRadius: 6,
        borderColor: "#000000"
    },
    headerStyle: {
        width: "100%",
    },
    bodyStyle: {
        width: "100%",
    }
})


export default Post;