import { Action } from '../Actions/Actions';
import {
  Map,
  Icon,
  IncomeEffect,
  PermanentEffect,
  EndScoreEffect,
  Card,
  PartnerZoo,
  AnimalIcon,
  ContinentIcon,
  CardType,
  AnimalCard,
} from './GameType';

export type HandlerInput = {
  map?: Map;
  appeal?: number;
  reputation?: number;
  conservation?: number;
  icons?: Icon[];
  money?: number;
  xToken?: number;
  actions?: Action[];
  incomeEffect?: IncomeEffect[];
  permanentEffect?: PermanentEffect[];
  engScoreEffect?: EndScoreEffect[];
  cards?: Card[];
  partnerZoo?: PartnerZoo[];
  workers?: Worker[];
};
export type HandlerOuput = {
  map?: Map;
  appeal?: number;
  reputation?: number;
  conservation?: number;
  icons?: Icon[];
  money?: number;
  xToken?: number;
  actions?: Action[];
  incomeEffect?: IncomeEffect[];
  permanentEffect?: PermanentEffect[];
  engScoreEffect?: EndScoreEffect[];
  cards?: Card[];
  partnerZoo?: PartnerZoo[];
  workers?: Worker[];
};

export enum AnimalEvent {
  PlaceAnimal,
  ReleaseAnimal,
}
export enum SponsorEvent {
  PlaceSponsor,
}

export type GameEvent = AnimalEvent | SponsorEvent;

export type EventInfo = Partial<AnimalCard>;

export type EventHandler = (
  input: HandlerInput,
  eventInfo: EventInfo
) => HandlerOuput;
