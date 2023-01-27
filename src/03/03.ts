import { students, StudentType } from "../02/02";
import { CityType, GovernmentBuildingType, HouseType } from "../02/02_02";

export function sum(a: number, b: number) {
  return a + b;
}

export function addSkill(st: StudentType, skill: string) {
  st.hobby.push({ id: new Date().getTime(), coding: skill });
}

export function makeStudentActive(s: StudentType) {
  s.isActive = true;
}

export const doesStudentLiveInCity = (st: StudentType, cityName: string) => {
  return st.address.city === cityName;
};

export const addMoneyToBudget = (
  building: GovernmentBuildingType,
  budget: number
) => {
  building.budget += budget;
};

export const repairHouse = (houseType: HouseType) => {
  houseType.repaired = true;
};

export const toFireStaff = (
  building: GovernmentBuildingType,
  staffCountToFire: number
) => {
  building.staffCount -= staffCountToFire;
};

export function toHireStaff(
  building: GovernmentBuildingType,
  staffToHire: number
) {
  building.staffCount += staffToHire;
}
export const createMessage = (city: CityType) => {
  return `Hello ${city.title} citizens. All ${city.citizensNumber} are men.`;
};
