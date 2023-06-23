import React from "react";
import { Text, TouchableOpacity } from "react-native"
import LinearGradient from "react-native-linear-gradient";
import { COLORS, FONTS } from "../constant/theme";

const CustomButton = ({ buttonText, buttonContainerStyle, colors, onPress }) => {
    
        return (
            <TouchableOpacity
                onPress={onPress}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={colors}
                    style={{
                        ...buttonContainerStyle
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: COLORS.black,
                            ...FONTS.h2,
                            fontWeight:"bold"
                        }}>
                        {buttonText}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    
    


}
export default CustomButton;

