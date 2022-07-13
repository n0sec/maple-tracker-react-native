import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageSourcePropType } from "react-native";

export class Character {
  name: string;
  className: ClassNames;
  classImagePath: ImageSourcePropType;
  classColor: string;
  completedDailies: Array<string>;
  completedWeeklies: Array<string>;
  isFavorite: boolean;

  constructor(
    name: string,
    className: ClassNames,
    isFavorite = false,
    completedDailies = [],
    completedWeeklies = []
  ) {
    this.name = name;
    this.className = className;
    this.classImagePath = classImages[className] as ImageSourcePropType;
    this.classColor = classColors[className];
    this.completedDailies = completedDailies;
    this.completedWeeklies = completedWeeklies;
    this.isFavorite = isFavorite;
  }

  async getCharacter(character: Character) {
    try {
      const jsonValue = await AsyncStorage.getItem(character.name);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  }

  // async getAll() {
  //   let keys: Array<string> = [];
  //   try {
  //     keys = await AsyncStorage.getAllKeys();
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   console.log(keys);
  // }

  // Add the character to the database
  async addCharacter(character: Character) {
    try {
      const jsonValue = JSON.stringify(character);
      await AsyncStorage.setItem(character.name, jsonValue);

      console.log(`${character.name} successfully added.`);
    } catch (e) {
      console.log(e);
    }
  }
  editCharacterName(character: Character) {} // Edit the character name
  favoriteCharacter(character: Character) {} // Favorite the character
  deleteCharacter(character: Character) {} // Delete character from the database
}

export enum ClassNames {
  adele = "Adele",
  angelicBuster = "Angelic Buster",
  aran = "Aran",
  ark = "Ark",
  battleMage = "Battle Mage",
  beastTamer = "Beast Tamer",
  bishop = "Bishop",
  blaster = "Blaster",
  blazeWizard = "Blaze Wizard",
  bowMaster = "Bow Master",
  buccaneer = "Buccaneer",
  cadena = "Cadena",
  cannoneer = "Cannoneer",
  corsair = "Corsair",
  darkKnight = "Dark Knight",
  dawnWarrior = "Dawn Warrior",
  demonAvenger = "Demon Avenger",
  demonSlayer = "Demon Slayer",
  dualBlade = "Dual Blade",
  evan = "Evan",
  hayato = "Hayato",
  hero = "Hero",
  hoyoung = "Hoyoung",
  illium = "Illium",
  jett = "Jett",
  kain = "Kain",
  kaiser = "Kaiser",
  kanna = "Kanna",
  kinesis = "Kinesis",
  lara = "Lara",
  luminous = "Luminous",
  firePoisonMage = "Fire/Poison Mage",
  iceLightningMage = "Ice/Lightning Mage",
  marksman = "Marksman",
  mechanic = "Mechanic",
  mercedes = "Mercedes",
  mihile = "Mihile",
  nightLord = "Night Lord",
  nightWalker = "Night Walker",
  paladin = "Paladin",
  pathfinder = "Pathfinder",
  phantom = "Phantom",
  shade = "Shade",
  shadower = "Shadower",
  thunderBreaker = "Thunder Breaker",
  wildHunter = "Wild Hunter",
  windArcher = "Wind Archer",
  xenon = "Xenon",
  zero = "Zero",
}

export const classImages: Record<ClassNames, string> = {
  [ClassNames.adele]: "./images/classes/adele.webp",
  [ClassNames.angelicBuster]: "./images/classes/angelicBuster.webp",
  [ClassNames.aran]: "./images/classes/aran.webp",
  [ClassNames.ark]: "./images/classes/ark.webp",
  [ClassNames.battleMage]: "./images/classes/battleMage.webp",
  [ClassNames.beastTamer]: "./images/classes/beastTamer.webp",
  [ClassNames.bishop]: "./images/classes/bishop.webp",
  [ClassNames.blaster]: "./images/classes/blaster.webp",
  [ClassNames.blazeWizard]: "./images/classes/blazeWizard.webp",
  [ClassNames.bowMaster]: "./images/classes/bowMaster.webp",
  [ClassNames.buccaneer]: "./images/classes/buccaneer.webp",
  [ClassNames.cadena]: "./images/classes/cadena.webp",
  [ClassNames.cannoneer]: "./images/classes/cannoneer.webp",
  [ClassNames.corsair]: "./images/classes/corsair.webp",
  [ClassNames.darkKnight]: "./images/classes/darkKnight.webp",
  [ClassNames.dawnWarrior]: "./images/classes/dawnWarrior.webp",
  [ClassNames.demonAvenger]: "./images/classes/demonAvenger.webp",
  [ClassNames.demonSlayer]: "./images/classes/demonSlayer.webp",
  [ClassNames.dualBlade]: "./images/classes/dualBlade.webp",
  [ClassNames.evan]: "./images/classes/evan.webp",
  [ClassNames.hayato]: "./images/classes/hayato.webp",
  [ClassNames.hero]: "./images/classes/hero.webp",
  [ClassNames.hoyoung]: "./images/classes/hoyoung.webp",
  [ClassNames.illium]: "./images/classes/illium.webp",
  [ClassNames.jett]: "./images/classes/jett.webp",
  [ClassNames.kain]: "./images/classes/kain.webp",
  [ClassNames.kaiser]: "./images/classes/kaiser.webp",
  [ClassNames.kanna]: "./images/classes/kanna.webp",
  [ClassNames.kinesis]: "./images/classes/kinesis.webp",
  [ClassNames.lara]: "./images/classes/lara.webp",
  [ClassNames.luminous]: "./images/classes/luminous.webp",
  [ClassNames.firePoisonMage]: "./images/classes/firePoisonMage.webp",
  [ClassNames.iceLightningMage]: "./images/classes/iceLightningMage.webp",
  [ClassNames.marksman]: "./images/classes/marksman.webp",
  [ClassNames.mechanic]: "./images/classes/mechanic.webp",
  [ClassNames.mercedes]: "./images/classes/mercedes.webp",
  [ClassNames.mihile]: "./images/classes/mihile.webp",
  [ClassNames.nightLord]: "./images/classes/nightLord.webp",
  [ClassNames.nightWalker]: "./images/classes/nightWalker.webp",
  [ClassNames.paladin]: "./images/classes/paladin.webp",
  [ClassNames.pathfinder]: "./images/classes/pathfinder.webp",
  [ClassNames.phantom]: "./images/classes/phantom.webp",
  [ClassNames.shade]: "./images/classes/shade.webp",
  [ClassNames.shadower]: "./images/classes/shadower.webp",
  [ClassNames.thunderBreaker]: "./images/classes/thunderBreaker.webp",
  [ClassNames.wildHunter]: "./images/classes/wildHunter.webp",
  [ClassNames.windArcher]: "./images/classes/windArcher.webp",
  [ClassNames.xenon]: "./images/classes/xenon.webp",
  [ClassNames.zero]: "./images/classes/zero.webp",
};

export const classColors: Record<ClassNames, string> = {
  [ClassNames.adele]: "#93c5fd",
  [ClassNames.angelicBuster]: "#f757cc",
  [ClassNames.aran]: "",
  [ClassNames.ark]: "#801100",
  [ClassNames.battleMage]: "",
  [ClassNames.beastTamer]: "#a16207",
  [ClassNames.bishop]: "#f0de54",
  [ClassNames.blaster]: "#914206",
  [ClassNames.blazeWizard]: "",
  [ClassNames.bowMaster]: "#059669",
  [ClassNames.buccaneer]: "",
  [ClassNames.cadena]: "#be185d",
  [ClassNames.cannoneer]: "",
  [ClassNames.corsair]: "",
  [ClassNames.darkKnight]: "",
  [ClassNames.dawnWarrior]: "",
  [ClassNames.demonAvenger]: "#2f0347",
  [ClassNames.demonSlayer]: "#2d0b40",
  [ClassNames.dualBlade]: "",
  [ClassNames.evan]: "",
  [ClassNames.hayato]: "",
  [ClassNames.hero]: "",
  [ClassNames.hoyoung]: "#0ea5e9",
  [ClassNames.illium]: "#3b82f6",
  [ClassNames.jett]: "#7c3aed",
  [ClassNames.kain]: "#7f1d1d",
  [ClassNames.kaiser]: "#dc2626",
  [ClassNames.kanna]: "#9333ea",
  [ClassNames.kinesis]: "#44403c",
  [ClassNames.lara]: "#99edc3",
  [ClassNames.luminous]: "",
  [ClassNames.firePoisonMage]: "#15803d",
  [ClassNames.iceLightningMage]: "#60a5fa",
  [ClassNames.marksman]: "",
  [ClassNames.mechanic]: "",
  [ClassNames.mercedes]: "#a3e635",
  [ClassNames.mihile]: "#fcd34d",
  [ClassNames.nightLord]: "#701a75",
  [ClassNames.nightWalker]: "#581c87",
  [ClassNames.paladin]: "",
  [ClassNames.pathfinder]: "#4c1d95",
  [ClassNames.phantom]: "",
  [ClassNames.shade]: "",
  [ClassNames.shadower]: "#86198f",
  [ClassNames.thunderBreaker]: "#22a4e6",
  [ClassNames.wildHunter]: "",
  [ClassNames.windArcher]: "",
  [ClassNames.xenon]: "",
  [ClassNames.zero]: "",
};
