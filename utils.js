var fs = require("fs");

// Functions for writing and removing user data from local txt files

function signup(username, password) {
    let userList = [];

    /*fs.readFile("users.txt", "utf8", function(err, data) {
        if (err) {
            return console.error(err);
        }
        const content = data;

        userList = JSON.parse(content.toString());
        console.log(userList);
    });*/

    userList = JSON.parse(fs.readFileSync("users.txt", "utf8"));

    const newUser = {
        username: username,
        password: password
    }

    if (!userExists(userList, newUser)) {
        console.log("User Does not Exist, Adding: " + newUser.username);
        userList.push(newUser);
    }
    else {
        console.log("User Exists, Not Adding");
    }

    fs.writeFile("users.txt", JSON.stringify(userList), function(err) {
        if (err) {
            return console.error(err);
        }
    });
}

function userExists(userList, user) {
    exists = false;
    userList.forEach(item => {
        if (item.username === user.username) {
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
};

