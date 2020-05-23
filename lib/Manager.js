// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Manager will also have:
//      officeNumber
//      getRole()        // Overridden to return 'Manager'

// -- require to import ----------------------

const Employee = require('./Employee');

// --- class --------------------------------

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

// -- export -------------------------------

module.exports = Manager;