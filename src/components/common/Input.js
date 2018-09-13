import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, isPassword, autoCapitalize }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle} >
                {label}
            </Text>
            <TextInput
                autoCorrect={false}
                style={inputStyle}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                secureTextEntry={isPassword}
                autoCapitalize={autoCapitalize || "sentences"}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15,
        lineHeight: 23,
        flex: 2,
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 15,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
export { Input };
