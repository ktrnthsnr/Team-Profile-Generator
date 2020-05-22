// Employee test constructor (Important: constructors are Capitalized!)
const Employee = require('../lib/Employee.js');
    // console.log(Employee);

test("validates name is a string", () => {
    // create a new employee with a name, ID, and email values
    const employee = new Employee('Helen',2,'helen@hotmail.com');
    expect(employee.name).toBe('Helen');
    // checks the name value is a string
    expect(typeof employee.name).toBe("string");
    //verifies id is a number
    expect(employee.id).toEqual(expect.any(Number));
});






// run test with an $ npm run test Employee