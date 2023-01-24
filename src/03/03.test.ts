import { StudentType } from "../02/02";

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

test("New skill added successfully", () => {});
