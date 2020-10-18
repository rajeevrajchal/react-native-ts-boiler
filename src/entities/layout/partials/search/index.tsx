import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from "react-native";
import color from "../../../../assets/styles/color";
import layout from "../../../../assets/styles/layout";
import AppIcon from "../../../common/AppIcon";
import AppIconButton from "../../../common/AppIconButton";

const Search = () => {
    const [keyword, setKeyword] = useState<string>('')
    const handleChange = (value:string) => {
        setKeyword(value)
    }
    console.log(keyword)

    return (
        <View style={[layout.inputBox, layout.boxShadow]}>
            <AppIcon
                iconName={'search1'}
            />
            <TextInput
                onChangeText={value => handleChange(value)}
                style={layout.inputField}
                placeholder={"Search ..."}
                placeholderTextColor={color.dark}
            />
        </View>
    );
};

export default Search;
