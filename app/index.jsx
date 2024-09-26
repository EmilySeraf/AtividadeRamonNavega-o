import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Link } from 'expo-router';

const TelaInicial = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Minhas atividades</Text>
                        <View style={styles.imagesContainer}>
                <Link href="./calculadora">
                    <Image
                        source={require('./../assets/images/incial/1.png')}
                        style={styles.image}
                    />
                </Link>
                <Link href="./calculadora-atualizada">
                    <Image
                        source={require('./../assets/images/incial/2.png')}
                        style={styles.image}
                    />
                </Link>
                <Link href="./lista-tarefas">
                    <Image
                        source={require('./../assets/images/incial/3.png')}
                        style={styles.image}
                    />
                </Link>
                <Link href="./pokemon">
                    <Image
                        source={require('./../assets/images/incial/4.png')}
                        style={styles.image}
                    />
                </Link>
                <Link href="./santander">
                    <Image
                        source={require('./../assets/images/incial/5.png')}
                        style={styles.image}
                    />
                </Link>
                <Link href="./Signup">
                    <Image
                        source={require('./../assets/images/incial/6.png')}
                        style={styles.image}
                    />
                </Link>
                <Link href="./splash-scream">
                    <Image
                        source={require('./../assets/images/incial/7.png')}
                        style={styles.image}
                    />
                </Link>
                <Link href="./sobre-mim">
                    <Image
                        source={require('./../assets/images/incial/8.png')}
                        style={styles.image}
                    />
                </Link>
                <Link href="./IFome">
                    <Image
                        source={require('./../assets/images/incial/9.png')}
                        style={styles.image}
                    />
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20, 
        textAlign: 'center', 
    },
    imagesContainer: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
    image: {
        width: 130, 
        height: 130, 
        marginHorizontal: 10, 
        marginBottom: 20, 
    },
});

export default TelaInicial;