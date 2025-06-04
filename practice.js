let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (const prop in myObject) {
  console.log("key:", prop, "|", "Type:", typeof myObject[prop]);
}
