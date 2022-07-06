import { View, StyleSheet, Image, Text, Animated } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "react-native-vector-icons/MaterialIcons";

function TrackerTile(props) {
  const leftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 25, 50, 75, 100, 101],
      outputRange: [-75, -50, -25, 0, 0, 1],
      extrapolate: "clamp",
    });
    return (
      <Animated.View
        style={[styles.swipedContainer, { transform: [{ translateX: trans }] }]}
      >
        <Animated.View style={{ transform: [{ translateX: trans }] }}>
          <Icon name="check" size={32} style={styles.leftIcon} />
        </Animated.View>
      </Animated.View>
    );
  };

  return (
    <Swipeable renderLeftActions={leftActions}>
      <View style={styles.tileContainer}>
        <Image source={props.imageSource} style={styles.activityImage} />
        <View style={styles.activityNameContainer}>
          <Text style={styles.activityName}>{props.activityName}</Text>
        </View>
      </View>
    </Swipeable>
  );
}

export default TrackerTile;

const styles = StyleSheet.create({
  tileContainer: {
    flexDirection: "row",
    width: "100%",
    height: 85,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  activityImage: {
    resizeMode: "contain",
    width: 100,
    height: "100%",
  },
  activityNameContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 16,
  },
  activityName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  leftIcon: {
    marginHorizontal: 8,
    color: "#fff",
  },
  swipedContainer: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#388e3c",
    alignItems: "center",
  },
});
