import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  Animated,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

function CharacterTile(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const rightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <Animated.View
        style={[styles.swipedContainer, { transform: [{ translateX: trans }] }]}
      >
        <RectButton style={styles.rightAction}>
          <MaterialIcons name="favorite-outline" size={32} />
        </RectButton>
        <RectButton style={styles.rightAction}>
          <MaterialIcons name="edit" size={32} />
        </RectButton>
        <RectButton style={styles.rightAction}>
          <MaterialIcons name="delete-outline" size={32} />
        </RectButton>
      </Animated.View>
    );
  };
  return (
    <Swipeable renderRightActions={rightActions} friction={2}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onLongPress={() => setModalVisible(true)}
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
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          {/* Buttons for Favorite, Edit, Delete */}
          {/* Centers the modal on the entire screen */}
          <View style={styles.centeredModalContainer}>
            <View style={styles.modalContainer}>
              <View style={styles.closeIcon}>
                <MaterialIcons
                  name="close"
                  size={28}
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
              <Pressable
                style={styles.modalButtonMain}
                android_ripple={{ color: "#f97316" }}
                onPress={() => {}}
              >
                <Text style={styles.modalButtonText}>Edit</Text>
              </Pressable>
              <Pressable
                style={styles.modalButtonMain}
                android_ripple={{ color: "#f97316" }}
                onPress={() => {}}
              >
                <Text style={styles.modalButtonText}>Favorite</Text>
              </Pressable>
              <Pressable
                style={styles.modalButtonMain}
                android_ripple={{ color: "#f97316" }}
                onPress={() => {}}
              >
                <Text style={styles.modalButtonText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </Pressable>
    </Swipeable>
  );
}

export default CharacterTile;

const styles = StyleSheet.create({
  tileContainer: {
    flexDirection: "row",
    width: "100%",
    height: 85,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  centeredModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  classImage: {
    resizeMode: "contain",
    width: 100,
  },
  closeIcon: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    top: 0,
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
  modalContainer: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    padding: 24,
    width: "70%",
  },
  modalButtonMain: {
    alignItems: "center",
    backgroundColor: "#ea580c",
    borderRadius: 10,
    flexDirection: "column",
    marginTop: 8,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    padding: 10,
  },
  pressedItem: {
    opacity: "rgba(0, 0, 0, 0.5)",
  },
  rightAction: {
    marginHorizontal: 8,
  },
  swipedContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
