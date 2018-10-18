
let users;
console.log("1");

fetchUsers(users);


// Async // Await // Fetch
async function fetchUsers(users) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();    
    console.log("2");
    users = data;
    continueExecution(data)
}


function continueExecution(users){

    console.log("3");
    console.log(users);
}