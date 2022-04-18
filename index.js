const employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = {...employee};
  newEmployee[""] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {...employee};
  delete newEmployee[key]
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]
  return employee;
}


console.log(employee);
console.log(employee.name, employee.streetAddress)