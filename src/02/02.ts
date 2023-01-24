type AddressType = {
  city: string;
  country: string;
  streetAddress: string;
  zipCode: string;
};
type HobbyType = {
  id: number;
  coding: string;
};
export type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  address: AddressType;
  hobby: Array<HobbyType>;
};

export const students: StudentType = {
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

console.log(students.hobby[1].coding);
