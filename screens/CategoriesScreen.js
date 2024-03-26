import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    const pressHandler = () => {

      navigation.navigate("测试", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        onPress={pressHandler}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={3}
    />
  );
}

export default CategoriesScreen;
