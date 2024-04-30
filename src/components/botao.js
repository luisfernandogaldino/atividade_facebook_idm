import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../css/botaoStyle";
import { router } from "expo-router";

export default function Botao({btn, cor, src, texto}){
    const [isPressed, setIsPressed] = useState(false);
    const handlePress = () => {
        setIsPressed(!isPressed);
        router.navigate(src);
    }

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor:cor }, isPressed ? styles.buttonPressed : null]}
            onPress={handlePress}
        >
            <Text style={[styles.buttonText, {color:texto}]}>{btn}</Text>
        </TouchableOpacity>
    );
}