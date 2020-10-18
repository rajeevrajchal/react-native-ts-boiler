import React from 'react';
import {Button, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {MainHeaderProps} from "../../../screens/home/interface/HomeInterface";
import {mainNavigation} from "../../../../navigation/navigationInterface";
import layout from "../../../../assets/styles/layout";
import styles from "./styles";
import AppIcon from "../../../common/AppIcon";

const MainHeader: React.FC<MainHeaderProps> = () => {
    const navigation = useNavigation<mainNavigation>();
    return (
        <SafeAreaView>
            <View style={[
                layout.displayRow,
                layout.itemCenter,
                layout.alignCenter,
                layout.displayBetween,
                layout.contentHorizontalPadding,
            ]}>
                <AppIcon
                    iconName={'appstore-o'}
                    iconSize={30}
                />
                <TouchableOpacity
                    onPress={() => console.log('hello world ')}
                    style={styles.mainHeaderImage}>
                    <Image
                        style={layout.img}
                        resizeMode={"contain"}
                        source={require('../../../../assets/images/woman.png')}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default MainHeader;
