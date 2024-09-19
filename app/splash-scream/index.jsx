import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Link } from 'expo-router';

const SplashScreen = () => {
    return (
       
        <LinearGradient
        colors={['#FFFFFF', '#990000']}
        style={styles.container}
    >
        
          <Image
                    source={{
                        uri: 'https://seeklogo.com/images/P/pinterest-logo-CCDD2FE1E8-seeklogo.com.png',
                    }}
                    style={styles.image}
                />

        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    background:{
        position: 'absolute',
        left: '0',
        right: '0',
        top:'0.8',
        height: 880,
    }

});

export default SplashScreen;