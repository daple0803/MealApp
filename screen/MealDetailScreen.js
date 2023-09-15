import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../component/MealDetails";
import Subtitle from "../component/MealDetail/Subtitle";
import List from "../component/MealDetail/List";
import IconButton from "../component/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailScreen = ({ route, navigation }) => {
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }));
        } else {
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavorite ? "star" : "star-outline"}
                        color="white"
                        onPress={changeFavoriteStatusHandler}
                    />
                );
            },
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.root}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: selectedMeal.imageUrl }}
                    style={styles.image}
                />
            </View>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                duration={selectedMeal.duration}
                textStyle={styles.detailsText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredient</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    root: {
        marginBottom: 32,
    },
    imageContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    image: {
        width: "80%",
        height: 250,
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    detailsText: {
        color: "white",
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listContainer: {
        width: "80%",
    },
});
