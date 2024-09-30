import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { CarrinhoContext, CarrinhoProvider } from '../../scripts/CarrinhoContext';

const IFome = () => {
    const produtos = [
        {
            id: '1',
            nome: 'Big Mac Combo',
            descricao: 'McDonalds | Kobrasol',
            preco: 'R$ 32,50',
            imagem: require('../../assets/images/IFome/BigMac.png'), 
        },
        {
            id: '2',
            nome: 'China Bowl Carne com Legumes',
            descricao: 'China in Box | Kobrasol',
            preco: 'R$ 34,70',
            imagem: require('../../assets/images/IFome/China.png'), 
        },
        {
            id: '3',
            nome: 'Hot Dog',
            descricao: 'HOT DOG DU PIRU | Campinas',
            preco: 'R$ 23,00',
            imagem: require('../../assets/images/IFome/Cachorro.jpeg'),
        },
    ];

    const { itensCarrinho, adicionarAoCarrinho } = useContext(CarrinhoContext);

    const renderProduto = ({ item }) => (
        <View style={styles.produto}>
            <Image source={item.imagem} style={styles.produtoImagem} />
            <View style={styles.produtoInfo}>
                <Text style={styles.produtoNome}>{item.nome}</Text>
                <Text style={styles.produtoDescricao}>{item.descricao}</Text>
                <Text style={styles.produtoPreco}>{item.preco}</Text>
                <TouchableOpacity 
                    style={styles.botaoComprar}
                    onPress={() => adicionarAoCarrinho(item)}
                >
                    <Text style={styles.botaoTexto}>COMPRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.title}>iFome</Text>
                <View style={styles.carrinho}>
                    <Link href="/IFome/Carrinho">
                        <Image
                            source={require('../../assets/images/IFome/Carrinho.png')} 
                            style={styles.image}
                        />
                        <Text style={styles.textCarrinho}>{itensCarrinho.length} itens</Text>
                    </Link>
                </View>
            </View>
            
            <FlatList
                data={produtos}
                renderItem={renderProduto}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listaProdutos}
            />
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    image: {
        width: 25,
        height: 25,
    },
    carrinho: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textCarrinho: {
        marginLeft: 5,
        color: 'white',
        fontSize: 16,
    },
    listaProdutos: {
        padding: 10,
    },
    produto: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        marginBottom: 15,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    produtoImagem: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 15,
    },
    produtoInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    produtoNome: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    produtoDescricao: {
        fontSize: 14,
        color: '#666',
    },
    produtoPreco: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    botaoComprar: {
        marginTop: 10,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
    },
    botaoTexto: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default IFome;
