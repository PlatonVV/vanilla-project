import { GovernmentBuildingType, HouseType } from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (
  buildings: Array<GovernmentBuildingType>
) => {
  return buildings.map((b) => b.address.street.title);
};

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
  return houses.map((h) => h.address.street.title);
};

export const messageForEachStreet = (houses: Array<HouseType>) => {
  return houses.map((h) => `Hello guys from ${h.address.street.title}`);
};
