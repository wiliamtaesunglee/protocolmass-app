import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetails'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title={'Introdução'} imageSource={require('../../assets/forest.jpg')} video={'1.1 Introdução'}/>
            <ImageDetail title={'Visão Geral'} imageSource={require('../../assets/mountain.jpg')} video={'2.1 Guia de Navegação'}/>
            <ImageDetail title={'Sobre Metas'} imageSource={require('../../assets/beach.jpg')} video={'3.1 Metas para o Sucesso'}/>
            {/* <ImageDetail title={'Conceitos do Treinamento'} imageSource={require('../../forest.jpg')}/>
            <ImageDetail title={'Técnicas Avançadas'} imageSource={require('../../assets/montain.jpg')}/>
            <ImageDetail title={'Guia de Exercícios em Vídeo'} imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetail title={'Treino Adaptativo'} imageSource={require('../../forest.jpg')}/>
            <ImageDetail title={'Downloads / Links'} imageSource={require('../../assets/montain.jpg')}/>
            <ImageDetail title={'Suporte'} imageSource={require('../../assets/forest.jpg')}/> */}
        </View>
    )
}

const Styles = StyleSheet.create({})

export default ImageScreen;