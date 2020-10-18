import {StackNavigationProp} from '@react-navigation/stack';
import React, {Dispatch} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import style from './styles';
import {useDispatch} from "react-redux";
import {openModal} from "../../common/AppModal/service/appModalAction";
import AppModal from "../../common/AppModal";
import {StackParamList} from "../../../navigation/navigationInterface";
import layout from "../../../assets/styles/layout";
import Search from "../../layout/partials/search";

interface HomeScreenProps {
    navigation: StackNavigationProp<StackParamList, 'Home'>;
}

const Home: React.FC<HomeScreenProps> = (props) => {
    const {navigation} = props
    const dispatch = useDispatch<Dispatch<any>>()
    return (
        <SafeAreaView style={[layout.flexOne, layout.safeAreaSecondaryTop]}>
            <Text onPress={() => dispatch(openModal())}>Open modal </Text>
            <View style={layout.containerPadding}>
                <Search/>
            </View>
            <AppModal>
                <Text style={style.text}>Modal Screen</Text>
            </AppModal>
        </SafeAreaView>
    );
}

export default Home
