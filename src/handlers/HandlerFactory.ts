import { AnimalEvent, EventHandler, GameEvent } from './Handler';
import PlaceAnimalHandler from './PlaceAnimalHandler';

const HandlerFactor = (gameEvent: GameEvent): EventHandler => {
  switch (gameEvent) {
    case AnimalEvent.PlaceAnimal:
      return PlaceAnimalHandler;
    default:
      return PlaceAnimalHandler;
  }
};

export default HandlerFactor;
