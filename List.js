import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated } from 'react-native';
import React, { useState, useRef, useEffect, forwardRef } from 'react';

const List = (props,ref) => {
    const [state, setstate] = useState(false)

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const animatedClick = () => {
        if (state) {
            fadeOut()
        } else {
            fadeIn()
        }
        setstate(!state)
        props.onClick(state)
    }

    const fadeIn = () => {
        
        Animated.timing(fadeAnim, {
            toValue: 100,
            duration: 200,
            useNativeDriver: true

        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start();
    };

    ref({
        fadeIn,
        fadeOut,
        fadeAnim
    })

    return (
        <View  style={[styles.list, { backgroundColor: props.backgroundColor }]} onPress={() => { animatedClick() }}>
            <View style={{ height: 150 }}>
                <Text></Text>
            </View>
            <Animated.View style={{ height: fadeAnim }}></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        marginBottom: 0,
        marginTop: -30,
        height: 'auto',
        width: 350,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }
});

export default forwardRef(List)