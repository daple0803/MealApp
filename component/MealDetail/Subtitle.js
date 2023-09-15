import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
};

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitleContainer: {
        padding: 6,
        margin: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        borderBottomColor: "white",
        borderBottomWidth: 2,
    },
});
