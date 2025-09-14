// Follow instrutions of project for Task Tracker App

// use index.html, script.js, style.css

// Final project is one folder for all the 3 files

// add the code the file tells you to do

// working on the javascript side for the most part

// push the project to gitHub. Wednesday class is going to teach us how to submit on github


// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.


// Section 2: App State Variables

// We'll use this array to keep track of the tasks and update the table with the new tasks.
let tasks = [];

const taskForm = document.getElementById("taskForm")
const taskTable = document.getElementById("taskTable")

console.log(taskForm, taskTable)
console.log("I am testing this")


// Function to handle form submissions
// This function will capture form input values, validate them, 
// update the tasks array, and call the render function to update the
// table with the new tasks. 

function handleSubmission(event){
    event.preventDefault(); // this function stops our form from reloading the page


// TODO: Get form input values
    const taskName = document.getElementById("taskName").value
    const taskDescription = document.getElementById("taskDescription").value
    const taskDeadline = document.getElementById("taskDeadline").value



// TODO: Validate input fields
    if(taskName == "" || taskDeadline == ""){
        alert('Task Name and Task Deadline are required!')
}
// TODO: Update the tasks array
    tasks.push({name: taskName, description: taskDescription, deadline: taskDeadline})

render();
   
}

function render(){
    // TODO: Use array methods to create a new table row of data for each item in the arr
    
    // HTML content inside the <table> element. tasks.map() goes through the 
    // array one by one. task => for each task, do something with it. 
    taskTable.innerHTML = tasks.map(task =>
        `
        <tr>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.deadline}</td>
        <td><button onclick="markTaskComplete(this)">Complete</button></td>
        <td><button onclick="removeTask(this)">Remove</button></td>
        </tr>
        `).join('');

        // Line 68 insertes the actual task name from our data
        // Line 69 inserts the actual task description
        // Line 70 inserts the actual deadline
        // Lines 71 creates a table cell that contains a button, the 
        // buttons says comeplete on it. When the button is clicked,
        // it shall run the markTaskComplete function. "this" refers
        // to the specfic button that was called.
        // Line 72 is the same as Line 71 except for names of variables 
        // being different.
}


// Function to initialize the table
function init(){
    taskTable.innerHTML = ''; // clear the table
    tasks = [];               // reset the tasks array
    render()
}


// This code adds an event listener to listen for form submissions and 
// trigger the handleSubmission function.
taskForm.addEventListener('submit', handleSubmission);


// Call the init function to set up the initial state of the app
init();


// the init function will be called after the handleSubmission function and the 
// render function are defined. This will set up the initial state of the app when 
// the page loa ds. Because we're calling the init function at the bottom of the file, 
// it will be called once the page has loaded and the DOM is ready. Because we've 
// added our element references, event listeners, and functions to the file, the app 
// will be set up and ready to go when the init function is called.