let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null },
];

for(const employee of employeesArr){
    for(const key in employee){
        const value = employee[key] ?? "no value";
        if(value === "no value"){
            console.log(employee["name"]);
            break;
        }
    }
    
}