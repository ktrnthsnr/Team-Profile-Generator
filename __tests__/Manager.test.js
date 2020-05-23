// Employee test constructor 
// const Employee = require('../lib/Employee.js');
    // console.log(Employee);
const Manager = require('../lib/Manager.js');

test("validates name is a string", () => {
    // create a new employee with a name, ID, and email values
    const manager = new Manager('Helen',2,'helen@hotmail.com', 4441111);
    expect(manager.name).toBe('Helen');
    // checks the name value is a string
    expect(typeof manager.name).toBe("string");
    // verifies id is a number
    expect(manager.id).toEqual(expect.any(Number));
    // verifies id is a number
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// run test with an $ npm run test Manager
