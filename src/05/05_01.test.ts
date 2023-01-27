import { createGreetingsMessage, ManType } from "./05_01";

let people: Array<ManType> = [];

beforeEach(() => {
  people = [
    { name: "Andrew Ivanov", age: 33 },
    { name: "Alexander Petrov", age: 24 },
    { name: "Dmitry Sidorov", age: 18 },
  ];
});

test("should get array of greeting messages", () => {
  const messages = createGreetingsMessage(people);
  expect(messages.length).toBe(3);
  expect(messages[0]).toBe("hello Andrew welcome to It-incubator");
  expect(messages[1]).toBe("hello Alexander welcome to It-incubator");
  expect(messages[2]).toBe("hello Dmitry welcome to It-incubator");
});
