import { EventHandler, EventInfo, HandlerInput, HandlerOuput } from './Handler';

const PlaceAnimalHandler: EventHandler = (
  { money, appeal, conservation, reputation, icons },
  { cost, bonuses, type }
): HandlerOuput => {
  return {
    money: money! - cost!,
    appeal: appeal! + bonuses?.appeal!,
    conservation: conservation! + bonuses?.conservation!,
    reputation: reputation! + bonuses?.reputation!,
    icons: icons?.concat(type!),
  };
};

export default PlaceAnimalHandler;
