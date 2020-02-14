const inquirer = require("inquirer");
inquirer.prompt([{
    type: "list",
    message: "what do you want to do today",
    name: "stack",
    choices: [
        "Post an Item!!",
        "Bid on an item!!"
    ]
}]).then(async function (data) {
    if (data.stack === "Post an Item!!") {
        console.log("Hi you are posting an Item");
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "Please enter the name of an Item",
            },
            {
                type: "input",
                name: "price",
                message: "Please enter the price of an Item"
            }

        ])
    }
    else(console.log("You choose to Bid on an item"));
});