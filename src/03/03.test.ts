import { StudentType } from "../02/02";
import { addSkill, doesStudentLiveInCity, makeStudentActive } from "./03";

let student: StudentType;
beforeEach(() => {
  student = {
    id: 1,
    name: "Platon",
    age: 33,
    isActive: false,
    address: {
      city: "New York City",
      country: "United States",
      streetAddress: "107-03 86 Ave",
      zipCode: "11418",
    },
    hobby: [
      {
        id: 1,
        coding: "html",
      },
      {
        id: 2,
        coding: "sax",
      },
    ],
  };
});

test("New skill added successfully", () => {
  expect(student.hobby.length).toBe(2);

  addSkill(student, "JS");

  expect(student.hobby.length).toBe(3);
  expect(student.hobby[2].coding).toBe("JS");
  expect(student.hobby[2].id).toBeDefined();
});

test("student is active", () => {
  expect(student.isActive).toBe(false);

  makeStudentActive(student);

  expect(student.isActive).toBe(true);
});

test("does student live in city", () => {
  const result1 = doesStudentLiveInCity(student, "Moscow");
  const result2 = doesStudentLiveInCity(student, "New York City");

  expect(result1).toBe(false);
  expect(result2).toBe(true);
});
