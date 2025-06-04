const mobile = {
  brand: "Samsung",
  price: 25000,
  color: "Black",
  camera: "12mp",
};

// For of: Array
// For in: Object

for (const prop in mobile) {
  console.log(mobile[prop]);
}
