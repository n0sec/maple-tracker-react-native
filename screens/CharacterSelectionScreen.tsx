import FAB from "../components/FAB";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  ListRenderItem,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Character, ClassNames } from "../models/Character";
import React, { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Picker } from "@react-native-picker/picker";
import CharacterTile from "../components/CharacterTile";
import { useCharacter } from "../contexts/CharacterContext";

const testChar = new Character("Nick", ClassNames.ark, false, [], []);

const CharacterSelectionScreen = () => {
  const [selectedClass, setSelectedClass] = useState<ClassNames>(
    ClassNames.adele
  );
  const [enteredCharName, setEnteredCharName] = useState("");
  const [characters] = useCharacter();
  const [character, setCharacter] = useCharacter();

  const rightIcons = [
    {
      name: "search",
      onPress() {
        console.log("Pressed", this.name);
      },
    },
    {
      name: "filter-list",
      onPress() {
        console.log("Pressed", this.name);
      },
    },
  ];

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => [185], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const renderCharacterTile: ListRenderItem<Character> = ({ item }) => (
    <CharacterTile
      characterName={item.name}
      className={item.className}
      imageSource={item.classImagePath}
      classColor={item.classColor}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <CharacterTile
        characterName={testChar.name}
        className={testChar.className}
        imageSource={testChar.classImagePath}
        classColor="blue"
      /> */}

      {/* FlatList for Character Tiles */}
      <FlatList
        data={characters.characters}
        renderItem={renderCharacterTile}
        keyExtractor={(character) => character.name}
      />
      {/* Floating Action Button */}
      <FAB
        iconName="add"
        onPress={() => {
          /**
           * Is it clicked
           */
          bottomSheetRef.current?.expand();
        }}
      />
      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onChange={handleSheetChanges}
      >
        <View style={styles.bottomSheetContainer}>
          <TextInput
            placeholder="Character Name"
            keyboardType="default"
            maxLength={12}
            style={styles.charNameInput}
            onChangeText={setEnteredCharName}
          />
          <Picker
            selectedValue={selectedClass}
            onValueChange={(itemValue) =>
              setSelectedClass(itemValue as unknown as ClassNames)
            }
          >
            {Object.values(ClassNames).map((className) => (
              <Picker.Item
                label={className}
                value={className}
                key={className}
              />
            ))}
          </Picker>

          <View style={{ paddingTop: 8 }}>
            <Button
              title="Create"
              color={"#f97316"}
              onPress={() => {
                // If the entered character name is falsy or empty, don't do anything
                if (!enteredCharName || enteredCharName == "") {
                  return;
                }

                const createdCharacter = new Character(
                  enteredCharName,
                  selectedClass,
                  false,
                  [],
                  []
                );

                // Copy the created character into the existing global state
                const charCopy = [...character.characters, createdCharacter];
                setCharacter({ characters: charCopy });

                createdCharacter.addCharacter(createdCharacter);

                bottomSheetRef.current?.close();
              }}
            />
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default CharacterSelectionScreen;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  charNameInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    fontSize: 16,
    marginBottom: 8,
  },
});
