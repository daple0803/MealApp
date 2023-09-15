import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../component/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter((meal) =>
        favoriteMealIds.includes(meal.id)
    );

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>
                    Bạn chưa yêu thích món ăn nào cả!
                </Text>
            </View>
        );
    }
    return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
});
