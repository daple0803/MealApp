import CategoryGridTile from "../component/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";

function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
            });
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            numColumns={2}
            keyExtractor={(item) => item.id}
        />
    );
}

export default CategoriesScreen;
