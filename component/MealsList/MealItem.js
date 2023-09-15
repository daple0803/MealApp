import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = ({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
}) => {
    const navigation = useNavigation();

    function selectMealHandler() {
        return navigation.navigate("MealDetails", {
            mealId: id,
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={selectMealHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        affordability={affordability}
                        complexity={complexity}
                    />
                </View>
            </Pressable>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        backgroundColor: "#fff",
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        padding: 8,
    },
});
