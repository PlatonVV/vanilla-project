import { CityType, GovernmentBuildingType } from "../02/02_02";

const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
  return age > 90;
};

const oldAges = [100];

export type CourseType = {
  title: string;
  price: number;
};

const courses = [
  { title: "CSS", price: 110 },
  { title: "JS", price: 200 },
  { title: "REACT", price: 150 },
];

const cheapPredicate = (course: CourseType) => {
  return course.price < 160;
};

const cheapCourses = [
  { title: "JS", price: 200 },
  { title: "REACT", price: 150 },
];

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
  city.houses = city.houses.filter((h) => h.address.street.title !== street);
};

export const buildingsWSC = (
  building: Array<GovernmentBuildingType>,
  staffCount: number
) => {
  return building.filter((s) => s.staffCount > staffCount);
};
