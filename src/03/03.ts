import { students, StudentType } from "../02/02";

export const sum = (a: number, b: number) => {
  return a + b;
};

export const addSkill = (students: StudentType, skill: string) => {
  students.hobby.push({ id: new Date().getTime(), coding: skill });
};
