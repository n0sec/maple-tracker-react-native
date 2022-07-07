import { CharacterClass } from "./CharacterClass";

export class Character {
  id: number;
  name: string;
  characterClass: CharacterClass;
  completedDailies: Array<string>;
  completedWeeklies: Array<string>;
  isFavorite: boolean;

  constructor(
    id: number,
    name: string,
    characterClass: CharacterClass,
    isFavorite = false,
    completedDailies = [],
    completedWeeklies = []
  ) {
    this.id = id;
    this.name = name;
    this.characterClass = characterClass;
    this.completedDailies = completedDailies;
    this.completedWeeklies = completedWeeklies;
    this.isFavorite = isFavorite;
  }

  getCharacter() {} // Get the character from the database
  addCharacter(character: Character) {} // Add the character to the database
  editCharacterName(character: Character) {} // Edit the character name
  favoriteCharacter(character: Character) {} // Favorite the character
  deleteCharacter(character: Character) {} // Delete character from the database
}
