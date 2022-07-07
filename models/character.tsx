export class Character {
  id: number;
  name: string;
  className: string;
  classImagePath: string;
  completedDailies: Array<string>;
  completedWeeklies: Array<string>;
  isFavorite: boolean;

  constructor(
    id: number,
    name: string,
    className: string,
    classImagePath: string,
    isFavorite = false,
    completedDailies = [],
    completedWeeklies = []
  ) {
    this.id = id;
    this.name = name;
    this.className = className;
    this.classImagePath = classImagePath;
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
