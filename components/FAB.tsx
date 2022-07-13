import { View, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import CharacterTile from "./CharacterTile";

function FAB(props: { iconName: string; onPress: () => void }) {
  return (
    <View style={styles.fabContainer}>
      <Pressable
        android_ripple={{ color: "#fb923c" }}
        style={styles.fab}
        onPress={props.onPress}
      >
        <Icon
          name={props.iconName}
          color={"#fff"}
          size={45}
          style={styles.fabIcon}
        />
      </Pressable>
    </View>
  );
}

export default FAB;

const styles = StyleSheet.create({
  fabContainer: {
    flex: 1,
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    backgroundColor: "#f97316",
    borderRadius: 40,
    elevation: 5,
    shadowColor: "#000",
  },
  fabIcon: {
    padding: 8,
  },
});
