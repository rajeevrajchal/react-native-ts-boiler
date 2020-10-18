import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import style from './styles';
import {StackParamList} from "../../../navigation/navigationInterface";

interface AboutScreenProps {
    navigation: StackNavigationProp<StackParamList, 'Home'>;
}

const About: React.FC<AboutScreenProps> = (props) => {
    const {navigation} = props
    return (
        <View style={style.container}>
            <Text style={style.text}>About Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => {
                    navigation.navigate('Home');
                }}
            />
        </View>
    );
}

export default About
