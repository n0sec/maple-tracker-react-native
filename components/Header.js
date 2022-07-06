import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Header(props) {
  return (
    <View style={styles.headerContainer}>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor={"#f97316"}
      />
      {props.leftMenuEnabled && (
        <MaterialIcons name="menu" size={28} style={styles.menuIcon} />
      )}
      <View>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
      <View style={styles.iconsContainerRight}>
        {props.rightIcons.map((icon, index) => (
          <MaterialIcons
            name={icon.name}
            onPress={icon.onPress}
            size={28}
            style={
              index === props.rightIcons.length - 1
                ? styles.firstRightIcon
                : styles.rightIcons
            }
            key={index}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstRightIcon: {
    color: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#f97316",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: "100%",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  iconsContainerRight: {
    flexDirection: "row",
    position: "absolute",
    right: 12,
  },
  menuIcon: {
    position: "absolute",
    color: "#fff",
    left: 12,
  },

  rightIcons: {
    color: "#fff",
    marginRight: 8,
  },
});

export default Header;
