class Character {
  constructor(
    name,
    className,
    classImage,
    completedDailies,
    completedWeeklies,
    isFavorite
  ) {
    this.name = name;
    this.className = className;
    this.classImage = classImage;
    this.completedDailies = completedDailies;
    this.completedWeeklies = completedWeeklies;
    this.isFavorite = isFavorite;
  }

  getCharacter() {} // Get the character from the database
  addCharacter(character) {} // Add the character to the database
  editCharacterName(character) {} // Edit the character name
  favoriteCharacter(character) {} // Favorite the character
  deleteCharacter(character) {} // Delete character from the database
}
