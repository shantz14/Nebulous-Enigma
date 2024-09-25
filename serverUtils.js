var fs = require("fs");

// Functions for writing and removing user data from local txt files
// TODO make all this MONGODB yup

function signup(username, password) {
    let userList = [];

    try {
        userList = JSON.parse(fs.readFileSync("users.txt", "utf8"));
    } catch (error) {
        console.error("Error reading file: ", error)
    }

    const newUser = {
        username: username,
        password: password
    }

    if (!userExists(userList, newUser)) {
        console.log("User does not exist, adding user: " + newUser.username);
        userList.push(newUser);
    }
    else {
        console.log("User already exists, not adding user: " + newUser.username);
    }

    fs.writeFile("users.txt", JSON.stringify(userList), function(err) {
        if (err) {
            return console.error(err)
        }
    });
}

function login(username, password) {
    try {
        userList = JSON.parse(fs.readFileSync("users.txt", "utf8"));
    } catch (error) {
        console.error("Error reading file: ", error)
    }

    const user = {
        username: username,
        password: password
    }

    return validateCredentials(userList, user)
}

function userExists(userList, user) {
    console.log(user)
    exists = false;
    userList.forEach(item => {
        if (item.username === user.username) {
            exists = true;
        }
    });
    
    return exists;
}

function validateCredentials(userList, user) {
    console.log(user)
    exists = false;
    userList.forEach(item => {
        if (item.username === user.username&&item.password === user.password) {
            exists = true;
        }
    });
    
    return exists;
}

function removeUser(username) {
    
}

module.exports =  {
    signup,
    removeUser,
    login,
};

