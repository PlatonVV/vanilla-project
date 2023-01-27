import { CourseType } from "./04";

test("should be > 90 years old", () => {
  const ages = [18, 20, 22, 1, 100, 90, 14];
  const oldAges = ages.filter((age) => age > 90);

  expect(oldAges.length).toBe(1);
  expect(oldAges[0]).toBe(100);
});

test("should take cheap courser", () => {
  const courses = [
    { title: "CSS", price: 110 },
    { title: "JS", price: 200 },
    { title: "REACT", price: 150 },
  ];

  const cheapCourse = courses.filter((course) => course.price < 160);

  expect(cheapCourse.length).toBe(2);
  expect(cheapCourse[0].title).toBe("CSS");
  expect(cheapCourse[1].title).toBe("REACT");
});

test("get only completed tasks", () => {
  const tasks = [
    { id: 1, title: "bread", isDone: true },
    { id: 2, title: "lemon", isDone: true },
    { id: 3, title: "eggs", isDone: true },
    { id: 4, title: "butter", isDone: false },
    { id: 5, title: "milk", isDone: false },
  ];

  const filterTasks = tasks.filter((task) => !task.isDone);

  expect(filterTasks.length).toBe(2);
});
