import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

export default function App2() {
  const [count, setCount] = useState(undefined)
  const [a, seta] = useState(0)
  const list = [
    { name: 'aaa', backgroundColor: 'rgb(0,255,201)' },
    { name: 'bbb', backgroundColor: 'rgb(209,181,0)' },
    { name: 'ccc', backgroundColor: 'rgb(80,0,209)' },
    { name: 'ddd', backgroundColor: 'rgb(209,0,71)' }
  ]
  const changeHeight = (index) => {
    setCount(index === count ? undefined : index)
  }

  const fadeAnim = useRef(new Animated.Value(100)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 100,
      duration: 200,
      useNativeDriver: true,
      xxx: true
    }).start();
  };

  const fadeInccc = () => {
    Animated.timing(fadeAnim, {
      toValue: 50,
      duration: 200,
      useNativeDriver: true

    }).start();
  };

  const fadeOut = (callback) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start(callback);
  };

  const fadeOutXXX = (callback) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start(callback);
  };



  const fadeOutBBB = (callback) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start(callback);
  };




  return (
    <View style={styles.container} >
      {
        list.map((item, index) => {
          return (
            <List key={index+'test'} backgroundColor={item.backgroundColor}></List>
          )
        })
      }
    </View>
  );
}

const List = ({backgroundColor}) => {
  const [state,setstate] = useState(false)

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animatedClick=()=>{
    setstate(!state)
    if (state) {
      fadeIn()
    } else {
      fadeOut()
    }
  }

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 100,
      duration: 200,
      useNativeDriver: true

    }).start();
  };

  const fadeOut = (callback) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start(callback);
  };

  return (
    <View style={[styles.list, { backgroundColor: backgroundColor }]} >
      <View style={{ height: 150 }}>
        <Text onPress={()=>{animatedClick()}}>1111</Text>
      </View>
      <Animated.View style={{ height: fadeAnim }}></Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 30,
    paddingTop: 60
  },
  text: {
    fontSize: 23,
  },
  list: {
    marginBottom: 0,
    marginTop: -30,
    height: 'auto',
    width: 350,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }
});
