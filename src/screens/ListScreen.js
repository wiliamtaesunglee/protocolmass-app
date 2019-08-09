import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {

    const classRoom = [
        {name: 'Introdução',
        classes: ['1.1 Introdução']},
        {name: 'Visão Geral',
        classes: ['2.1 Guia de Navegação']},
        {name: 'Sobre Metas',
        classes: ['3.1 Metas para o Sucesso']},
        {name: 'Conceitos do Treinamento',
        classes: ['4.1 Periodização']},
        {name: 'Alimentação e suplementação',
        classes: ['5.1 Fracionamento e Qualidade das refeições ']},
        {name: 'Treinos',
        classes: ['6.1 Planilhas ']},
        {name: 'Técnicas Avançadas',
        classes: ['7.1 Piramide Crescente']},
        {name: 'Guia de Exercícios em Vídeo',
        classes: ['Abdominal Ajoelhado']},
        {name: 'Treino Adaptativo',
        classes: ['9.1 Treino Adaptativo']},
        {name: 'Downloads / Links',
        classes: ['Metas para o sucesso PDF']},
        {name: 'Suporte',
        classes: ['11.1 Grupo de Dúvidas Nutrição e Treino']}
    ];

    return (
            <View>      
            <FlatList
                keyExtractor={classRoom => classRoom.name}
                data={classRoom}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text style={styles.textStyle}>{item.name}</Text>
                            <Text>{item.classes}</Text>
                        </View>
                    )
                }}
            />

            </View>
        
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20,
        fontSize: 20,
        fontWeight: '200'
    }
})

export default ListScreen;