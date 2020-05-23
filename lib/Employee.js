// -- Assignment: // The first class is an Employee parent class with the following 
//                 // 3 properties: 
//                 // 		○ name
//                 // 		○ id
//                 // 		○ email
//                 // 4 methods:
//                 // 		○ getName()
//                 // 		○ getId()
//                 // 		○ getEmail()
//                 // 		○ getRole()        // Returns 'Employee'

// -- class ------------------------- 

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}

//-- export -------------------------------

module.exports = Employee;



//-- previous -----------------------------

// // -- Employee() constructor function
// function Employee(name, id, email){
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     // this.role = function() {
//     //     if (this.role == "Manager"){
//     //         console.log("Manager")         
//     //     } else if (this.role == "Engineer"){
//     //         console.log("Engineer")  
//     //     } else {
//     //         console.log("Intern")
//     //     }
//     // };
// }


// // -- prototypes methods of Employee
// Employee.prototype.getName = function() {
//     console.log(this.name);
//     return `${this.name}`;
// }


// Employee.prototype.getID = function() {
//     console.log(this.id);
//     return `${this.id}`;
// }

// Employee.prototype.getEmail = function() {
//     console.log(this.email);
//     return `${this.email}`;
// }

// Employee.prototype.getRole = function() {
//     console.log(this.role);
//     return `${this.role}`;
// //     // if (this.role == 'Manager') {
// //     //     console.log('start manager prompt');
// //     // }
// //     // else if (this.role == 'Engineer') {
// //     //     console.log('start engineer prompt');
// //     // }
// //     // else {
// //     //     console.log('start intern prompt');
// //     // }
// }


// // -- export
// module.exports = Employee;


// // Employee.prototype.printInfo = function() {
// //     console.log(
// //         'Name: ' + this.name + 'ID: ' + this.ID + 'Email: ' + this.email
// //     );
// //     console.log('\n---------------\n');
// // };

// // //--- quick check to make sure the function is working:  ---- //
// //     //--.create a new object person of the Employee function, and insert actual values in the 3 property slots
// //     let employee = new Employee("Bob", 1, "bob@hotmail.com", "Manager");
// //     //2. ititialize person with Employee methods
// //     employee.name();
// //     employee.id();
// //     employee.email();
// //     // -- employee.role();
// //     //-- 3. run $ node Employee.js


