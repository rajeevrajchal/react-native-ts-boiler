import {StackNavigationProp} from '@react-navigation/stack';
import React, {ReactElement} from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../../../App';
import style from './styles';

interface AboutScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
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
