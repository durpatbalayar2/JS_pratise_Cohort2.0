//Destructing ka matlab hota hai kisi bhi
// structure (object/array) ko tod kar
// uske parts alag-alag variables mein rakh dena

//1.Obj Destructing

let obj = {
  user: "Ram",
  age: 50,
  city: "Delhi",
};

//Destructing Obj
let { user, age, city } = obj;
//Yaha kya hua?
// user -> obj.user
// age -> obj.age
//city -> obj.city

console.log(user);
console.log(age);
console.log(city);

//2. Array Destructing

let arr = ["Ram", "Hari", "Sita", "Gita", "Karan", "Rita"];

let [a, b,c,...d]= arr;

// yaha kya hua?
// a -> arr[0]--> Ram
// b -> arr[1]--> Hari
// c -> arr[2]--> Sita
// d -> bakki sab values ek array mein
