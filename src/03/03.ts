import { students, StudentType } from "../02/02";

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
