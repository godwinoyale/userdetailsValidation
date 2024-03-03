
//Accept details using prompts
//Validate user details
//Username must be less than ten
//Password must be greater than six

//this is to make sure that the next step is not executed until the user satisfy the first step unless the user press cancel

//Userdatails database 

const users = {
    "user1": {
        firstName: "Godwin",
        lastName: "Onuh",
        email: "oyale@gmail.com",
        accountActivated: true,
        password: "godwin123"

    },

    "user2": {
        firstName: "Ray",
        lastName: "Onah",
        email: "ray@gmail.com",
        accountActivated: false,
        password: "ray123456"
    },
    "user3": {
        firstName: "Simon",
        lastName: "Jude",
        email: "simon@gmail.com",
        accountActivated: false,
        password: "simon123456"
    }
}

function displayUserDetails(){

    let username = prompt("Enter your username: ")
//console.log(validateUsername(username)) //

    while(validateUsername(username) == false){
    username = prompt("Username not valid, Pls enter a valid username")
    }

    //to exit the program without moving to the next step when the user clicks on cancel
    if(username == null){
        return // this take you out of the program
    }

    let userPassword = prompt("Enter your password: ")
    //console.log(validatePassword(userPassword)) //

    while(validatePassword(userPassword) == false){
        userPassword = prompt("You must Enter your password: ")
    }

    if(userPassword == null){
        return
    }

    //Confirm Password
    let confirmPassword = prompt("Confirm Password")

    while(confirmPassword !== userPassword){
        confirmPassword = prompt("Password do not match, pls confrim again")
    }
    if(confirmPassword == null){
        return
    }

    //check if user exist in the database and log the deails of the user

    const user = users[username]
    if(user == undefined) {
        alert("User not found! You can register on the app")
        return
    }
    //console.log(user)
    alert(`User found with details: 
    FirstName: ${user.firstName}
    LastName: ${user.lastName}
    Email: ${user.email}
    AccountActivated: ${user.accountActivated}
    `)
    
// console.log(username, userPassword, confirmPassword)

}
displayUserDetails();

alert("End of the program!"); //this is when all the prompts has been executed.


function validateUsername(username){

    if(username === null){
        return true // this is to check incase a user click cancel without entering anything
        //you can use false if u dont want the user to move to next step
    }
    if(username.length > 10){
        return false // this means username is not valid
    }else {
        return true // this means username is valid
    }
}

function validatePassword(password){
    if(password === null){
        return true // this is to check incase a user click cancel without entering anything
        //you can use false if u dont want the user to move to next step
    }

    if(password.length < 6){
        return false // this means password is not valid
    }else{
        return true // this means password is valid
    }
}


