import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../../../App';
import style from './styles';

interface HomeScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<HomeScreenProps> = (props) => {
    const {navigation} = props
    return (
        <View style={style.container}>
            <Text style={style.text}>Home Screen</Text>
            <Button
                title="Go to About"
                onPress={() => {
                    navigation.navigate('About');
                }}
            />
        </View>
    );
}

export default Home
