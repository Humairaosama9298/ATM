import inquirer from "inquirer";
import chalk, { chalkStderr } from "chalk";
let userPin = 1234;
let myBailance = 20000;
let myPinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin Code",
    },
]);
if (myPinAnswer.pin === userPin) {
    console.log(chalkStderr.greenBright("Your Pin Correct!!!"));
    let opretionAns = await inquirer.prompt([
        {
            name: "accountActivity",
            type: "list",
            choices: ["CheckBalance", "WithDraw", "FastCash", "Deposit"],
            message: "What You Want to do?",
        },
    ]);
    if (opretionAns.accountActivity === "CheckBalance") {
        console.log(chalk.green(myBailance));
    }
    else if (opretionAns.accountActivity === "WithDraw") {
        let withDrawAmountAns = await inquirer.prompt([
            {
                name: "withdrawAmount",
                type: "number",
                message: "Enter Your Amount",
            },
        ]);
        if (withDrawAmountAns.withdrawAmount > myBailance) {
            console.log(chalk.red("insufficient Balance!!"));
        }
        else {
            myBailance -= withDrawAmountAns.withdrawAmount;
            console.log(chalk.greenBright("Transaction Successfull!!!" +
                chalk.yellow ` Your Current Balance:${chalk.green(myBailance)}`));
        }
    }
    else if (opretionAns.accountActivity === "FastCash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCashAmount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000", "15000", "20000"],
                message: "Select Your Amount",
            },
        ]);
        if (fastCashAns.fastCashAmount > myBailance) {
            console.log(chalk.red("insufficient Balance!!"));
        }
        else {
            myBailance -= fastCashAns.fastCashAmount;
            console.log(chalk.greenBright("Transaction Successfull!!!" +
                chalk.yellow ` Your Current Balance:${chalk.green(myBailance)}`));
        }
    }
    else if (opretionAns.accountActivity === "Deposit") {
        let depositAmountAns = await inquirer.prompt([
            {
                name: "depositAmount",
                type: "number",
                message: "Enter Your Amount",
            }
        ]);
        {
            console.log(chalk.yellow(`Your New Balance:${chalk.green(depositAmountAns.depositAmount + myBailance)}`));
        }
    }
}
else {
    console.log(chalk.redBright("Your Pin InCorrect"));
}
