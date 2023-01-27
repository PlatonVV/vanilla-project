import { CityType } from "../02/02_02";
import { buildingsWSC, demolishHousesOnTheStreet } from "./04";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        id: 1,
        builtAt: 2012,
        repaired: false,
        address: { number: 100, street: { title: "White street" } },
      },
      {
        id: 2,
        builtAt: 2008,
        repaired: false,
        address: { number: 100, street: { title: "Happy street" } },
      },
      {
        id: 3,
        builtAt: 2020,
        repaired: false,
        address: { number: 101, street: { title: "Happy street" } },
      },
    ],
    governmentBuildings: [
      {
        type: "HOSPITAL",
        budget: 200000,
        staffCount: 200,
        address: {
          street: {
            title: "Central Str",
          },
        },
      },
      {
        type: "FIRE-STATION",
        budget: 500000,
        staffCount: 1000,
        address: {
          street: {
            title: "South Str",
          },
        },
      },
    ],
    citizensNumber: 100000,
  };
});

test("Houses should be destroyed", () => {
  demolishHousesOnTheStreet(city, "White street");

  expect(city.houses.length).toBe(2);
  expect(city.houses[0].id).toBe(2);
  expect(city.houses[1].id).toBe(3);
});

test("buildings with correct staff count", () => {
  let buildings = buildingsWSC(city.governmentBuildings, 500);

  expect(buildings.length).toBe(1);
  expect(buildings[0].staffCount).toBe(1000);
});
