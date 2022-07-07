import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Animated,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "react-native-vector-icons/MaterialIcons";

function CharacterTile(props: {
  imageSource: string;
  characterName: string;
  classColor: string;
  className: string;
}) {
  const rightActions = (
    _progress: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation
  ) => {
    const trans = dragX.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    return (
      <Animated.View
        style={[styles.swipedContainer, { transform: [{ translateX: trans }] }]}
      >
        <Animated.View style={{ transform: [{ translateX: trans }] }}>
          <Icon name="favorite-outline" size={32} style={styles.rightAction} />
        </Animated.View>
        <Animated.View style={{ transform: [{ translateX: trans }] }}>
          <Icon name="edit" size={32} style={styles.rightAction} />
        </Animated.View>
        <Animated.View style={{ transform: [{ translateX: trans }] }}>
          <Icon name="delete-outline" size={32} style={styles.rightAction} />
        </Animated.View>
      </Animated.View>
    );
  };
  return (
    <Swipeable renderRightActions={rightActions}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.tileContainer}>
          <Image
            source={{ uri: props.imageSource }}
            style={styles.classImage}
          />
          <View style={styles.charInfoContainer}>
            {/* Character Name & Class Name */}
            <Text style={styles.charName}>{props.characterName}</Text>
            <Text style={[styles.className, { color: props.classColor }]}>
              {props.className}
            </Text>
          </View>
        </View>
      </Pressable>
    </Swipeable>
  );
}

export default CharacterTile;

const styles = StyleSheet.create({
  tileContainer: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    marginTop: 8,
    marginLeft: 8,
  },
  classImage: {
    resizeMode: "contain",
    width: 100,
  },
  charInfoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 16,
  },
  charName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  className: {
    fontSize: 16,
    fontWeight: "100",
    fontStyle: "italic",
  },
  pressedItem: {
    // opacity: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "#fff",
  },
  rightAction: {
    marginHorizontal: 8,
  },
  swipedContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
