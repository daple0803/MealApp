import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import { store } from "./store/redux/store";
import CategoriesScreen from "./screen/CategoriesScreen";
import MealsOverviewScreen from "./screen/MealsOverviewScreen";
import MealDetailScreen from "./screen/MealDetailScreen";
import FavoritesScreen from "./screen/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#5d7b6f",
                },
                headerTintColor: "#fff",
                sceneContainerStyle: {
                    backgroundColor: "#a4c3a2",
                },
                drawerContainerStyle: {
                    backgroundColor: "#5d7b6f",
                },
                drawerInactiveStyle: "white",
                defaultBackgroundColor: "#98e6c7",
            }}>
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "Danh mục đồ ăn",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="FavoritesMeal"
                component={FavoritesScreen}
                options={{
                    title: "Đồ ằn yêu thích",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="star" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: "#5d7b6f",
                            },
                            headerTintColor: "#fff",
                            contentStyle: {
                                backgroundColor: "#a4c3a2",
                            },
                        }}>
                        <Stack.Screen
                            name="Drawer"
                            component={DrawerNavigator}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="MealsOverview"
                            component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name="MealDetails"
                            component={MealDetailScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>
    );
}

const styles = StyleSheet.create({});
