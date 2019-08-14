import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetails = ({ imageSource, title, video}) => {
    // console.log(props.title)
    return (

        <View>
            <Image source={imageSource}/>
            <Text >
                {title}
            </Text>
            <Text>
                {video}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageDetails;