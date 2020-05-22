// -- require or import
// -- Engineer test constructor (Important: constructors are Capitalized!)
const Employee = require('../lib/Employee.js');
    // console.log(Employee);
const Engineer = require('../lib/Engineer.js');
    // console.log(Engineer);

test("validates name is a string", () => {
    // create a new employee with a name, ID, and email values
    const engineer = new Engineer('Sam','Engineer', 3,'Sam@hotmail.com', 'samgithub');
    expect(engineer.name).toBe('Sam');
    expect(engineer.role).toBe('Sam');
    expect(engineer.ID).toBe('Sam');
    expect(engineer.email).toBe('Sam');
    expect(engineer.github).toBe('samgithub');
   
    // checks the name value is a string
    expect(typeof engineer.name).toBe("string");
    //verifies id is a number
    expect(engineer.id).toEqual(expect.any(Number));
});






// run test with an $ npm run test Employee