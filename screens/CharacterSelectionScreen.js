import CharacterTile from "../components/CharacterTile";
import TrackerTile from "../components/TrackerTile";
import Header from "../components/Header";

function CharacterSelectionScreen() {
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

  return (
    <>
      <Header
        title="Character Selection"
        leftMenuEnabled={false}
        rightIcons={rightIcons}
      />
      <CharacterTile
        characterName="Aiden Slowfire"
        className="Nightlord"
        classColor="blue"
        imageSource="https://static.wikia.nocookie.net/maplestory/images/7/7f/ClassArtwork_Phantom_%28Nova%29.png/revision/latest?cb=20170825014308"
      />
      <CharacterTile
        characterName="Aiden Slowfire"
        className="Nightlord"
        classColor="orange"
        imageSource="https://static.wikia.nocookie.net/maplestory/images/7/7f/ClassArtwork_Phantom_%28Nova%29.png/revision/latest?cb=20170825014308"
      />
      <CharacterTile
        characterName="Aiden Slowfire"
        className="Adele"
        classColor="blue"
        imageSource="https://static.wikia.nocookie.net/maplestory/images/7/7f/ClassArtwork_Phantom_%28Nova%29.png/revision/latest?cb=20170825014308"
      />
      <TrackerTile
        activityName="Zakum"
        imageSource={require("../assets/images/bosses/zakum.webp")}
      />
    </>
  );
}

export default CharacterSelectionScreen;
