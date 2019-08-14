import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetails'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title={'Introdução'}/>
            <ImageDetail title={'Visão Geral'}/>
            <ImageDetail title={'Sobre Metas'}/>
            <ImageDetail title={'Conceitos do Treinamento'}/>
            <ImageDetail title={'Técnicas Avançadas'}/>
            <ImageDetail title={'Guia de Exercícios em Vídeo'}/>
            <ImageDetail title={'Treino Adaptativo'}/>
            <ImageDetail title={'Downloads / Links'}/>
            <ImageDetail title={'Suporte'}/>
        </View>
    )
}

const Styles = StyleSheet.create({})

export default ImageScreen;