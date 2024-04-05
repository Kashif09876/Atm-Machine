#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([{
        name: "Pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.Pin === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawsMethod",
                type: "list",
                message: "Select a withdrawal method:",
                choices: ["Fast Cash", "Enter amount"]
            }
        ]);
        if (withdrawAns.withdrawsMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "FastCash",
                    type: "list",
                    message: "Select amount:",
                    choices: [10000, 2000, 5000, 10000, 50000]
                }
            ]);
            if (fastCashAns.FastCash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastCashAns.FastCash;
                console.log(`${fastCashAns.FastCash} withdraw successfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawsMethod === "Enter amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]);
            myBalance -= amountAns.amount;
            console.log("Your reaming balance" + myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect Pin Number");
}
