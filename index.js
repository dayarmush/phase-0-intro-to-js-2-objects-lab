const employee = {
    name: 'John Smith',
    streetAddress: '123 Sesame Street',
};

function updateEmployeeWithKeyAndValue(employee, key, value,) {
    const newEployee = {...employee};

    newEployee[key] = value;

    return newEployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value,) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key,) {
    const newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee
};

function destructivelyDeleteFromEmployeeByKey(employee, key,) {
    delete employee[key];
    return employee;
};