export type Map = {};

export enum ContinentIcon {
  Asia = '🟢',
  Africa = '🟡',
  America = '🟠',
  Australia = '🔴',
  Europe = '🔵',
}

export enum AnimalIcon {
  Bird = '🕊',
  Predator = '🐅',
  Herbivore = '🐐',
  Primate = '🐒',
  Pet = '🐱',
  Bear = '🧸',
  Reptile = '🦎',
}

export enum MapIcon {
  Rock = '🪨',
  Water = '💧',
}

export enum ScienceIcon {
  Research = '🔬',
  WildIcon = '🔳',
}

export type Icon = MapIcon | ScienceIcon | ContinentIcon | MapIcon | AnimalIcon;
export type IncomeEffect = {};
export type PermanentEffect = {};

export enum CardType {
  Sponsor,
  Project,
  Animal,
}
export type Card = {
  type: CardType;
};
export type Worker = {
  isWorking: boolean;
};
export enum PartnerZoo {
  Asia,
  Africa,
  America,
  Australia,
  Europe,
}

export type AnimalCard = {
  cardType: CardType;
  animalName: string;
  latinName: string;
  // enclosure: '1-LBA 1',
  cost: number;
  type: AnimalIcon;
  continent: ContinentIcon;
  requirements: Icon[];
  bonuses: {
    appeal: number;
    conservation: number;
    reputation: number;
  };
};

export type EndScoreEffect = {};
