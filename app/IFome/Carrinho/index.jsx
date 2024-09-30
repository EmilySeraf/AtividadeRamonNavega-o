import React, { useContext } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { CarrinhoContext } from '../../../scripts/CarrinhoContext'; 

const Carrinho = () => {
    const { itensCarrinho } = useContext(CarrinhoContext);

    const calcularTotal = () => {
        return itensCarrinho.reduce((total, item) => {
            const preco = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
            return total + preco;
        }, 0).toFixed(2);
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemCarrinho}>
            <Text style={styles.nomeProduto}>{item.nome}</Text>
            <Text style={styles.precoProduto}>{item.preco}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.title}>Carrinho</Text>
            </View>

            <FlatList
                data={itensCarrinho}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listaCarrinho}
                ListEmptyComponent={<Text style={styles.textoVazio}>Seu carrinho está vazio.</Text>}
            />

            <View style={styles.totalContainer}>
                <Text style={styles.totalTexto}>Total do pedido</Text>
                <Text style={styles.totalValor}>R$ {calcularTotal()}</Text>
            </View>

            <TouchableOpacity
                style={styles.botaoComprar}
                onPress={() => alert('Compra realizada com sucesso!')}
            >
                <Text style={styles.botaoTexto}>COMPRAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cabecalho: {
        backgroundColor: 'red',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    listaCarrinho: {
        paddingVertical: 20,
    },
    itemCarrinho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    nomeProduto: {
        fontSize: 16,
    },
    precoProduto: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalContainer: {
        marginTop: 20,
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    totalTexto: {
        fontSize: 16,
        color: '#666',
    },
    totalValor: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 5,
    },
    botaoComprar: {
        marginTop: 20,
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    botaoTexto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textoVazio: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Carrinho;
