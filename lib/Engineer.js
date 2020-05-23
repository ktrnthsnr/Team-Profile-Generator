// -- Assignment --------------------------------------------------------------------
// // The other three classes will extend Employee.
// // In addition to Employee's properties and methods, Engineer will also have:
// // 		○ github          // GitHub username
// // 		○ getGithub()
// // 		○ getRole()     // Overridden to return 'Engineer'


// -- require to import ----------------------

const Employee = require('./Employee');

// --- class --------------------------------

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;       // -- new property
    }
                                    // -- new method
    getGitHub() {
        return this.github;
    }
}

// -- export -------------------------------

module.exports = Engineer;




// -- previous  -------------------------------

// // -- import Employee module into Engineer
// const Employee = require("./Employee");

// // -- Engineer() constructor function
// function Engineer(name, id, email, role, github){
//     this.github = github;
//     this.role = "Engineer";
//     // -- import Employee 
//     this.engineer = [new Employee('name', 'role', 'id', 'email', 'github'), new Employee()];
// }

// // -- a. prototype of Employee
// Engineer.prototype.printInfo = function(){
//     console.log('${this.name} ${this.id} ${this.email} ${this.email}');
// }

// // -- export
// module.exports = Engineer;

