export type ManType = {
  name: string;
  age: number;
};

const people: Array<ManType> = [
  { name: "Andrew Ivanov", age: 33 },
  { name: "Alexander Petrov", age: 24 },
  { name: "Dmitry Sidorov", age: 18 },
];

const diptychTransformation = (man: ManType) => {
  return {
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
  };
};

const devs = [
  {
    stack: ["css, html", "js", "tdd", "react"],
    firstName: "Andrew",
    lastName: "Ivanov",
  },
  {
    stack: ["css, html", "js", "tdd", "react"],
    firstName: "Alexander",
    lastName: "Petrov",
  },
  {
    stack: ["css, html", "js", "tdd", "react"],
    firstName: "Dmitry",
    lastName: "Sidorov",
  },
];

const dev2 = [
  diptychTransformation(people[0]),
  diptychTransformation(people[1]),
  diptychTransformation(people[2]),
];

const dev3 = people.map(diptychTransformation);

const dev4 = people.map((man) => ({
  stack: ["css, html", "js", "tdd", "react"],
  firstName: man.name.split(" ")[0],
  lastName: man.name.split(" ")[1],
}));

const messages = people.map(
  (man) => `hello ${man.name.split(" ")[0]} welcome to It-incubator`
);

export const createGreetingsMessage = (people: Array<ManType>) => {
  return people.map(
    (man) => `hello ${man.name.split(" ")[0]} welcome to It-incubator`
  );
};
