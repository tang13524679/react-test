import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import List from './List';

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
    // setCount(index === count ? undefined : index)
    if(count==undefined){
      setCount(index)
    }else{
      setCount(undefined)
    }
  }

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const connectRef = useRef([])

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
    <View style={styles.container} >
      {
        list.map((item, index) => {
          return (
            <List ref={(ref) => {
              connectRef.current[index] = ref
            }} key={index} backgroundColor={item.backgroundColor} onClick={(state) => {
              alert(1)
              const { current } = connectRef
              for (let i in current) {
                if (i == index) {
                  if (current[i].fadeAnim._value == 0) {
                    current[i].fadeIn()
                  } else {
                    current[i].fadeOut()
                  }
                } else {
                  current[i].fadeOut()
                }
              }
            }}></List>
          )
        })
      }
    </View>
  );
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
});
