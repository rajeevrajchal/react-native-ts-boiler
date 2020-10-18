import React, {Dispatch} from 'react';
import {Modal, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/interface/storeInterface";
import {closeModal} from "./service/appModalAction";

interface AppModalInterface {
    children: React.ReactNode
}

const AppModal: React.FC<AppModalInterface> = (props) => {
    const {
        children
    } = props
    const {
        isOpenModal
    } = useSelector((state:RootState) => state.appModalReducer)
    const dispatch = useDispatch<Dispatch<any>>()
    return (
        <Modal
            animationType={"slide"}
            transparent={false}
            presentationStyle={'pageSheet'}
            visible={isOpenModal}>

            <View style={{
                flex:1,
            }}>
                <Text onPress={() => dispatch(closeModal())} style={{color: "black"}}> Close Modal </Text>
                <View style={{flex:1}}>
                    {
                        children
                    }
                </View>
            </View>

        </Modal>
    );
};

export default AppModal;
