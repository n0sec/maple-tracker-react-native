import {
  View,
  StyleSheet,
  Image,
  Text,
  Animated,
  ImageProps,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { ImageSource } from "react-native-vector-icons/Icon";
import Icon from "react-native-vector-icons/MaterialIcons";

function TrackerTile(props: {
  imageSource: ImageSource;
  activityName: string;
}) {
  const leftActions = (
    _progress: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation
  ) => {
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
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    marginTop: 8,
    marginLeft: 8,
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
    marginTop: 8,
    alignItems: "center",
  },
});
