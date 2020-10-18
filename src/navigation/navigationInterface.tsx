
import {StackNavigationProp} from "@react-navigation/stack";

export type MainStackParamList = {
    Home: undefined;
    About: undefined;
};

export type StackParamList = MainStackParamList

export type mainNavigation = StackNavigationProp<MainStackParamList, any>;

export interface MainNavigationProps {
    navigation?: mainNavigation;
}



