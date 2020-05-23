// Employee test constructor 
// const Employee = require('../lib/Employee.js');
    // console.log(Employee);
const Intern = require('../lib/Intern.js');

test("validates name is a string and various other datatype checks", () => {
    // create a new employee with a name, ID, and email values
    const intern = new Intern('Helen',2,'helen@hotmail.com','UCBerkeley');
    expect(intern.name).toBe('Helen');
    // checks the name value is a string
    expect(typeof intern.name).toBe("string");
    //verifies id is a number
    expect(intern.id).toEqual(expect.any(Number));
    // checks the school value is a string
    expect(typeof intern.school).toBe("string");
});

// run test with an $ npm run test Intern