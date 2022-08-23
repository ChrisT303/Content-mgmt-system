const inquirer = require('inquirer');

const viewDepartments = () => {
    console.log('now viewing departments')
}
const viewRoles = () => {
    console.log('now viewing all roles')
}
const addDepartment = () => {
    console.log('now viewing added dept')
}
const addRole = () => {
    console.log('now viewing ADDED roles')
}
const addEmployee = () => {
    console.log('now viewing ADDED employees')
}
const updateEmployee = () => {
    console.log('now viewing UPDATED EMPLOYEES')  
}

const quit = () => {
    console.log('Thanks!')
    process.exit();
}

const choiceMap = {
    viewDepartments,
    viewRoles,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee,
    quit,
};

const handleChoice = (choice) => {
    choiceMap[choice]()
    if(choice !== 'quit'){
        userPrompt();
    }
}

const userPrompt = async () => { 
    const result = await inquirer.prompt([
    {
        message: "What would you like to do?",
        type: 'list',
        name: 'userChoice',
        choices: [
            {
                name: 'View all departments',
                value: 'viewDepartments'
            },
            {
                name: 'View all roles',
                value: 'viewRoles',
            },
            {
                name: 'View all roles',
                value: 'viewRoles',
            },
            {
                name: 'Add a department',
                value: 'addDepartment',
            },
            {
                name: 'Add a role',
                value: 'addRole',
            },
            {
                name: 'Add an employee',
                value: 'addEmployee',
            },
            {
                name: 'Update employee role',
                value: 'updateEmployee',
            },
            {
                name: 'Quit',
                value: 'quit'
            },
        ],
    },
]);
 handleChoice(result.userChoice);
};

userPrompt();