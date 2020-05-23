// --- Assignment --------------------------------------------------------------
// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Intern will also have:
// 		○ school
// 		○ getSchool()
// 		○ getRole() // Overridden to return 'Intern'


// -- require to import ----------------------

const Employee = require('./Employee');

// --- class --------------------------------

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

// -- export -------------------------------

module.exports = Intern;