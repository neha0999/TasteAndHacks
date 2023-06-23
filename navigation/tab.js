import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabIcon } from "../components";
import { COLORS, icons } from "../constant";
import { HomeScreen,Saved} from "../screens";


const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (

        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                backgroundColor: COLORS.white,
                borderTopColor: "transparent",
                height: 100

            }

        }}>
            <Tab.Screen
                name="Home"

                component={HomeScreen}
                options={{headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused}
                        icon={icons.home} />
                }}
            />
          
            <Tab.Screen name="Saved" component={Saved}
             options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon focused={focused}
                    icon={icons.bookmark} />
            }}
            />
           
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;