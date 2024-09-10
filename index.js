#!/usr/bin/env node


// if (process.argv.includes("--dev")) {
//     console.log("dev");
// } else {
//     console.log("prod");
// }

// for (let i = 0; i < process.argv.length; i++) {
//     if (process.argv[i].includes("--id")) {
//         console.log(process.argv[i].split('=')[1]);
//     }
// }

const args = process.argv.slice(2);

if (args.length < 1) {
    console.error("Please provide an argument");
    process.exit(1);
}

const command = args[0];
const commandArgs = args.slice(1);

switch (command) {
    case 'add': 
        const description = commandArgs.join(' ');bp
        break;
    case 'update':
        break;
    case 'delete':
        break;
    case 'mark-in-progress':
        break;
    case 'mark-done':
        break;
    case 'list': 
        break;
    default: {
        console.error("Invalid command", command);
        process.exit(1);
    }
}

